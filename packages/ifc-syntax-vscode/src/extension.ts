import * as vscode from "vscode"

import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
  TransportKind
} from "vscode-languageclient/node"

import registerCommands from "./registerCommands"
import { IfcHeadInfoProvider } from "./ifcHeadTreeProvider"

let extensionConfig: vscode.WorkspaceConfiguration = null
let languageClient: LanguageClient = null

export function activate(context: vscode.ExtensionContext) {
  console.log("IFC-Syntax has been activated.")

  extensionConfig = vscode.workspace.getConfiguration("ifcSyntax")

  vscode.workspace.onDidChangeConfiguration(e => {
    if (e.affectsConfiguration("ifcSyntax.server.enabled")) {
      handleServerEnableChanged(context)
    }
  })

  vscode.window.registerTreeDataProvider("ifcHeader", new IfcHeadInfoProvider())

  vscode.window.registerUriHandler({
    handleUri(uri: vscode.Uri) {
      let query: any = parseQueryString(uri.query)
      languageClient.sendRequest("ifc-syntax.docs", query).then(value => {
        vscode.commands.executeCommand("ifcSyntax.openDocsViewer", uri, value)
      })
    }
  })

  registerCommands(context)

  languageClient = setupServer(context)
  var serverEnabled = extensionConfig.get("server.enabled")
  if (serverEnabled) {
    // Start the client. This will also launch the server
    languageClient.start()
    console.log("Client has started")
  }
}

function handleServerEnableChanged(context: vscode.ExtensionContext) {
  extensionConfig = vscode.workspace.getConfiguration("ifcSyntax")
  var serverEnabled = extensionConfig.get("server.enabled")
  if (serverEnabled) {
    console.log("Starting server")
    if (languageClient === null) {
      languageClient = setupServer(context)
    }
    languageClient.start()
  } else {
    console.log("Stopping server")
    languageClient.stop()
    languageClient = null
  }
}

export function deactivate(): Thenable<void> {
  return languageClient?.stop().then(() => (languageClient = null))
}

function setupServer(context: vscode.ExtensionContext): LanguageClient {
  // The server is implemented in node
  let serverModule = require.resolve("@alanrynne/ifc-syntax-server")

  // The debug options for the server
  let debugOptions = {
    execArgv: [
      "--max_old_space_size=8192",
      "--nolazy",
      "--inspect=6009",
      "--inspect-brk"
    ]
  }

  let serverOptions: ServerOptions = {
    run: {
      module: serverModule,
      transport: TransportKind.ipc
    },
    debug: {
      module: serverModule,
      transport: TransportKind.ipc,
      options: debugOptions
    }
  }

  // Options to control the language client
  let clientOptions: LanguageClientOptions = {
    // Register the server for ifc text documents
    documentSelector: [{ scheme: "file", language: "ifc" }],
    synchronize: {
      // Notify the server about file changes to '*.ifcconfig' files contained in the workspace
      fileEvents: [vscode.workspace.createFileSystemWatcher("**/*.ifcconfig")]
    }
  }

  // Create the language client and start the client.
  var client = new LanguageClient(
    "ifcServer",
    "IFC Syntax Server",
    serverOptions,
    clientOptions
  )

  client.onReady().then(() => {
    console.log("client is ready")
    client.onNotification("ifc-cache", async ({ uri, cst }) => {
      console.log("receive request to cache", cst)
      const wsPath = vscode.workspace.workspaceFolders[0].uri.fsPath
      var oldUri = vscode.Uri.parse(uri) // gets the path of the first workspace folder
      var newUri = vscode.Uri.file(
        wsPath + "/.ifc-cache/" + uri.split("/").slice(-1)[0] + "-cache"
      )
      var data = JSON.stringify(cst)
      var wEdit = new vscode.WorkspaceEdit()
      wEdit.createFile(newUri, { overwrite: true })
      wEdit.insert(newUri, new vscode.Position(0, 0), data)
      await vscode.workspace.applyEdit(wEdit).then(res => {
        console.log("result from cache call", res)
      })
    })
  })

  return client
}

export function parseQueryString(query: string): any {
  let pairs = query.split("&")
  let queryObj = {}
  pairs.forEach(pair => {
    let [key, value] = pair.split("=")
    queryObj[key] = value
  })
  return queryObj
}

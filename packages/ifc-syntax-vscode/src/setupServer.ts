import * as vscode from "vscode"
import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
  TransportKind
} from "vscode-languageclient/node"

export function setupServer(context: vscode.ExtensionContext): LanguageClient {
  // The server is implemented in node
  let serverModule = require.resolve("@alanrynne/ifc-syntax-server")

  // The debug options for the server
  let debugOptions = {
    execArgv: ["--nolazy", "--inspect=6009", "--inspect-brk"]
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
      fileEvents: vscode.workspace.createFileSystemWatcher("**/*.ifcconfig")
    }
  }

  // Create the language client and start the client.
  var client = new LanguageClient(
    "ifcServer",
    "IFC Syntax Server",
    serverOptions,
    clientOptions
  )
  return client
}

import * as vscode from "vscode"

import { LanguageClient } from "vscode-languageclient/node"

import registerCommands from "./registerCommands"
import { setupServer } from "./setupServer"

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

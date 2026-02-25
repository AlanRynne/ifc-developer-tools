import * as vscode from "vscode"

import { LanguageClient } from "vscode-languageclient/node"

import registerCommands from "./registerCommands"
import { setupServer } from "./setupServer"

let extensionConfig: vscode.WorkspaceConfiguration = null
let languageClient: LanguageClient = null

export async function activate(context: vscode.ExtensionContext) {
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
    await languageClient.start()
    console.log("Client has started")
  }
}

async function handleServerEnableChanged(context: vscode.ExtensionContext) {
  extensionConfig = vscode.workspace.getConfiguration("ifcSyntax")
  var serverEnabled = extensionConfig.get("server.enabled")
  if (serverEnabled) {
    console.log("Starting server")
    if (languageClient === null) {
      languageClient = setupServer(context)
    }
    await languageClient.start()
  } else {
    console.log("Stopping server")
    await languageClient.dispose()
    languageClient = null
  }
}

export async function deactivate(): Promise<void> {
  await languageClient?.dispose()
  languageClient = null
}

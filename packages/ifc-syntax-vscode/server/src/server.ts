/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import {
  createConnection,
  TextDocuments,
  ProposedFeatures,
  InitializeParams,
  DidChangeConfigurationNotification,
  MessageActionItem
} from "vscode-languageserver"

import { IfcSyntaxSettings, DefaultSettings } from "./settings"

import { validateTextDocument } from "./Providers/ValidationProvider"
import { processDocumentSymbols } from "./Providers/SymbolProvider"
import { processHoverData } from "./Providers/HoverProvider"
import { processGoToDefinition } from "./Providers/GoToDefinitionProvider"

import IfcDocumentManager from "./IfcDocumentManager"
import { findEntityInSchema } from "./Providers/IfcUtilities"
import IfcSchemas from "./schemas"

// Create a connection for the server. The connection uses Node's IPC as a transport.
// Also include all preview / proposed LSP features.
export let connection = createConnection(ProposedFeatures.all)

// Create a simple text document manager. The text document manager supports full document sync only
export let documents: TextDocuments = new TextDocuments()
// Setup configuration flags
export let hasConfigurationCapability: boolean = false
export let hasWorkspaceFolderCapability: boolean = false
export let hasDiagnosticRelatedInformationCapability: boolean = false

// Server settings
export let globalSettings: IfcSyntaxSettings = DefaultSettings
// Cache the settings of all open documents
export let documentSettings: Map<
  string,
  Thenable<IfcSyntaxSettings>
> = new Map()

//#region Event handlers

// Go to definition provider
connection.onDefinition(processGoToDefinition)

// Document symbols handler
connection.onDocumentSymbol(processDocumentSymbols)
// Hover information handler
connection.onHover(processHoverData)
// Code completion handlers
//connection.onCompletion(processCompletion);
//connection.onCompletionResolve(resolveCompletion);

// Server initialization handlers
connection.onInitialize((params: InitializeParams) => {
  let capabilities = params.capabilities

  // Does the client support the `workspace/configuration` request?
  // If not, we will fall back using global settings
  hasConfigurationCapability = !!(
    capabilities.workspace && !!capabilities.workspace.configuration
  )
  hasWorkspaceFolderCapability = !!(
    capabilities.workspace && !!capabilities.workspace.workspaceFolders
  )
  hasDiagnosticRelatedInformationCapability = !!(
    capabilities.textDocument &&
    capabilities.textDocument.publishDiagnostics &&
    capabilities.textDocument.publishDiagnostics.relatedInformation
  )
  return {
    capabilities: {
      workspace: {
        workspaceFolders: {
          supported: hasWorkspaceFolderCapability,
          changeNotifications: true
        }
      },
      textDocumentSync: documents.syncKind,
      // Tell the client that the server supports code completion
      // completionProvider: {
      //     resolveProvider: true,
      // },
      hoverProvider: true,
      definitionProvider: true,
      documentSymbolProvider: true
    }
  }
})

connection.onInitialized(() => {
  if (hasConfigurationCapability) {
    // Register for all configuration changes.
    connection.client.register(
      DidChangeConfigurationNotification.type,
      undefined
    )
  }
  if (hasWorkspaceFolderCapability) {
    connection.workspace.onDidChangeWorkspaceFolders(_event => {
      connection.console.log("Workspace folder change event received.")
    })
  }
  connection.onRequest("ifc-syntax.docs", payload => {
    return findEntityInSchema(IfcSchemas[payload.version], payload.name)
  })
})

// Configuration change handler
connection.onDidChangeConfiguration(change => {
  if (hasConfigurationCapability) {
    // Reset all cached document settings
    documentSettings.clear()
  } else {
    globalSettings = <IfcSyntaxSettings>(
      (change.settings.ifcSyntax || DefaultSettings)
    )
  }
  // Revalidate all open ifc documents
  documents.all().forEach(validateTextDocument)
})

// TODO: Must implement .ifcconfig.
// File watcher for config files
connection.onDidChangeWatchedFiles(_change => {
  const uri = _change.changes[0].uri
  // Monitored files have change in VSCode
  connection.console.log(`We received an file change event ${uri}`)
})

export const IfcDocManager = new IfcDocumentManager()

// Only keep settings for open documents
documents.onDidClose(e => {
  documentSettings.delete(e.document.uri)
  IfcDocManager.delete(e.document.uri)
})

// The content of a text document has changed. This event is emitted when the text document first opened or when its content has changed.
documents.onDidChangeContent(change => {
  connection.console.log("file content was changed")
  IfcDocManager.update(change.document.uri)
  //validateTextDocument(change.document);
})
//#endregion

// Make the text document manager listen on the connection for open, change and close text document events
documents.listen(connection)
// Listen on the connection
connection.listen()

import {
  InitializeParams,
  DidChangeConfigurationNotification,
  TextDocumentSyncKind,
  InitializeResult,
  Connection
} from "vscode-languageserver/node"
import { IfcSyntaxSettings, DefaultSettings } from "./settings"
import { validateTextDocument } from "./Providers/ValidationProvider"
import { processDocumentSymbols } from "./Providers/SymbolProvider"
import { processHoverData } from "./Providers/HoverProvider"
import { processGoToDefinition } from "./Providers/GoToDefinitionProvider"
import { findEntityInSchema } from "./Providers/IfcUtilities"
import IfcSchemas from "./schemas"
import { connection, globalSettings } from "./server"
import { documents, documentSettings, IfcDocManager } from "./documents"

// Setup configuration flags

export let hasConfigurationCapability: boolean = false
export let hasWorkspaceFolderCapability: boolean = false
export let hasDiagnosticRelatedInformationCapability: boolean = false

export function setupConnectionEvents(connection: Connection) {
  connection.onDefinition(processGoToDefinition)
  connection.onDocumentSymbol(processDocumentSymbols)
  connection.onHover(processHoverData)

  // Server initialization handlers
  connection.onInitialize(configureServerCapabilities)
  connection.onInitialized(setupServerCapabilityEvents)
  connection.onDidChangeConfiguration(handleConfigurationChanged)

  // Only keep settings for open documents
  documents.onDidClose(e => {
    documentSettings.delete(e.document.uri)
    IfcDocManager.delete(e.document.uri)
  })

  // The content of a text document has changed. This event is emitted when the text document first opened or when its content has changed.
  documents.onDidChangeContent(change => {
    connection.console.log("file content was changed")
    IfcDocManager.update(change.document.uri)
  })
}

function configureServerCapabilities(
  params: InitializeParams
): InitializeResult {
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
      // TODO: Ideally sync should be incremental to prevent re-parsing the entire file.
      textDocumentSync: TextDocumentSyncKind.Full,
      hoverProvider: true,
      definitionProvider: true,
      documentSymbolProvider: true
    }
  }
}

function handleConfigurationChanged(change) {
  if (hasConfigurationCapability) {
    // Reset all cached document settings
    documentSettings.clear()
  } else {
    Object.assign(globalSettings, change.settings.ifcSyntax || DefaultSettings)
  }
  // Revalidate all open ifc documents
  documents.all().forEach(validateTextDocument)
}

function setupServerCapabilityEvents() {
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
}

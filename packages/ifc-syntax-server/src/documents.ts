import { TextDocuments } from "vscode-languageserver/node"
import { TextDocument } from "vscode-languageserver-textdocument"
import { IfcSyntaxSettings } from "./settings"
import IfcDocumentManager from "./IfcDocumentManager"
import { connection, globalSettings } from "./server"

// Cache the settings of all open documents
export let documentSettings: Map<string, Thenable<IfcSyntaxSettings>> = new Map()

export const IfcDocManager = new IfcDocumentManager(connection, globalSettings)

// Create a simple text document manager. The text document manager supports full document sync only
export let documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument)

import { TextDocuments } from "vscode-languageserver/node"
import { TextDocument } from "vscode-languageserver-textdocument"
import { IfcSyntaxSettings, DefaultSettings } from "./types"
import IfcDocumentManager from "./IfcDocumentManager"
import { connection } from "./connection"

// Cache the settings of all open documents
export let documentSettings: Map<string, Thenable<IfcSyntaxSettings>> = new Map()

export const IfcDocManager = new IfcDocumentManager(connection, DefaultSettings)

// Create a simple text document manager. The text document manager supports full document sync only
export let documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument)

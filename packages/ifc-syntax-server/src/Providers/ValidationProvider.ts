import { TextDocument } from "vscode-languageserver-textdocument"
import { connection, IfcDocManager } from "../server"
import { getDocumentSettings } from "../settings"

export async function validateTextDocument(
  textDocument: TextDocument
): Promise<void> {
  // In this simple example we get the settings for every validate run.
  let settings = await getDocumentSettings(textDocument.uri)

  // Send the computed diagnostics to VSCode.
  connection.sendDiagnostics(
    await IfcDocManager.getDiagnostics(textDocument.uri)
  )
}

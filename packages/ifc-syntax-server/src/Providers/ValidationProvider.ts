import { TextDocument } from "vscode-languageserver-textdocument"
import { connection } from "../server"
import { IfcDocManager } from "../documents"
import { getDocumentSettings } from "../settings"

export async function validateTextDocument(textDocument: TextDocument): Promise<void> {
  // In this simple example we get the settings for every validate run.
  let settings = await getDocumentSettings(textDocument.uri)

  // Send the computed diagnostics to VSCode.
  connection.sendDiagnostics({
    uri: textDocument.uri,
    diagnostics: await IfcDocManager.getDiagnostics(textDocument.uri)
  })
}

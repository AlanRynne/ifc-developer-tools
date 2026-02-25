import { Location, Range, TextDocumentPositionParams } from "vscode-languageserver"
import { IToken } from "chevrotain"
import { IfcDocManager, documents } from "../documents"
import { findIdAtOffset, findInstanceById } from "./IfcUtilities"

export const processGoToDefinition = async (params: TextDocumentPositionParams): Promise<Location | null> => {
  const doc = documents.get(params.textDocument.uri)
  if (!doc) return null
  const cst = await IfcDocManager.get(params.textDocument.uri)
  if (!cst) return null

  const idToken = findIdAtOffset(cst, doc.offsetAt(params.position))
  if (!idToken) return null

  const instanceNode = findInstanceById(cst, idToken.image)
  if (!instanceNode) return null

  const defIdToken = instanceNode.children["Id"]?.[0] as IToken | undefined
  if (!defIdToken) return null

  const start = doc.positionAt(defIdToken.startOffset)
  const end = doc.positionAt(defIdToken.endOffset !== undefined ? defIdToken.endOffset + 1 : defIdToken.startOffset + defIdToken.image.length)
  return Location.create(params.textDocument.uri, { start, end } as Range)
}

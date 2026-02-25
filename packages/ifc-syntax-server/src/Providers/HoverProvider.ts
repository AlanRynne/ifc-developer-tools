import { TextDocumentPositionParams, Hover } from "vscode-languageserver"
import { documents, IfcDocManager } from "../documents"
import IfcSchemas from "../schemas"
import { getFileSchemaVersion, findEntityInSchema, entityDataToText, findTypeRefAtOffset } from "./IfcUtilities"

export const processHoverData = async (params: TextDocumentPositionParams): Promise<Hover | null> => {
  const doc = documents.get(params.textDocument.uri)
  if (!doc) return null
  const cst = await IfcDocManager.get(params.textDocument.uri)
  if (!cst) return null

  const token = findTypeRefAtOffset(cst, doc.offsetAt(params.position))
  if (!token) return null

  const version = getFileSchemaVersion(cst) ?? "IFC4X2"
  const schema = IfcSchemas[version] ?? IfcSchemas["IFC4X2"]
  const entity = findEntityInSchema(schema, token.image)

  const start = doc.positionAt(token.startOffset)
  const end = doc.positionAt(token.endOffset !== undefined ? token.endOffset + 1 : token.startOffset + token.image.length)
  const range = { start, end }

  return {
    contents: entity ? entityDataToText(entity, version, schema) : `Entity not found: ${token.image}`,
    range
  }
}

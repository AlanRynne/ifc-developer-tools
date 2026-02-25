import { DocumentSymbol, SymbolKind, DocumentSymbolParams } from "vscode-languageserver"
import { CstNode, IToken } from "chevrotain"
import { IfcDocManager, documents } from "../documents"

export const processDocumentSymbols = async (params: DocumentSymbolParams): Promise<DocumentSymbol[]> => {
  const uri = params.textDocument.uri
  const doc = documents.get(uri)
  const cst = await IfcDocManager.get(uri)
  if (!cst || !doc) return []

  const dataCst = cst.children["data"]?.[0] as CstNode | undefined
  if (!dataCst) return []

  return (dataCst.children["instance"] ?? []).flatMap(inst => {
    const instanceNode = inst as CstNode
    const idToken = instanceNode.children["Id"]?.[0] as IToken | undefined
    const entityNode = instanceNode.children["entity"]?.[0] as CstNode | undefined
    if (!idToken || !entityNode) return []

    const typeRefImg = (entityNode.children["TypeRef"]?.[0] as IToken | undefined)?.image ?? ""

    const idStartOff = idToken.startOffset
    const idEndOff = idToken.endOffset !== undefined ? idToken.endOffset + 1 : idStartOff + idToken.image.length
    const idRange = { start: doc.positionAt(idStartOff), end: doc.positionAt(idEndOff) }

    // fullRange must contain idRange — clamp to guarantee that even under error recovery
    const instStartOff = Math.min(instanceNode.location?.startOffset ?? idStartOff, idStartOff)
    const instEndOff = Math.max((instanceNode.location?.endOffset ?? idEndOff - 1) + 1, idEndOff)
    const fullRange = { start: doc.positionAt(instStartOff), end: doc.positionAt(instEndOff) }

    return [DocumentSymbol.create(idToken.image, typeRefImg, SymbolKind.Field, fullRange, idRange)]
  })
}

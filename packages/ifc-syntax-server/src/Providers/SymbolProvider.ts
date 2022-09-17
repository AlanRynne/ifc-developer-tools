import {
  DocumentSymbol,
  SymbolKind,
  DocumentSymbolParams,
  Range
} from "vscode-languageserver"
import IfcParser from "@alanrynne/ifc-syntax-parser"
import { IfcDocManager } from "../server"

export const processDocumentSymbols = async (params: DocumentSymbolParams) => {
  return await IfcDocManager.get(params.textDocument.uri).then(doc => {
    if (!doc) return
    let definitions = IfcParser.definitionVisitor.visit(doc)
    return Object.values(definitions).map(def => convertToDocumentSymbol(def))
  })
}

function convertToDocumentSymbol(symbolInfo: any) {
  let vsLoc: Range = {
    start: {
      line: symbolInfo.location.startLine - 1,
      character: symbolInfo.location.startColumn
    },
    end: {
      line: symbolInfo.location.endLine - 1,
      character: symbolInfo.location.endColumn
    }
  }

  let childSymbols = symbolInfo.children?.map(c => convertToDocumentSymbol(c))

  let documentSymbol = DocumentSymbol.create(
    symbolInfo.name,
    symbolInfo.id,
    SymbolKind.Module,
    vsLoc,
    vsLoc,
    childSymbols
  )
  return documentSymbol
}

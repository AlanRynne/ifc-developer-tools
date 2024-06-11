import { Diagnostic } from "vscode-languageserver"
import { documents } from "./documents"
import { TextDocument } from "vscode-languageserver-textdocument"
import { CstNode } from "chevrotain"
import { parser } from "packages/ifc-syntax-parser"
import { IDocumentManager } from "./IDocumentManager"

class IfcDocumentMangerV2 implements IDocumentManager<any> {
  private documentResults: Map<string, parser.ParserResult> //TODO: Type properly

  async getDiagnostics(uri: string): Promise<Diagnostic[]> {
    if (!this.documentResults.has(uri)) return []

    const result = this.documentResults.get(uri)
    const lexErrors = result.lexErrors.map(lexError =>
      Diagnostic.create(
        {
          start: { line: lexError.length, character: lexError.column },
          end: { line: lexError.length, character: lexError.column + 1 }
        },
        lexError.message
      )
    )
    const parseErrors = result.parseErrors.map(error =>
      Diagnostic.create(
        {
          start: { line: error.token.startLine, character: error.token.startColumn },
          end: { line: error.token.startLine, character: error.token.endColumn }
        },
        error.message
      )
    )
    return lexErrors.concat(parseErrors)
  }

  async get(uri: string): Promise<CstNode> {
    if (this.documentResults.has(uri)) return this.documentResults.get(uri).cst

    const doc: TextDocument = documents[uri]
    var text = doc.getText()
    var result = parser.parse(text)
    this.documentResults.set(uri, result)
    return result.cst
  }

  async update(uri: string): Promise<void> {
    const doc: TextDocument = documents[uri]
    var text = doc.getText()
    var result = parser.parse(text)
    this.documentResults.set(uri, result)
  }

  async delete(uri: string): Promise<boolean> {
    if (!this.documentResults.has(uri)) return false

    return this.documentResults.delete(uri)
  }
}

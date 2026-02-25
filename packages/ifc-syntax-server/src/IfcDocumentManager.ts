import { CstNode } from "chevrotain"
import { Connection, Diagnostic, DiagnosticSeverity } from "vscode-languageserver"
import { parser } from "@alanrynne/ifc-syntax-parser"
import { IDocumentManager } from "./IDocumentManager"
import { documents } from "./documents"
import { IfcSyntaxSettings } from "./settings"

export default class IfcDocumentManager implements IDocumentManager {
  private documentResults: Map<string, parser.ParserResult>
  protected readonly connection: Connection
  protected readonly settings: IfcSyntaxSettings

  constructor(connection: Connection, settings: IfcSyntaxSettings) {
    this.documentResults = new Map()
    this.connection = connection
    this.settings = settings
  }

  async getDiagnostics(uri: string): Promise<Diagnostic[]> {
    if (!this.documentResults.has(uri)) return []
    const result = this.documentResults.get(uri)!
    const doc = documents.get(uri)
    if (!doc) return []

    const lexDiags: Diagnostic[] = result.lexErrors.map(err => {
      const start = doc.positionAt(err.offset)
      const end = doc.positionAt(err.offset + (err.length ?? 1))
      return Diagnostic.create({ start, end }, err.message, DiagnosticSeverity.Error, undefined, "ifc-syntax")
    })

    const parseDiags: Diagnostic[] = result.parseErrors.map(err => {
      const token = err.token
      const start = doc.positionAt(token.startOffset)
      const end = doc.positionAt(
        token.endOffset !== undefined ? token.endOffset + 1 : token.startOffset + token.image.length
      )
      return Diagnostic.create({ start, end }, err.message, DiagnosticSeverity.Error, undefined, "ifc-syntax")
    })

    const skippedDiags: Diagnostic[] = (result.skippedLines ?? []).map(line =>
      Diagnostic.create(
        { start: { line: line - 1, character: 0 }, end: { line: line - 1, character: 0 } },
        `Line ${line} exceeded maxLineLength and was skipped`,
        DiagnosticSeverity.Warning, undefined, "ifc-syntax"
      )
    )

    return [...lexDiags, ...parseDiags, ...skippedDiags]
  }

  async get(uri: string): Promise<CstNode> {
    if (this.documentResults.has(uri)) return this.documentResults.get(uri)!.cst
    return this.parseAndStore(uri)
  }

  async update(uri: string): Promise<void> {
    await this.parseAndStore(uri)
    const diagnostics = await this.getDiagnostics(uri)
    this.connection.sendDiagnostics({ uri, diagnostics })
  }

  async delete(uri: string): Promise<boolean> {
    return this.documentResults.delete(uri)
  }

  private async parseAndStore(uri: string): Promise<CstNode> {
    const doc = documents.get(uri)
    if (!doc) return undefined!
    const result = parser.parse(doc.getText(), {
      maxTokenizationLineLength: this.settings.parser.maxLineLength
    })
    this.documentResults.set(uri, result)
    return result.cst
  }
}

import { Ifc2Ast, Ifc2AstConfig } from "@alanrynne/ifc-syntax-ast-parser"
import { ASTNode } from "@alanrynne/ifc-syntax-ast-parser/dist/ast"
import { Connection, Diagnostic, DiagnosticSeverity, Position } from "vscode-languageserver"
import { documents } from "./documents"
import { IfcSyntaxSettings } from "./settings"
import { IDocumentManager } from "./IDocumentManager"

export default class IfcDocumentManager implements IDocumentManager<ASTNode> {
  private documentResults: Map<string, ASTNode>
  private documentParseErrors: Map<string, Diagnostic[]>

  protected readonly connection: Connection
  protected readonly settings: IfcSyntaxSettings

  constructor(connection: Connection, settings: IfcSyntaxSettings) {
    this.documentResults = new Map<string, ASTNode>()
    this.documentParseErrors = new Map<string, Diagnostic[]>()
    this.connection = connection
    this.settings = settings
  }

  async getDiagnostics(uri: string): Promise<Diagnostic[]> {
    return this.documentParseErrors[uri] ?? Array<Diagnostic>()
  }

  async get(uri: string): Promise<ASTNode> {
    let ast: ASTNode = this.documentResults[uri]
    if (ast) {
      return ast
    }
    return await this.parseDocument(uri).then(value => {
      console.log("document finished", uri)
      return value
    })
  }

  async update(uri: string) {
    console.log("updating ast of doc:", uri)

    return this.parseDocument(uri).then(value => {
      console.log("document finished", uri)
      this.documentResults[uri] = value
    })
  }

  async delete(uri: string) {
    console.log("deleting ast for doc: ", uri)
    this.documentParseErrors.delete(uri)
    return this.documentResults.delete(uri)
  }

  private async parseDocument(uri: string): Promise<ASTNode> {
    console.log("parsing doc", uri)

    let doc = documents.get(uri)
    let text = doc ? doc.getText() : null

    let diagnostics: Diagnostic[] = []
    if (text) {
      var config = new Ifc2AstConfig()

      config.maxLineLength = this.settings.parser.maxLineLength
      return await new Ifc2Ast(config)
        .parseIfcFile(text.split(/[\n\r]/), true, err => {
          // Handle parse errors
          var token = err.token ?? err
          let diagnostic: Diagnostic = {
            severity: token.type === "long" ? DiagnosticSeverity.Warning : DiagnosticSeverity.Error,
            range: {
              start: {
                line: token.line - 1,
                character: token.offset
              },
              end: {
                line: token.line - 1,
                character: token.offset + token.text.length
              }
            },
            message: err.message ?? token.toString(),
            source: "ifc-syntax"
          }
          diagnostics.push(diagnostic)
        })
        .finally(() => {
          //Send diagnostics
          this.documentParseErrors.set(uri, diagnostics)
          this.connection.sendDiagnostics({ uri, diagnostics })
        })
    }
    return undefined
  }
}

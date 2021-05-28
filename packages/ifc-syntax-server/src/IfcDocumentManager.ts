import {Ifc2Ast, Ifc2AstConfig} from "@alanrynne/ifc-syntax-ast-parser"
import IfcParser from "@alanrynne/ifc-syntax-parser"
import {ASTNode} from "@alanrynne/ifc-syntax-ast-parser/dist/ast"
import {Diagnostic, DiagnosticSeverity} from "vscode-languageserver"
import {connection, documents, globalSettings} from "./server"

class IfcDocumentManager {
  private documentResults: Map<string, ASTNode>
  private documentParseErrors: Map<string, Diagnostic[]>
  private documentValidationErrors: Map<string, Diagnostic[]>

  constructor() {
    this.documentResults = new Map<string, ASTNode>()
    this.documentParseErrors = new Map<string, Diagnostic[]>()
    this.documentValidationErrors = new Map<string, Diagnostic[]>()
  }

  async getDiagnostics(uri: string) {
    return this.documentParseErrors[uri] ?? []
  }

  async get(uri: string) {
    let ast = this.documentResults[uri]
    if (ast) {
      return ast
    }
    return this.parseDocument(uri).then(value => {
      console.log("document finished", uri)
      return value
    })
  }

  async update(uri: string) {
    console.log("updating ast of doc:", uri)
    var value = await this.parseDocument(uri)
    console.log("document finished", uri)
    this.documentResults[uri] = value
  }

  delete(uri: string) {
    console.log("deleting ast for doc: ", uri)
    this.documentParseErrors.delete(uri)
    this.documentResults.delete(uri)
  }

  private async parseDocument(uri: string) {
    console.log("parsing doc", uri)
    let doc = documents.get(uri)
    let text = doc ? doc.getText() : null
    let diagnostics: Diagnostic[] = []

    // Stop if there's no text in the file!
    if (!text) return

    // V1 Parser
    var config = new Ifc2AstConfig()
    config.maxLineLength = globalSettings.parser.maxLineLength

    // Parse using V2
    // TODO: Diagnostics not included
    var v2parse = IfcParser.parse(text)

    // Parse using V1 + diagnostics
    var docAst = await new Ifc2Ast(config)
      .parseIfcFile(text.split(/[\n\r]/), true, err => {
        // Handle parse errors
        var token = err.token ?? err
        let diagnostic: Diagnostic = {
          severity:
            token.type === "long"
              ? DiagnosticSeverity.Warning
              : DiagnosticSeverity.Error,
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

    //Send V1 diagnostics
    // TODO: Should handle diagnostics outside this method?
    this.documentParseErrors.set(uri, diagnostics)
    connection.sendDiagnostics({uri, diagnostics})

    // Return the ast
    return docAst
  }

}

export default IfcDocumentManager

import IfcParser from "@alanrynne/ifc-syntax-parser"
import { Diagnostic } from "vscode-languageserver"
import { connection, documents, reportMemoryUsage } from "./server"

class IfcDocumentManager {
  private documentResults: Map<string, { cst; parserErrors; lexerErrors }>
  constructor() {
    this.documentResults = new Map<string, { cst; parserErrors; lexerErrors }>()
  }

  async getDiagnostics(uri: string) {
    return this.documentResults[uri].parserErrors ?? []
  }

  async get(uri: string) {
    let docResult = this.documentResults[uri]
    if (docResult) {
      return docResult.cst
    }
    reportMemoryUsage()
    return this.parseDocument(uri).then(value => {
      console.log("document finished", uri)
      this.documentResults[uri] = value
      return value.cst
    })
  }

  async update(uri: string) {
    console.log("updating ast of doc:", uri)
    var value = await this.parseDocument(uri)
    console.log("document finished", uri)
    this.documentResults[uri] = value
    reportMemoryUsage()
  }

  delete(uri: string) {
    console.log("deleting ast for doc: ", uri)
    this.documentResults.delete(uri)
    reportMemoryUsage()
  }

  private async parseDocument(uri: string) {
    console.log("parsing doc", uri)
    let doc = documents.get(uri)
    let text = doc ? doc.getText() : null
    let diagnostics: Diagnostic[] = []

    // Stop if there's no text in the file!
    if (!text) return
    var docResult = IfcParser.parse(text)
    console.log("finished parsing", uri)
    //connection?.sendNotification("ifc-cache", { uri, cst: docResult })
    //Send V1 diagnostics
    // TODO: Should handle diagnostics outside this method?
    // this.documentParseErrors.set(uri, diagnostics)
    // connection.sendDiagnostics({uri, diagnostics})

    // Return the ast
    return docResult
  }
}

export default IfcDocumentManager

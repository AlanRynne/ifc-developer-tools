import { CstNode } from "chevrotain"
import { Diagnostic } from "vscode-languageserver"

export interface IDocumentManager {
  getDiagnostics(uri: string): Promise<Diagnostic[]>
  get(uri: string): Promise<CstNode>
  update(uri: string): Promise<void>
  delete(uri: string): Promise<boolean>
}

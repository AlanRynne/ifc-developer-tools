import { Diagnostic } from "vscode-languageserver"

export interface IDocumentManager<T> {
  getDiagnostics(uri: string): Promise<Diagnostic[]>
  get(uri: string): Promise<T>
  update(uri: string): Promise<void>
  delete(uri: string): Promise<boolean>
}

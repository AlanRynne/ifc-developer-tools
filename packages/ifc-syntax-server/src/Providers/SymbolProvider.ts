import {
  DocumentSymbol,
  SymbolKind,
  DocumentSymbolParams
} from "vscode-languageserver"
import {
  DocumentNode,
  AssignmentNode,
  VariableNode,
  ConstructorNode,
  SectionNode,
  FunctionNode,
  StringNode
} from "@alanrynne/ifc-syntax-ast-parser/dist/ast/nodes"
import { IVisitor } from "@alanrynne/ifc-syntax-ast-parser/dist/ast/visitor/IVisitor"
import { ASTNode, ASTRange } from "@alanrynne/ifc-syntax-ast-parser/dist/ast"
import { IfcDocManager } from "../documents"

export const processDocumentSymbols = async (params: DocumentSymbolParams) => {
  return await IfcDocManager.get(params.textDocument.uri).then(doc => {
    let pv = new SymbolProvider().visit(doc)
    return pv as DocumentSymbol[]
  })
}

class SymbolProvider implements IVisitor {
  visit(node: ASTNode, ...data: any[]) {
    if (node instanceof AssignmentNode) {
      let name = node.name as VariableNode
      let constructor = node.value as ConstructorNode
      return DocumentSymbol.create(
        `#${name.id}`,
        (constructor.name as StringNode).text,
        SymbolKind.Field,
        this.convertRange(node.loc),
        this.convertRange(node.name.loc)
      )
    } else if (node instanceof FunctionNode) {
      let name: any = node.name
      return DocumentSymbol.create(
        name,
        "",
        SymbolKind.Key,
        this.convertRange(node.loc),
        this.convertRange(node.loc)
      )
    } else if (node instanceof DocumentNode) {
      let secs: any[] = []
      node.sections.forEach(sec => {
        let sectionResult = sec.accept(this)
        if (sectionResult) {
          secs.push(sectionResult)
        }
      })
      return secs as DocumentSymbol[]
    } else if (node instanceof SectionNode) {
      let name: any = node.name
      let description = {
        DATA: "Data section",
        HEADER: "Header section"
      }[name.text]
      let children: any[] = []
      node.children.forEach(child => {
        let d = child.accept(this)
        if (d) {
          children.push(d)
        }
      })
      return DocumentSymbol.create(
        name.text,
        description,
        SymbolKind.Namespace,
        this.convertRange(node.loc),
        this.convertRange(node.name.loc),
        children
      )
    } else {
      // console.log("Other node: " + node.constructor.name)
    }
  }
  convertRange(range: ASTRange) {
    return {
      start: { line: range.start.line - 1, character: range.start.character },
      end: { line: range.end.line - 1, character: range.end.character }
    }
  }
}

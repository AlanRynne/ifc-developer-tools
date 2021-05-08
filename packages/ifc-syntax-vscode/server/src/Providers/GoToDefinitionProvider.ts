import { Location, TextDocumentPositionParams } from "vscode-languageserver"
import { IfcDocManager } from "../server"
import { PositionVisitor } from "@alanrynne/ifc-syntax-ast-parser"
import { IVisitor } from "@alanrynne/ifc-syntax-ast-parser/dist/ast/visitor/IVisitor"
import { ASTNode } from "@alanrynne/ifc-syntax-ast-parser/dist/ast"
import { ASTPosition } from "@alanrynne/ifc-syntax-ast-parser/dist/ast/core/ASTPosition"
import * as nodes from "@alanrynne/ifc-syntax-ast-parser/dist/ast/nodes"
import { ASTDefinitionFinderVisitor } from "@alanrynne/ifc-syntax-ast-parser/dist/ast/visitor/ASTVisitor"

// TODO: Create IVisitor provider and hook it up.
export const processGoToDefinition = async (
  params: TextDocumentPositionParams
) => {
  return await IfcDocManager.get(params.textDocument.uri).then(doc => {
    let p = new ASTPosition(params.position.line + 1, params.position.character)
    let pv: any = new PositionVisitor().visit(doc, p)
    if (pv instanceof nodes.VariableNode) {
      let def: ASTNode = new ASTDefinitionFinderVisitor().visit(doc, pv.id)
      if (def) {
        return Location.create(params.textDocument.uri, {
          start: {
            line: def.loc.start.line - 1,
            character: def.loc.start.character
          },
          end: {
            line: def.loc.end.line - 1,
            character: def.loc.end.character
          }
        })
      }
    }
  })
}

class GoToDefinitionProvider implements IVisitor {
  visit(node: ASTNode, refNum: number) {}
}

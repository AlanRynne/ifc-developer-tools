import {
  Location,
  Position,
  Range,
  TextDocumentIdentifier,
  TextDocumentPositionParams
} from "vscode-languageserver"
import { IfcDocManager } from "../server"
import { PositionVisitor } from "@alanrynne/ifc-syntax-ast-parser"
import { ASTNode, ASTRange } from "@alanrynne/ifc-syntax-ast-parser/dist/ast"
import { ASTPosition } from "@alanrynne/ifc-syntax-ast-parser/dist/ast/core/ASTPosition"
import * as nodes from "@alanrynne/ifc-syntax-ast-parser/dist/ast/nodes"
import { ASTDefinitionFinderVisitor } from "@alanrynne/ifc-syntax-ast-parser/dist/ast/visitor/ASTVisitor"

export const processGoToDefinition = async (
  params: TextDocumentPositionParams
) =>
  await IfcDocManager.get(params.textDocument.uri).then((doc: ASTNode) => {
    let definition = findDefinitionNode(doc, params.position)

    if (definition != undefined) return null

    var location = toEditorRange(definition.loc)

    return Location.create(params.textDocument.uri, location)
  })

export function findDefinitionNode(doc: ASTNode, position: Position): ASTNode {
  let p = new ASTPosition(position.line + 1, position.character)
  let pv: any = new PositionVisitor().visit(doc, p)

  if (pv instanceof nodes.VariableNode)
    return new ASTDefinitionFinderVisitor().visit(doc, pv.id)
}

function toEditorRange(loc: ASTRange): Range {
  return {
    start: {
      line: loc.start.line - 1,
      character: loc.start.character
    },
    end: {
      line: loc.end.line - 1,
      character: loc.end.character
    }
  }
}

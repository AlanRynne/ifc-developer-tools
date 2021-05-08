import { TextDocumentPositionParams, Hover } from "vscode-languageserver"
import { documents, IfcDocManager } from "../server"
import { PositionVisitor } from "@alanrynne/ifc-syntax-ast-parser"
import { ASTPosition } from "@alanrynne/ifc-syntax-ast-parser/dist/ast/core/ASTPosition"
import IfcSchemas from "../schemas"
import {
  getFileSchemaVersion,
  findEntityInSchema,
  entityDataToText
} from "./IfcUtilities"
import { ASTRange } from "@alanrynne/ifc-syntax-ast-parser/dist/ast"

export const processHoverData = async (params: TextDocumentPositionParams) => {
  const doc = documents.get(params.textDocument.uri)
  return await IfcDocManager.get(params.textDocument.uri).then(parsedDoc => {
    console.warn(parsedDoc)
    let p = new ASTPosition(params.position.line + 1, params.position.character)

    let pv: any = new PositionVisitor().visit(parsedDoc, p)
    if (pv === undefined || pv === null) {
      return null
    }

    let lineRange = adjustRange(pv.loc)
    // Check only if it is a string node
    // TODO: This must be better specified, clearer code...
    if (pv.type === 12) {
      let version = getFileSchemaVersion(parsedDoc)
      let schema = IfcSchemas[version] || IfcSchemas.IFC4X2
      let text = doc.getText(lineRange)
      let entity = findEntityInSchema(schema, text)
      //   entity.properties = getInheritedProps(schema, entity)
      if (entity) {
        let hover: Hover = {
          contents: entityDataToText(entity, version, schema),
          range: lineRange
        }
        return hover
      }
    }
    return null
  })
}

function adjustRange(loc: ASTRange) {
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

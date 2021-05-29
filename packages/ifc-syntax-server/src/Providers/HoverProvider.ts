import { TextDocumentPositionParams, Hover } from "vscode-languageserver"
import IfcParser from "@alanrynne/ifc-syntax-parser"
import { IfcDocManager } from "../server"
import IfcSchemas from "../schemas"
import {
  getFileSchemaVersion,
  findEntityInSchema,
  entityDataToText
} from "./IfcUtilities"

export const processHoverData = async (params: TextDocumentPositionParams) => {
  return await IfcDocManager.get(params.textDocument.uri).then(parsedDoc => {
    // Visit parsed doc at position
    var positionResult = IfcParser.positionVisitor.visit(parsedDoc, {
      line: params.position.line + 1,
      character: params.position.character + 1
    })
    // Fast exit if visitor returned nothing
    if (!positionResult) return null

    // Process hover data for Ifc Type references
    var lineRange = {
      start: {
        line: positionResult.startLine - 1,
        character: positionResult.startColumn - 1
      },
      end: {
        line: positionResult.endLine - 1,
        character: positionResult.endColumn
      }
    }
    switch (positionResult.tokenType.name) {
      case "TypeRef":
        let schema = IfcSchemas.IFC4X2

        let text = positionResult.image
        let entity = findEntityInSchema(schema, text)

        return {
          contents: entityDataToText(entity, "IFC4X2", schema),
          range: lineRange
        }
      case "Undefined":
        return {
          contents: "Undefined",
          range: lineRange
        }
      case "Derived":
        return {
          contents: "Derived",
          range: lineRange
        }
      default:
        break
    }
    return null
  })
}

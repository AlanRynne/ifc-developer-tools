import * as ifc4x2docs from "./ifc4x2docs.json"
import {
  ISchema,
  IType,
  IEntity,
  IFunction,
  IRule,
  ExpressParser
} from "@alanrynne/ifc-syntax-express-parser"
import { ifc2ts } from "./ifc2ts"

export const ExpressTypes = {
  STRING: "string",
  NUMBER: "number",
  REAL: "number",
  INTEGER: "number",
  BOOLEAN: "boolean",
  LOGICAL: "boolean | null",
  BINARY: "any",
  "BINARY()": "any",
  T: "any",
  Item: "any"
}

export interface SchemaToCodeOptions {}

export interface SchemaToCode {
  release: ISchema
  convertType(type: IType): string
  convertEntity(entity: IEntity): string
  convertRule(rule: IRule): string
  convertFunction(func: IFunction): string

  getFileHeader(entities: string[]): string

  convert(rootFolder: string, opts?: SchemaToCodeOptions): void

  saveToFile(filePath: string, content: string): void
}

async function buildTSFiles() {
  const expressFiles: any[] = [
    new ExpressParser()
      .parse("../../examples/express/IFC2X3 TC1.exp")
      .catch(err => console.error(err)),
    new ExpressParser()
      .parse("../../examples/express/IFC4X3 RC1.exp")
      .catch(err => console.error(err)),
    new ExpressParser()
      .parse("../../examples/express/IFC4x2.exp")
      .catch(err => console.error(err))
  ]

  const schemas = await Promise.all(expressFiles)

  var results = schemas.map(schema => {
    return new ifc2ts(schema as any, ifc4x2docs).convert("../")
  })

  await Promise.all(results)

  console.log("Done :)")
}

buildTSFiles()


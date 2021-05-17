import * as ifc4x2 from "@alanrynne/ifc-syntax-express-parser/results/IFC4X2.json"
import * as ifc4x3 from "@alanrynne/ifc-syntax-express-parser/results/IFC4X3.json"
import * as ifc2x3tc1 from "@alanrynne/ifc-syntax-express-parser/results/IFC2X3_TC1.json"
import * as ifc4x2docs from "./ifc4x2docs.json"

import {
  ISchema,
  IType,
  IEntity,
  IFunction,
  IRule
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

const path = "../"
new ifc2ts(ifc4x2 as any, ifc4x2docs)
  .convert(path)
  .then(() => new ifc2ts(ifc4x3 as any, ifc4x2docs).convert(path))
  .then(() => new ifc2ts(ifc2x3tc1 as any, ifc4x2docs).convert(path))
  .finally(() => console.log("DONE"))

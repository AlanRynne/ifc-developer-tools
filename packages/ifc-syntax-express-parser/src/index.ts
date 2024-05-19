import nearley from "nearley"
import grammar from "./grammar"
import fs from "fs"
import readline from "readline"

export { ISchema } from "./express/ISchema"
export { IType } from "./express/IType"
export { IRule } from "./express/IRule"
export { IFunction } from "./express/IFunction"
export { IEntity } from "./express/IEntity"

export class ExpressParser {
  private parser: nearley.Parser

  constructor() {
    this.parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar))
  }

  parse(filePath: string): Promise<any> {
    return new Promise((resolve, reject) => {
      let expressSchema = {
        schema: "",
        header: [],
        types: {},
        entities: {},
        functions: {},
        rules: {}
      }

      const stream = fs.createReadStream(filePath)
      stream.on("error", err => reject(err))

      const rl = readline.createInterface({
        input: stream,
        crlfDelay: Infinity
      })

      rl.on("line", l => {
        var line = l.trim()
        try {
          this.parser.feed(line)
        } catch (err) {
          reject(err)
        }
        if (this.parser.results.length != 0) {
          if (this.parser.results[0] != null) {
            var expEnt = this.parser.results[0]
            if (expEnt.ifcType == "type")
              expressSchema.types[expEnt.name] = expEnt
            else if (expEnt.ifcType == "entity")
              expressSchema.entities[expEnt.name] = expEnt
            else if (expEnt.ifcType == "function")
              expressSchema.functions[expEnt.name] = expEnt
            else if (expEnt.ifcType == "rule")
              expressSchema.rules[expEnt.name] = expEnt
            else if (expEnt.ifcType == "comment")
              expressSchema.header = expEnt.value
            else if (expEnt.name == "schema")
              expressSchema.schema = expEnt.version
            else {
              let name: string = expEnt.name
              // TODO: Ignored this compiling error, but this should be type checked.
              // @ts-ignore
              expressSchema[name] = expEnt
            }
            this.parser = new nearley.Parser(
              nearley.Grammar.fromCompiled(grammar)
            )
          }
        } else if (this.parser.results.length > 1) {
          reject("AMBIGUOUS LINE! Line" + line)
        }
      })

      rl.on("close", () => {
        resolve(expressSchema)
      })
    })
  }
}

const releaseFolder = "../../examples/express/"

export const IfcReleases = {
  IFC2X3: "IFC2X3.exp",
  IFC2X3_TC1: "IFC2X3 TC1.exp",
  IFC4: "IFC4.exp",
  IFC4_ADD1: "IFC4 ADD1.exp",
  IFC4_ADD2: "IFC4 ADD2.exp",
  IFC4_ADD2_TC1: "IFC4 ADD2 TC1.exp",
  IFC4X1: "IFC4X1.exp",
  IFC4X2: "ifc4X2.exp",
  IFC4X3: "IFC4X3 RC1.exp"
}

export enum IFCVersion {
  IFC2X3 = "IFC2X3",
  IFC2X3_TC1 = "IFC2X3_TC1",
  IFC4 = "IFC4",
  IFC4_ADD1 = "IFC4_ADD1",
  IFC4_ADD2 = "IFC4_ADD2",
  IFC4_ADD2_TC1 = "IFC4_ADD2_TC1",
  IFC4X1 = "IFC4X1",
  IFC4X2 = "IFC4X2",
  IFC4X3 = "IFC4X3"
}

export function getSchemaForRelease(version: IFCVersion) {
  return new ExpressParser().parse(releaseFolder + IfcReleases[version])
}

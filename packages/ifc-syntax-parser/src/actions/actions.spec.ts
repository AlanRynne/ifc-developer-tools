import {toAst} from "./definitionVisitor"
import fs from "fs"
import dir from "node-dir"
import path from "path"
import { Ifc2Ast } from "@alanrynne/ifc-syntax-ast-parser"
import { searchAtPosition } from "./PositionVisitor";
const INDIR = "../../examples/ifc/ifcKit"

var files = dir.files(INDIR, {sync: true})
var ifcFiles = files.filter(file => path.extname(file) === ".ifc")

describe("Visitor", () => {
  ifcFiles.forEach(path => {
    it("Can convert a simple IFC file to an AST", () => {
      var contents = fs.readFileSync(path).toString()

      const ast = toAst(contents)

      expect(ast).not.toBeNull()
    })
  })
})

var oldParser = new Ifc2Ast()

describe("Visitor - Single File", () => {
  var path = INDIR + "/basic-geometric-shape/brep-model.ifc"
  it("Can convert a simple IFC file to an AST", async () => {
    var contents = fs.readFileSync(path).toString()
    const oldAst = await oldParser.parseIfcFile(contents.split("\n"),true, (err) => {
      console.error(err.message)
    })
    //const ast = toAst(contents)

    const ast = searchAtPosition(contents, 63,20)

    expect(ast).not.toBeNull()
  })
})
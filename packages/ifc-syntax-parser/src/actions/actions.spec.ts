import {toAst} from "./definitionVisitor"
import fs from "fs"
import dir from "node-dir"
import path from "path"
import { Ifc2Ast } from "@alanrynne/ifc-syntax-ast-parser"
import {Position, positionVisitor} from "./PositionVisitor";
import {parse} from "../ifc";
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
  var contents = fs.readFileSync(path).toString()
  it("Can find token at position", async () => {
    const parseResult = parse(contents)

    var pos: Position = {
      line: 107,
      character: 13
    }

    const result = positionVisitor.visit(parseResult.cst, pos)
    expect(result).not.toBeNull()
  })
})
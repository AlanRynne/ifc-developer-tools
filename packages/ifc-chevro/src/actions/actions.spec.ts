import { toAst } from "./definitionVisitor"
import fs from "fs"
import dir from "node-dir"
import path from "path"

const INDIR = "../../examples/ifc/ifcKit"

var files = dir.files(INDIR, { sync: true })
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

import { definitionVisitor } from "./definitionVisitor"
import fs from "fs"
import dir from "node-dir"
import path from "path"
import { describe, it, expect } from "vitest"
import { parse } from "../ifc"

const inputDir = "../../examples/ifc/ifcKit"

var files = dir.files(inputDir, { sync: true })
var ifcFiles = files.filter(file => path.extname(file) === ".ifc")

describe("Visitor", () => {
  ifcFiles.forEach(path => {
    it("Can convert a simple IFC file to an AST", () => {
      var contents = fs.readFileSync(path).toString()

      var result = parse(contents)
      const fileStructure = definitionVisitor.visit(result.cst)

      expect(fileStructure).not.toBeNull()
    })
  })
})

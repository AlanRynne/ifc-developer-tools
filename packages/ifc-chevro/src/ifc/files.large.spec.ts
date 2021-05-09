import fs from "fs"
import dir from "node-dir"
import path from "path"
import { parse } from "."
import { checkParseResult } from "../checkParseResult"

const INDIR = "../../examples/ifc/bigFiles"

var files = dir.files(INDIR, { sync: true })
var ifcFiles = files?.filter(file => path.extname(file) === ".ifc")

if (ifcFiles != undefined)
  describe("Large Files", () => {
    ifcFiles?.forEach(path => {
      it(
        path,
        async () => {
          var contents = fs.readFileSync(path).toString()
          var result = parse(contents)
          checkParseResult(result, "ifc")
        },
        1000
      )
    })
  })

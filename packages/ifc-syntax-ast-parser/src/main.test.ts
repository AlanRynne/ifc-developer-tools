import fs from "fs"
import dir from "node-dir"
import path from "path"
import readline from "readline"
import { Ifc2Ast } from "./main"
import { debug } from "console"

const INDIR = "../../examples/ifc/ifcKit"
const OUTDIR = "../../results/ast-parser"

var files = dir.files(INDIR, { sync: true })
var ifcFiles = files.filter(file => path.extname(file) === ".ifc")

describe("IFC files line by line", () => {
  ifcFiles.forEach(file => {
    it(
      file,
      async () => {
        debug(file)
        const results = await readLines(file)
        return expect(results).toBeTruthy()
      },
      1000
    )
  })
})

async function readLines(path: string) {
  const stream = fs.createReadStream(path)
  const rl = readline.createInterface({
    input: stream,
    crlfDelay: Infinity
  })
  // Get document lines lines
  let lines = await new Promise<string[]>((resolve, reject) => {
    let lines: string[] = []
    stream.once("error", err => reject(err))
    rl.on("line", line => {
      lines.push(line)
    })
    rl.on("close", _ => {
      console.timeEnd("byline")
      resolve(lines)
    })
  })
  // Run parser
  let astParser = new Ifc2Ast()
  let node = await astParser
    .parseIfcFile(lines, true, err => {
      //console.warn(err.token ?? err)
    })
    .then(node => {
      return node
    })
    .catch(err => {
      throw err
    })

  return node
}

import fs from "fs"
import dir from "node-dir"
import path from "path"
import readline from "readline"
import { Ifc2Ast } from "./main"
import { DocumentNode } from "./ast/nodes"
import {
  ASTPositionVisitor,
  ASTDefinitionFinderVisitor,
  ASTDefinitionVisitor
} from "./ast/visitor/ASTVisitor"
import { ASTPosition } from "./ast/core/ASTPosition"
import { ASTNode, ASTType } from "./ast"
import { debug } from "console"

const INDIR = "../../examples/ifc/ifcKit"
const OUTDIR = "results"

var files = dir.files(INDIR, { sync: true })
var ifcFiles = files?.filter(file => path.extname(file) === ".ifc")

describe("IFC files line by line", () => {
  ifcFiles.forEach(file => {
    it(
      file,
      async () => {
        debug(file)
        const results = await readLines(file)
        return expect(results).toBeInstanceOf(DocumentNode)
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

  let pos = new ASTPosition(17, 37)
  let pos2 = new ASTPosition(17, 28)

  let posNode = new ASTPositionVisitor().visit(node, pos) as ASTNode
  let posNode2 = new ASTPositionVisitor().visit(node, pos2) as ASTNode
  let defFind = new ASTDefinitionFinderVisitor().visit(node, 1)
  let docDefs = new ASTDefinitionVisitor().visit(node)

  return node
}

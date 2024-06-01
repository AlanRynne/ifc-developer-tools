import fs from "fs"
import { IfcLexer } from "./lexer"
import { parser } from "./index"

const path = "../../examples/ifc/TestIFC-001.ifc"

describe("Single file test", () => {
  it(path, async () => {
    var contents = fs.readFileSync(path).toString()
    const lexResult = IfcLexer.tokenize(contents)

    expect(lexResult.errors.length).toBe(0)

    parser.input = lexResult.tokens

    var res = parser.ifc()
  })
})

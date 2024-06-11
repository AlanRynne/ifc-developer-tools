import fs from "fs"
import { lexerInstance } from "./lexer"
import { parserInstance } from "./index"
import { describe, it, expect } from "vitest"

const path = "../../examples/ifc/TestIFC-001.ifc"

describe("Single file test", () => {
  it(path, async () => {
    var contents = fs.readFileSync(path).toString()
    const lexResult = lexerInstance.tokenize(contents)

    expect(lexResult.errors.length).toBe(0)
    parserInstance.input = lexResult.tokens

    var res = parserInstance.ifc()
  })
})

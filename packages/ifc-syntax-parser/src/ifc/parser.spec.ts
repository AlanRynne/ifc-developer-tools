import { CstNode } from "chevrotain"
import { describe, it, expect } from "vitest"
import { checkParseResult } from "../checkParseResult"
import { MINIMAL_IFC, FULL_IFC, EMPTY_DATA_IFC, COMMENT_IFC, FILE_NAME_IFC } from "../fixtures"
import { parse } from "./index"

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Wrap a DATA-section body in a minimal valid IFC file. */
function wrapData(dataBody: string) {
  return [
    "ISO-10303-21;",
    "HEADER;",
    "FILE_DESCRIPTION(('T'),'2;1');",
    "FILE_SCHEMA(('IFC4'));",
    "ENDSEC;",
    "DATA;",
    dataBody,
    "ENDSEC;",
    "END-ISO-10303-21;"
  ].join("\n")
}

/** Parse and assert clean result; return root CstNode. */
function parseClean(text: string): CstNode {
  const result = parse(text)
  expect(result.lexErrors.length, "lex errors").toBe(0)
  expect(result.parseErrors.length, "parse errors").toBe(0)
  return result.cst
}

/** Navigate one child key, returning the first element. */
function child(node: CstNode, key: string): any {
  return (node.children as any)[key]?.[0]
}

/** Return all children at a key (or empty array). */
function children(node: CstNode, key: string): any[] {
  return (node.children as any)[key] ?? []
}

/** Get the 'instance' CstNode array from the data section. */
function dataInstances(cst: CstNode): any[] {
  const dataCst = child(cst, "data")
  return children(dataCst, "instance")
}

/** Parse a single entity string like "#1=TYPENAME(...);" and return its entity CstNode. */
function parseEntity(instanceStr: string): any {
  const cst = parseClean(wrapData(instanceStr))
  const instance = dataInstances(cst)[0]
  return child(instance, "entity")
}

/** Get parameters from a parsed entity string. */
function parseParameters(instanceStr: string): any[] {
  return children(parseEntity(instanceStr), "parameter")
}

// ─── ifc rule ────────────────────────────────────────────────────────────────

describe("Parser — ifc rule (full file)", () => {
  it("parses MINIMAL_IFC with zero errors", () => {
    checkParseResult(parse(MINIMAL_IFC), "ifc")
  })

  it("parses FULL_IFC with zero errors", () => {
    checkParseResult(parse(FULL_IFC), "ifc")
  })

  it("parses COMMENT_IFC with zero errors", () => {
    checkParseResult(parse(COMMENT_IFC), "ifc")
  })

  it("parses EMPTY_DATA_IFC with zero errors", () => {
    checkParseResult(parse(EMPTY_DATA_IFC), "ifc")
  })

  it("CST root node is named 'ifc'", () => {
    const cst = parseClean(MINIMAL_IFC)
    expect(cst.name).toBe("ifc")
  })

  it("CST root has 'header' child", () => {
    const cst = parseClean(MINIMAL_IFC)
    expect(child(cst, "header")).toBeDefined()
  })

  it("CST root has 'data' child", () => {
    const cst = parseClean(MINIMAL_IFC)
    expect(child(cst, "data")).toBeDefined()
  })
})

// ─── header rule ─────────────────────────────────────────────────────────────

describe("Parser — header rule", () => {
  it("header CstNode is named 'header'", () => {
    const cst = parseClean(MINIMAL_IFC)
    expect(child(cst, "header").name).toBe("header")
  })

  it("header has 'headerTag' child", () => {
    const cst = parseClean(MINIMAL_IFC)
    const header = child(cst, "header")
    expect(child(header, "headerTag")).toBeDefined()
  })

  it("header has 'endTag' child", () => {
    const cst = parseClean(MINIMAL_IFC)
    const header = child(cst, "header")
    expect(child(header, "endTag")).toBeDefined()
  })

  it("header contains headerInstance children", () => {
    const cst = parseClean(MINIMAL_IFC)
    const header = child(cst, "header")
    // MINIMAL_IFC has FILE_DESCRIPTION and FILE_SCHEMA → 2 header instances
    expect(children(header, "headerInstance").length).toBe(2)
  })

  it("each headerInstance has a TypeRef token", () => {
    const cst = parseClean(MINIMAL_IFC)
    const header = child(cst, "header")
    children(header, "headerInstance").forEach((inst: any) => {
      expect(inst.children.TypeRef).toBeDefined()
      expect(inst.children.TypeRef.length).toBeGreaterThan(0)
    })
  })

  it("first headerInstance TypeRef image is 'FILE_DESCRIPTION'", () => {
    const cst = parseClean(MINIMAL_IFC)
    const header = child(cst, "header")
    const firstInst = children(header, "headerInstance")[0]
    expect(firstInst.children.TypeRef[0].image).toBe("FILE_DESCRIPTION")
  })

  it("second headerInstance TypeRef image is 'FILE_SCHEMA'", () => {
    const cst = parseClean(MINIMAL_IFC)
    const header = child(cst, "header")
    const secondInst = children(header, "headerInstance")[1]
    expect(secondInst.children.TypeRef[0].image).toBe("FILE_SCHEMA")
  })

  it("FILE_NAME_IFC with DateTime value in header parses with zero errors", () => {
    checkParseResult(parse(FILE_NAME_IFC), "ifc")
  })
})

// ─── data rule ───────────────────────────────────────────────────────────────

describe("Parser — data rule", () => {
  it("data CstNode is named 'data'", () => {
    const cst = parseClean(MINIMAL_IFC)
    expect(child(cst, "data").name).toBe("data")
  })

  it("empty data section has zero instance children", () => {
    const cst = parseClean(EMPTY_DATA_IFC)
    expect(dataInstances(cst).length).toBe(0)
  })

  it("data section with one instance has one instance child", () => {
    const cst = parseClean(wrapData("#1=TYPENAME();"))
    expect(dataInstances(cst).length).toBe(1)
  })

  it("data section with multiple instances has the correct count", () => {
    const cst = parseClean(wrapData("#1=A();\n#2=B();\n#3=C();"))
    expect(dataInstances(cst).length).toBe(3)
  })

  it("FULL_IFC data section has 8 instances", () => {
    const cst = parseClean(FULL_IFC)
    // #1, #2, #1245, #555, #3, #4, #5, #6
    expect(dataInstances(cst).length).toBe(8)
  })
})

// ─── instance rule ───────────────────────────────────────────────────────────

describe("Parser — instance rule", () => {
  it("instance CstNode is named 'instance'", () => {
    const cst = parseClean(wrapData("#1=TYPENAME();"))
    expect(dataInstances(cst)[0].name).toBe("instance")
  })

  it("instance has an Id token", () => {
    const cst = parseClean(wrapData("#1=TYPENAME();"))
    const inst = dataInstances(cst)[0]
    expect(inst.children.Id).toBeDefined()
  })

  it("instance Id image is '#1'", () => {
    const cst = parseClean(wrapData("#1=TYPENAME();"))
    const inst = dataInstances(cst)[0]
    expect(inst.children.Id[0].image).toBe("#1")
  })

  it("instance Id with larger number: '#23522'", () => {
    const cst = parseClean(wrapData("#23522=TYPENAME();"))
    const inst = dataInstances(cst)[0]
    expect(inst.children.Id[0].image).toBe("#23522")
  })

  it("instance Id with leading spaces is still parsed: ' #1245'", () => {
    // From FULL_IFC: "#1245= IFCSHAPEREPRESENTATION(..."
    const cst = parseClean(wrapData("#1245= TYPENAME();"))
    const inst = dataInstances(cst)[0]
    expect(inst.children.Id[0].image).toBe("#1245")
  })

  it("instance has an entity child", () => {
    const cst = parseClean(wrapData("#1=TYPENAME();"))
    const inst = dataInstances(cst)[0]
    expect(child(inst, "entity")).toBeDefined()
  })
})

// ─── entity rule ─────────────────────────────────────────────────────────────

describe("Parser — entity rule", () => {
  it("entity CstNode is named 'entity'", () => {
    expect(parseEntity("#1=TYPENAME();").name).toBe("entity")
  })

  it("entity TypeRef image matches the type name", () => {
    const entity = parseEntity("#1=IFCBEAM();")
    expect(entity.children.TypeRef[0].image).toBe("IFCBEAM")
  })

  it("entity with no parameters has empty parameter list", () => {
    expect(parseParameters("#1=TYPENAME();").length).toBe(0)
  })

  it("entity with one parameter has parameter list of length 1", () => {
    expect(parseParameters("#1=TYPENAME('val');").length).toBe(1)
  })

  it("entity with multiple parameters has correct count", () => {
    expect(parseParameters("#1=TYPENAME('a','b','c');").length).toBe(3)
  })

  it("entity with nested entity parameter parses cleanly", () => {
    // From FULL_IFC: #4=IFCNESTEDENTITYTEST(IFCLABEL("TEST"),$)
    const params = parseParameters("#4=OUTER(INNER(\"x\"),$);")
    expect(params.length).toBe(2)
    // First param should have an entity child
    expect(child(params[0], "entity")).toBeDefined()
  })
})

// ─── parameter alternatives ───────────────────────────────────────────────────

describe("Parser — parameter alternatives", () => {
  it("StringLiteral parameter", () => {
    const params = parseParameters('#1=T("Test");')
    expect(params[0].children.StringLiteral).toBeDefined()
    expect(params[0].children.StringLiteral[0].image).toBe('"Test"')
  })

  it("AnyString parameter", () => {
    const params = parseParameters("#1=T('Name');")
    expect(params[0].children.AnyString).toBeDefined()
    expect(params[0].children.AnyString[0].image).toBe("'Name'")
  })

  it("Undefined parameter: $", () => {
    const params = parseParameters("#1=T($);")
    expect(params[0].children.Undefined).toBeDefined()
    expect(params[0].children.Undefined[0].image).toBe("$")
  })

  it("Derived parameter: *", () => {
    const params = parseParameters("#1=T(*);")
    expect(params[0].children.Derived).toBeDefined()
    expect(params[0].children.Derived[0].image).toBe("*")
  })

  it("EnumValue parameter: .ENUMVAL.", () => {
    const params = parseParameters("#1=T(.ENUMVAL.);")
    expect(params[0].children.EnumValue).toBeDefined()
    expect(params[0].children.EnumValue[0].image).toBe(".ENUMVAL.")
  })

  it("LogicalBool .T. parameter", () => {
    const params = parseParameters("#1=T(.T.);")
    expect(params[0].children.LogicalBool).toBeDefined()
    expect(params[0].children.LogicalBool[0].image).toBe(".T.")
  })

  it("DateTime parameter: '2016-02-04T08:47:55'", () => {
    const params = parseParameters("#1=T('2016-02-04T08:47:55');")
    expect(params[0].children.DateTime).toBeDefined()
    expect(params[0].children.DateTime[0].image).toBe("'2016-02-04T08:47:55'")
  })

  it("RealLiteral — integer: -1", () => {
    const params = parseParameters("#1=T(-1);")
    expect(params[0].children.RealLiteral).toBeDefined()
    expect(params[0].children.RealLiteral[0].image).toBe("-1")
  })

  it("RealLiteral — decimal: 1.1", () => {
    const params = parseParameters("#1=T(1.1);")
    expect(params[0].children.RealLiteral[0].image).toBe("1.1")
  })

  it("RealLiteral — negative scientific: -1.1E35", () => {
    const params = parseParameters("#1=T(-1.1E35);")
    expect(params[0].children.RealLiteral[0].image).toBe("-1.1E35")
  })

  it("RealLiteral — small exponent: 1.1E-35", () => {
    const params = parseParameters("#1=T(1.1E-35);")
    expect(params[0].children.RealLiteral[0].image).toBe("1.1E-35")
  })

  it("RealLiteral — trailing dot exponent: -1.E45", () => {
    const params = parseParameters("#1=T(-1.E45);")
    expect(params[0].children.RealLiteral[0].image).toBe("-1.E45")
  })

  it("Id reference parameter: #42", () => {
    const params = parseParameters("#1=T(#42);")
    expect(params[0].children.Id).toBeDefined()
    expect(params[0].children.Id[0].image).toBe("#42")
  })

  it("collection parameter: (1,2,3)", () => {
    const params = parseParameters("#1=T((1,2,3));")
    expect(child(params[0], "collection")).toBeDefined()
  })

  it("empty collection parameter: ()", () => {
    const params = parseParameters("#1=T(());")
    expect(child(params[0], "collection")).toBeDefined()
    const coll = child(params[0], "collection")
    expect(children(coll, "collectionValue").length).toBe(0)
  })

  it("nested entity parameter", () => {
    const params = parseParameters('#1=T(NESTED("x"));')
    expect(child(params[0], "entity")).toBeDefined()
    expect(child(params[0], "entity").children.TypeRef[0].image).toBe("NESTED")
  })

  it("all parameter types from FULL_IFC parse with zero errors", () => {
    checkParseResult(parse(FULL_IFC), "ifc")
  })
})

// ─── collection rule ──────────────────────────────────────────────────────────

describe("Parser — collection rule", () => {
  /** Get the collection CstNode from the first parameter of the first entity. */
  function parseCollection(instanceStr: string): any {
    const params = parseParameters(instanceStr)
    return child(params[0], "collection")
  }

  it("empty collection: ()", () => {
    const coll = parseCollection("#1=T(());")
    expect(coll.name).toBe("collection")
    expect(children(coll, "collectionValue").length).toBe(0)
  })

  it("single-element collection: (1)", () => {
    const coll = parseCollection("#1=T((1));")
    expect(children(coll, "collectionValue").length).toBe(1)
  })

  it("multi-element collection: (1,2,3)", () => {
    const coll = parseCollection("#1=T((1,2,3));")
    expect(children(coll, "collectionValue").length).toBe(3)
  })

  it("collection of Id refs: (#1,#2,#3)", () => {
    const coll = parseCollection("#1=T((#10,#20,#30));")
    const vals = children(coll, "collectionValue")
    expect(vals.length).toBe(3)
    vals.forEach((v: any) => {
      expect(v.children.Id).toBeDefined()
    })
  })

  it("nested collection: ((1,2),(3,4))", () => {
    const coll = parseCollection("#1=T(((1,2),(3,4)));")
    const vals = children(coll, "collectionValue")
    expect(vals.length).toBe(2)
    // Each value should be a nested collection
    vals.forEach((v: any) => {
      expect(child(v, "collection")).toBeDefined()
    })
  })

  it("three-level deep nesting: (((1,2),(3,4)),((5,6)))", () => {
    const result = parse(wrapData("#1=T((((1,2),(3,4)),((5,6))));"))
    expect(result.lexErrors.length).toBe(0)
    expect(result.parseErrors.length).toBe(0)
  })

  it("collection with Undefined values: ($,$)", () => {
    const coll = parseCollection("#1=T(($,$));")
    expect(children(coll, "collectionValue").length).toBe(2)
  })

  it("mixed-type collection from FULL_IFC: (#107,'Body','SweptSolid',(#1239))", () => {
    const cst = parseClean(FULL_IFC)
    const instances = dataInstances(cst)
    // #1245 is the 3rd instance in FULL_IFC (index 2)
    const inst1245 = instances.find(
      (i: any) => i.children.Id[0].image === "#1245"
    )
    expect(inst1245).toBeDefined()
    const params = children(child(inst1245, "entity"), "parameter")
    // params: #107, 'Body', 'SweptSolid', (#1239)
    expect(params.length).toBe(4)
    // Last param is a collection
    expect(child(params[3], "collection")).toBeDefined()
  })
})

// ─── error recovery ───────────────────────────────────────────────────────────

describe("Parser — error recovery", () => {
  it("returns parseErrors array (non-empty) for syntactically invalid input", () => {
    const result = parse("ISO-10303-21;\nNOT-VALID-IFC")
    expect(result.parseErrors.length).toBeGreaterThan(0)
  })

  it("still returns a CstNode (not null) when input has parse errors", () => {
    const result = parse("ISO-10303-21;\nNOT-VALID-IFC")
    expect(result.cst).not.toBeNull()
    expect(result.cst).not.toBeUndefined()
  })

  it("returns lexErrors array (non-empty) for lexically invalid input", () => {
    const result = parse("@@@")
    expect(result.lexErrors.length).toBeGreaterThan(0)
  })
})

import { describe, it, expect } from "vitest"
import { definitionVisitor } from "./definitionVisitor"
import { parse } from "../ifc"
import { MINIMAL_IFC, FULL_IFC, EMPTY_DATA_IFC, COMMENT_IFC, FILE_NAME_IFC } from "../fixtures"

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Minimal IFC wrapper for testing specific DATA content. */
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

/** Parse and visit inline IFC text; asserts clean parse first. */
function visit(ifc: string): any {
  const result = parse(ifc)
  expect(result.lexErrors.length, "lex errors").toBe(0)
  expect(result.parseErrors.length, "parse errors").toBe(0)
  return definitionVisitor.visit(result.cst)
}

/** Parse and visit a DATA-section body. */
function visitData(dataBody: string): any {
  return visit(wrapData(dataBody))
}

// ─── ifc() ───────────────────────────────────────────────────────────────────

describe("Visitor — ifc()", () => {
  it("returns object with type: 'ifc'", () => {
    expect(visit(MINIMAL_IFC).type).toBe("ifc")
  })

  it("returns object with version: ''", () => {
    expect(visit(MINIMAL_IFC).version).toBe("")
  })

  it("returns object with 'header' key", () => {
    expect(visit(MINIMAL_IFC).header).toBeDefined()
  })

  it("returns object with 'data' key", () => {
    expect(visit(MINIMAL_IFC).data).toBeDefined()
  })

  it("data value is an object", () => {
    expect(typeof visit(MINIMAL_IFC).data).toBe("object")
  })
})

// ─── data() ──────────────────────────────────────────────────────────────────

describe("Visitor — data()", () => {
  it("empty data section returns empty object {}", () => {
    expect(visit(EMPTY_DATA_IFC).data).toEqual({})
  })

  it("single instance: data has one key", () => {
    const data = visitData("#1=TYPENAME();").data
    expect(Object.keys(data).length).toBe(1)
  })

  it("single instance key includes the '#' prefix: '#1'", () => {
    const data = visitData("#1=TYPENAME();").data
    expect(data["#1"]).toBeDefined()
  })

  it("multiple instances: data has one key per entity", () => {
    const data = visitData("#1=A();\n#2=B();\n#3=C();").data
    expect(Object.keys(data).length).toBe(3)
  })

  it("data keys use the exact token image: '#1', '#2', '#3'", () => {
    const data = visitData("#1=A();\n#2=B();\n#3=C();").data
    expect(data["#1"]).toBeDefined()
    expect(data["#2"]).toBeDefined()
    expect(data["#3"]).toBeDefined()
  })

  it("FULL_IFC data has 8 keys", () => {
    const data = visit(FULL_IFC).data
    expect(Object.keys(data).length).toBe(8)
  })
})

// ─── entity() ────────────────────────────────────────────────────────────────

describe("Visitor — entity()", () => {
  it("entity has 'name' key", () => {
    const entity = visitData("#1=IFCBEAM();").data["#1"]
    expect(entity.name).toBeDefined()
  })

  it("entity has 'parameter' key", () => {
    const entity = visitData("#1=IFCBEAM();").data["#1"]
    expect(entity.parameter).toBeDefined()
  })

  it("entity name matches the TypeRef: 'IFCBEAM'", () => {
    const entity = visitData("#1=IFCBEAM();").data["#1"]
    expect(entity.name).toBe("IFCBEAM")
  })

  it("zero-parameter entity: parameter is empty array", () => {
    const entity = visitData("#1=TYPENAME();").data["#1"]
    expect(entity.parameter).toEqual([])
  })

  it("multi-parameter entity: parameter array has correct length", () => {
    const entity = visitData("#1=T('a','b','c');").data["#1"]
    expect(entity.parameter.length).toBe(3)
  })
})

// ─── parameter() — token pass-through ────────────────────────────────────────

describe("Visitor — parameter() token pass-through", () => {
  it("StringLiteral parameter returns object with image", () => {
    const params = visitData('#1=T("Test");').data["#1"].parameter
    expect(params[0].image).toBe('"Test"')
  })

  it("AnyString parameter returns object with image", () => {
    const params = visitData("#1=T('Name');").data["#1"].parameter
    expect(params[0].image).toBe("'Name'")
  })

  it("Undefined parameter ($) returns object with image '$'", () => {
    const params = visitData("#1=T($);").data["#1"].parameter
    expect(params[0].image).toBe("$")
  })

  it("Derived parameter (*) returns object with image '*'", () => {
    const params = visitData("#1=T(*);").data["#1"].parameter
    expect(params[0].image).toBe("*")
  })

  it("EnumValue parameter returns object with image '.ENUMVAL.'", () => {
    const params = visitData("#1=T(.ENUMVAL.);").data["#1"].parameter
    expect(params[0].image).toBe(".ENUMVAL.")
  })

  it("Logical bool .T. parameter image is '.T.'", () => {
    const params = visitData("#1=T(.T.);").data["#1"].parameter
    expect(params[0].image).toBe(".T.")
  })

  it("Logical bool .F. parameter image is '.F.'", () => {
    const params = visitData("#1=T(.F.);").data["#1"].parameter
    expect(params[0].image).toBe(".F.")
  })

  it("Logical bool .U. parameter image is '.U.'", () => {
    const params = visitData("#1=T(.U.);").data["#1"].parameter
    expect(params[0].image).toBe(".U.")
  })

  it("RealLiteral integer parameter image is '-1'", () => {
    const params = visitData("#1=T(-1);").data["#1"].parameter
    expect(params[0].image).toBe("-1")
  })

  it("RealLiteral decimal parameter image is '1.1'", () => {
    const params = visitData("#1=T(1.1);").data["#1"].parameter
    expect(params[0].image).toBe("1.1")
  })

  it("Id reference parameter image is '#42'", () => {
    const params = visitData("#1=T(#42);").data["#1"].parameter
    expect(params[0].image).toBe("#42")
  })

  it("DateTime parameter image is the full datetime string", () => {
    const params = visitData("#1=T('2016-02-04T08:47:55');").data["#1"].parameter
    expect(params[0].image).toBe("'2016-02-04T08:47:55'")
  })

  it("token pass-through does not include tokenType property", () => {
    const params = visitData('#1=T("Test");').data["#1"].parameter
    expect(params[0].tokenType).toBeUndefined()
  })

  it("token pass-through includes image and startOffset properties", () => {
    const params = visitData('#1=T("Test");').data["#1"].parameter
    expect(params[0].image).toBeDefined()
    expect(params[0].startOffset).toBeDefined()
  })
})

// ─── parameter() — collection ────────────────────────────────────────────────

describe("Visitor — parameter() collection", () => {
  it("collection parameter returns an array", () => {
    const params = visitData("#1=T((1,2,3));").data["#1"].parameter
    expect(Array.isArray(params[0])).toBe(true)
  })

  it("empty collection parameter returns empty array []", () => {
    const params = visitData("#1=T(());").data["#1"].parameter
    expect(params[0]).toEqual([])
  })

  it("collection with three numbers has length 3", () => {
    const params = visitData("#1=T((1,2,3));").data["#1"].parameter
    expect(params[0].length).toBe(3)
  })

  it("collection values are raw tokens with .image property", () => {
    const params = visitData("#1=T((1,2));").data["#1"].parameter
    const items = params[0]
    expect(items[0].image).toBe("1")
    expect(items[1].image).toBe("2")
  })

  it("nested collection: inner values are recursively visited as arrays", () => {
    const params = visitData("#1=T(((1,2),(3,4)));").data["#1"].parameter
    const outerArray = params[0]
    expect(outerArray.length).toBe(2)
    // Each item is a recursively visited nested collection → array
    outerArray.forEach((item: any) => {
      expect(Array.isArray(item)).toBe(true)
    })
  })

  it("nested collection items contain the correct token images", () => {
    const params = visitData("#1=T(((1,2),(3,4)));").data["#1"].parameter
    const outerArray = params[0]
    expect(outerArray[0][0].image).toBe("1")
    expect(outerArray[0][1].image).toBe("2")
    expect(outerArray[1][0].image).toBe("3")
    expect(outerArray[1][1].image).toBe("4")
  })
})

// ─── parameter() — nested entity ─────────────────────────────────────────────

describe("Visitor — parameter() nested entity", () => {
  it("nested entity parameter returns an entity object", () => {
    const params = visitData('#1=T(NESTED("x"));').data["#1"].parameter
    expect(typeof params[0]).toBe("object")
    expect(params[0].name).toBeDefined()
  })

  it("nested entity has 'name' and 'parameter' keys", () => {
    const params = visitData('#1=T(NESTED("x"));').data["#1"].parameter
    expect(params[0].name).toBe("NESTED")
    expect(Array.isArray(params[0].parameter)).toBe(true)
  })

  it("nested entity from FULL_IFC: IFCLABEL inside IFCNESTEDENTITYTEST", () => {
    const data = visit(FULL_IFC).data
    // #4=IFCNESTEDENTITYTEST(IFCLABEL("TEST"),$)
    const entity = data["#4"]
    expect(entity.name).toBe("IFCNESTEDENTITYTEST")
    expect(entity.parameter[0].name).toBe("IFCLABEL")
    expect(entity.parameter[0].parameter[0].image).toBe('"TEST"')
  })

  it("second parameter after nested entity is a token ($)", () => {
    const data = visit(FULL_IFC).data
    const entity = data["#4"]
    expect(entity.parameter[1].image).toBe("$")
  })
})

// ─── header() ────────────────────────────────────────────────────────────────

describe("Visitor — header()", () => {
  it("header has type: 'header'", () => {
    expect(visit(MINIMAL_IFC).header.type).toBe("header")
  })

  it("header instances are spread as numeric indices", () => {
    const header = visit(MINIMAL_IFC).header
    // MINIMAL_IFC has 2 header instances → indices 0 and 1
    expect(header[0]).toBeDefined()
    expect(header[1]).toBeDefined()
  })

  it("each spread value has 'name' and 'value' keys", () => {
    const header = visit(MINIMAL_IFC).header
    expect(header[0].name).toBeDefined()
    expect(header[0].value).toBeDefined()
    expect(header[1].name).toBeDefined()
    expect(header[1].value).toBeDefined()
  })
})

// ─── headerInstance() ─────────────────────────────────────────────────────────

describe("Visitor — headerInstance()", () => {
  it("first header instance name is 'FILE_DESCRIPTION'", () => {
    const header = visit(MINIMAL_IFC).header
    expect(header[0].name).toBe("FILE_DESCRIPTION")
  })

  it("second header instance name is 'FILE_SCHEMA'", () => {
    const header = visit(MINIMAL_IFC).header
    expect(header[1].name).toBe("FILE_SCHEMA")
  })

  it("value is an array", () => {
    const header = visit(MINIMAL_IFC).header
    expect(Array.isArray(header[0].value)).toBe(true)
  })

  it("FILE_DESCRIPTION has two header values", () => {
    // FILE_DESCRIPTION(('Test'),'2;1') has 2 comma-separated values
    const header = visit(MINIMAL_IFC).header
    expect(header[0].value.length).toBe(2)
  })
})

// ─── Full round-trip: FULL_IFC ────────────────────────────────────────────────

describe("Visitor — FULL_IFC round-trip", () => {
  it("#1 (IFCSTRINGTEST) is present in data", () => {
    expect(visit(FULL_IFC).data["#1"]).toBeDefined()
    expect(visit(FULL_IFC).data["#1"].name).toBe("IFCSTRINGTEST")
  })

  it("#2 (IFCNUMBERTEST) has 6 parameters", () => {
    const entity = visit(FULL_IFC).data["#2"]
    expect(entity.name).toBe("IFCNUMBERTEST")
    expect(entity.parameter.length).toBe(6)
  })

  it("#2 number parameters have correct images", () => {
    const params = visit(FULL_IFC).data["#2"].parameter
    expect(params[0].image).toBe("-1")
    expect(params[1].image).toBe("1.1")
    expect(params[2].image).toBe("-1.1E35")
    expect(params[3].image).toBe("1.1E-35")
    expect(params[4].image).toBe("-1.E45")
    expect(params[5].image).toBe("1.E-45")
  })

  it("#555 (IFCNULLTEST) has $ and * parameters", () => {
    const entity = visit(FULL_IFC).data["#555"]
    expect(entity.name).toBe("IFCNULLTEST")
    expect(entity.parameter[0].image).toBe("$")
    expect(entity.parameter[1].image).toBe("*")
  })

  it("#3 (IFCREFTEST) has Id reference parameters", () => {
    const entity = visit(FULL_IFC).data["#3"]
    expect(entity.name).toBe("IFCREFTEST")
    expect(entity.parameter[0].image).toBe("#1")
    expect(entity.parameter[1].image).toBe("#23522")
  })

  it("#5 (IFCENUMVALUETEST) enum value parameters", () => {
    const entity = visit(FULL_IFC).data["#5"]
    expect(entity.name).toBe("IFCENUMVALUETEST")
    expect(entity.parameter[2].image).toBe(".ENUMVAL.")
    expect(entity.parameter[3].image).toBe(".ENUMVAL2.")
  })

  it("#6 (IFCNESTEDPARENTHESIS) first param is array of 4 numbers", () => {
    const entity = visit(FULL_IFC).data["#6"]
    expect(entity.name).toBe("IFCNESTEDPARENTHESIS")
    const firstParam = entity.parameter[0]
    expect(Array.isArray(firstParam)).toBe(true)
    expect(firstParam.length).toBe(4)
  })

  it("#6 (IFCNESTEDPARENTHESIS) second param is empty array", () => {
    const entity = visit(FULL_IFC).data["#6"]
    expect(entity.parameter[1]).toEqual([])
  })

  it("#6 (IFCNESTEDPARENTHESIS) third param is empty array (comment doesn't affect it)", () => {
    const entity = visit(FULL_IFC).data["#6"]
    expect(entity.parameter[2]).toEqual([])
  })

  it("#1245 (IFCSHAPEREPRESENTATION) is present", () => {
    const entity = visit(FULL_IFC).data["#1245"]
    expect(entity).toBeDefined()
    expect(entity.name).toBe("IFCSHAPEREPRESENTATION")
  })
})

// ─── Round-trip: FILE_NAME_IFC ────────────────────────────────────────────────

describe("Visitor — FILE_NAME_IFC round-trip", () => {
  it("visits without throwing", () => {
    expect(() => visit(FILE_NAME_IFC)).not.toThrow()
  })

  it("FILE_NAME header instance name is 'FILE_NAME'", () => {
    const header = visit(FILE_NAME_IFC).header
    const fileNameEntry = [header[0], header[1]].find((h: any) => h?.name === "FILE_NAME")
    expect(fileNameEntry).toBeDefined()
  })
})

// ─── Round-trip: COMMENT_IFC ─────────────────────────────────────────────────

describe("Visitor — COMMENT_IFC round-trip", () => {
  it("visits without throwing", () => {
    expect(() => visit(COMMENT_IFC)).not.toThrow()
  })

  it("header is defined and has type 'header'", () => {
    expect(visit(COMMENT_IFC).header.type).toBe("header")
  })

  it("data is a non-null object", () => {
    const data = visit(COMMENT_IFC).data
    expect(data).not.toBeNull()
    expect(typeof data).toBe("object")
  })

  it("#1 entity is present and named 'IFCTEST'", () => {
    expect(visit(COMMENT_IFC).data["#1"].name).toBe("IFCTEST")
  })
})

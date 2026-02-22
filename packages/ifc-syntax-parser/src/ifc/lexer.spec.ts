import { describe, it, expect } from "vitest"
import { Lexer, tokenMatcher } from "chevrotain"
import {
  allTokens,
  lexerInstance,
  IsoStartTag,
  IsoEndTag,
  HeaderTag,
  DataTag,
  DotComma,
  Id,
  Equal,
  EndTag,
  TypeRef,
  Comment,
  LParen,
  RParen,
  Comma,
  RealLiteral,
  StringLiteral,
  AnyString,
  DateTime,
  EnumValue,
  LogicalBool,
  Derived,
  Undefined,
  Word
} from "./lexer"
import { FULL_IFC, COMMENT_IFC, FILE_NAME_IFC } from "../fixtures"

// Mode-isolated lexer instances — no full-file wrapper needed.
const fileLexer = lexerInstance // default mode: fileMode
const sectionLexer = new Lexer({ ...allTokens, defaultMode: "sectionMode" })
const collectionLexer = new Lexer({ ...allTokens, defaultMode: "collectionMode" })

// ─── fileMode ───────────────────────────────────────────────────────────────

describe("Lexer — fileMode tokens", () => {
  it("tokenizes IsoStartTag", () => {
    const result = fileLexer.tokenize("ISO-10303-21;")
    expect(result.errors.length).toBe(0)
    expect(tokenMatcher(result.tokens[0], IsoStartTag)).toBe(true)
    expect(result.tokens[0].image).toBe("ISO-10303-21")
  })

  it("tokenizes IsoEndTag", () => {
    const result = fileLexer.tokenize("END-ISO-10303-21;")
    expect(result.errors.length).toBe(0)
    expect(tokenMatcher(result.tokens[0], IsoEndTag)).toBe(true)
    expect(result.tokens[0].image).toBe("END-ISO-10303-21")
  })

  it("tokenizes HeaderTag", () => {
    const result = fileLexer.tokenize("ISO-10303-21;\nHEADER;")
    const headerToken = result.tokens.find(t => tokenMatcher(t, HeaderTag))
    expect(headerToken).toBeDefined()
    expect(headerToken!.image).toBe("HEADER")
  })

  it("tokenizes DataTag", () => {
    const result = fileLexer.tokenize("ISO-10303-21;\nHEADER;\nENDSEC;\nDATA;")
    const dataToken = result.tokens.find(t => tokenMatcher(t, DataTag))
    expect(dataToken).toBeDefined()
    expect(dataToken!.image).toBe("DATA")
  })

  it("tokenizes DotComma (semicolon)", () => {
    const result = fileLexer.tokenize("ISO-10303-21;")
    const semi = result.tokens.find(t => tokenMatcher(t, DotComma))
    expect(semi).toBeDefined()
    expect(semi!.image).toBe(";")
  })

  it("skips whitespace — whitespace does not appear in token stream", () => {
    const result = fileLexer.tokenize("ISO-10303-21;   \n  END-ISO-10303-21;")
    expect(result.errors.length).toBe(0)
    expect(result.tokens.length).toBe(4) // IsoStart, DotComma, IsoEnd, DotComma
  })

  it("tokenizes a minimal complete file with zero errors", () => {
    const result = fileLexer.tokenize(
      "ISO-10303-21;\nHEADER;\nENDSEC;\nDATA;\nENDSEC;\nEND-ISO-10303-21;"
    )
    expect(result.errors.length).toBe(0)
  })
})

// ─── sectionMode ────────────────────────────────────────────────────────────

describe("Lexer — sectionMode tokens", () => {
  it("tokenizes Id: #1", () => {
    const result = sectionLexer.tokenize("#1")
    expect(result.errors.length).toBe(0)
    expect(tokenMatcher(result.tokens[0], Id)).toBe(true)
    expect(result.tokens[0].image).toBe("#1")
  })

  it("tokenizes Id with multiple digits: #23522", () => {
    const result = sectionLexer.tokenize("#23522")
    expect(tokenMatcher(result.tokens[0], Id)).toBe(true)
    expect(result.tokens[0].image).toBe("#23522")
  })

  it("tokenizes Equal", () => {
    const result = sectionLexer.tokenize("#1=")
    expect(tokenMatcher(result.tokens[1], Equal)).toBe(true)
    expect(result.tokens[1].image).toBe("=")
  })

  it("tokenizes TypeRef: IFCBEAM", () => {
    const result = sectionLexer.tokenize("IFCBEAM")
    expect(result.errors.length).toBe(0)
    expect(tokenMatcher(result.tokens[0], TypeRef)).toBe(true)
    expect(result.tokens[0].image).toBe("IFCBEAM")
  })

  it("tokenizes TypeRef with underscores: FILE_DESCRIPTION", () => {
    const result = sectionLexer.tokenize("FILE_DESCRIPTION")
    expect(tokenMatcher(result.tokens[0], TypeRef)).toBe(true)
    expect(result.tokens[0].image).toBe("FILE_DESCRIPTION")
  })

  it("tokenizes EndTag: ENDSEC", () => {
    const result = sectionLexer.tokenize("ENDSEC")
    expect(tokenMatcher(result.tokens[0], EndTag)).toBe(true)
    expect(result.tokens[0].image).toBe("ENDSEC")
  })

  it("tokenizes Comment in sectionMode — lands in groups.comments, not tokens", () => {
    const result = sectionLexer.tokenize("/* a comment */")
    expect(result.errors.length).toBe(0)
    expect(result.tokens.length).toBe(0)
    expect(result.groups["comments"].length).toBe(1)
    expect(tokenMatcher(result.groups["comments"][0], Comment)).toBe(true)
  })

  it("tokenizes LParen in sectionMode", () => {
    const result = sectionLexer.tokenize("ENTITY()")
    const lp = result.tokens.find(t => tokenMatcher(t, LParen))
    expect(lp).toBeDefined()
  })
})

// ─── collectionMode ─────────────────────────────────────────────────────────

describe("Lexer — collectionMode tokens", () => {
  it("tokenizes EnumValue: .ENUMVAL.", () => {
    const result = collectionLexer.tokenize(".ENUMVAL.")
    expect(result.errors.length).toBe(0)
    expect(tokenMatcher(result.tokens[0], EnumValue)).toBe(true)
    expect(result.tokens[0].image).toBe(".ENUMVAL.")
  })

  it("tokenizes multiple EnumValues: .ENUMVAL.,.ENUMVAL2.", () => {
    const result = collectionLexer.tokenize(".ENUMVAL.,.ENUMVAL2.")
    const enums = result.tokens.filter(t => tokenMatcher(t, EnumValue))
    expect(enums.length).toBe(2)
    expect(enums[0].image).toBe(".ENUMVAL.")
    expect(enums[1].image).toBe(".ENUMVAL2.")
  })

  // LogicalBool appears before EnumValue in collectionMode, so .T./.F./.U.
  // are correctly tokenized as LogicalBool (not EnumValue).
  it("tokenizes .T. as LogicalBool", () => {
    const result = collectionLexer.tokenize(".T.")
    expect(result.errors.length).toBe(0)
    expect(result.tokens[0].image).toBe(".T.")
    expect(tokenMatcher(result.tokens[0], LogicalBool)).toBe(true)
  })

  it("tokenizes .F. as LogicalBool", () => {
    const result = collectionLexer.tokenize(".F.")
    expect(result.errors.length).toBe(0)
    expect(result.tokens[0].image).toBe(".F.")
    expect(tokenMatcher(result.tokens[0], LogicalBool)).toBe(true)
  })

  it("tokenizes .U. as LogicalBool", () => {
    const result = collectionLexer.tokenize(".U.")
    expect(result.errors.length).toBe(0)
    expect(result.tokens[0].image).toBe(".U.")
    expect(tokenMatcher(result.tokens[0], LogicalBool)).toBe(true)
  })

  it("longer enum value .ENUMVAL. still tokenizes as EnumValue, not LogicalBool", () => {
    const result = collectionLexer.tokenize(".ENUMVAL.")
    expect(tokenMatcher(result.tokens[0], EnumValue)).toBe(true)
  })

  it("tokenizes Derived: *", () => {
    const result = collectionLexer.tokenize("*")
    expect(result.errors.length).toBe(0)
    expect(tokenMatcher(result.tokens[0], Derived)).toBe(true)
    expect(result.tokens[0].image).toBe("*")
  })

  it("tokenizes Undefined: $", () => {
    const result = collectionLexer.tokenize("$")
    expect(result.errors.length).toBe(0)
    expect(tokenMatcher(result.tokens[0], Undefined)).toBe(true)
    expect(result.tokens[0].image).toBe("$")
  })

  it("tokenizes RealLiteral — integer: -1", () => {
    const result = collectionLexer.tokenize("-1")
    expect(result.errors.length).toBe(0)
    expect(tokenMatcher(result.tokens[0], RealLiteral)).toBe(true)
    expect(result.tokens[0].image).toBe("-1")
  })

  it("tokenizes RealLiteral — decimal: 1.1", () => {
    const result = collectionLexer.tokenize("1.1")
    expect(tokenMatcher(result.tokens[0], RealLiteral)).toBe(true)
    expect(result.tokens[0].image).toBe("1.1")
  })

  it("tokenizes RealLiteral — positive scientific: 1.1E35", () => {
    const result = collectionLexer.tokenize("1.1E35")
    expect(tokenMatcher(result.tokens[0], RealLiteral)).toBe(true)
    expect(result.tokens[0].image).toBe("1.1E35")
  })

  it("tokenizes RealLiteral — negative exponent: -1.1E35", () => {
    const result = collectionLexer.tokenize("-1.1E35")
    expect(tokenMatcher(result.tokens[0], RealLiteral)).toBe(true)
    expect(result.tokens[0].image).toBe("-1.1E35")
  })

  it("tokenizes RealLiteral — small scientific: 1.1E-35", () => {
    const result = collectionLexer.tokenize("1.1E-35")
    expect(tokenMatcher(result.tokens[0], RealLiteral)).toBe(true)
    expect(result.tokens[0].image).toBe("1.1E-35")
  })

  it("tokenizes RealLiteral — trailing dot with exponent: -1.E45", () => {
    const result = collectionLexer.tokenize("-1.E45")
    expect(tokenMatcher(result.tokens[0], RealLiteral)).toBe(true)
    expect(result.tokens[0].image).toBe("-1.E45")
  })

  it("tokenizes RealLiteral — zero: 0", () => {
    const result = collectionLexer.tokenize("0")
    expect(tokenMatcher(result.tokens[0], RealLiteral)).toBe(true)
    expect(result.tokens[0].image).toBe("0")
  })

  it("tokenizes StringLiteral (JSON-style): \"Test\"", () => {
    const result = collectionLexer.tokenize('"Test"')
    expect(result.errors.length).toBe(0)
    expect(tokenMatcher(result.tokens[0], StringLiteral)).toBe(true)
    expect(result.tokens[0].image).toBe('"Test"')
  })

  it("tokenizes StringLiteral — empty: \"\"", () => {
    const result = collectionLexer.tokenize('""')
    expect(tokenMatcher(result.tokens[0], StringLiteral)).toBe(true)
    expect(result.tokens[0].image).toBe('""')
  })

  it("tokenizes AnyString (SQL-style): 'Name'", () => {
    const result = collectionLexer.tokenize("'Name'")
    expect(result.errors.length).toBe(0)
    expect(tokenMatcher(result.tokens[0], AnyString)).toBe(true)
    expect(result.tokens[0].image).toBe("'Name'")
  })

  it("tokenizes AnyString with escaped quote: 'it''s'", () => {
    const result = collectionLexer.tokenize("'it''s'")
    expect(result.errors.length).toBe(0)
    expect(tokenMatcher(result.tokens[0], AnyString)).toBe(true)
    expect(result.tokens[0].image).toBe("'it''s'")
  })

  it("tokenizes AnyString — empty: ''", () => {
    const result = collectionLexer.tokenize("''")
    expect(tokenMatcher(result.tokens[0], AnyString)).toBe(true)
    expect(result.tokens[0].image).toBe("''")
  })

  it("tokenizes Id reference in collection: #107", () => {
    const result = collectionLexer.tokenize("#107")
    expect(result.errors.length).toBe(0)
    expect(tokenMatcher(result.tokens[0], Id)).toBe(true)
    expect(result.tokens[0].image).toBe("#107")
  })

  it("tokenizes Comma separator", () => {
    const result = collectionLexer.tokenize("1,2")
    const commas = result.tokens.filter(t => tokenMatcher(t, Comma))
    expect(commas.length).toBe(1)
    expect(commas[0].image).toBe(",")
  })

  it("tokenizes nested LParen/RParen pairs", () => {
    const result = collectionLexer.tokenize("((1,2))")
    const lparen = result.tokens.filter(t => tokenMatcher(t, LParen))
    const rparen = result.tokens.filter(t => tokenMatcher(t, RParen))
    expect(lparen.length).toBe(2)
    expect(rparen.length).toBe(2)
  })

  it("tokenizes inline comment in collection — lands in groups.comments", () => {
    const result = collectionLexer.tokenize("/* inline */")
    expect(result.errors.length).toBe(0)
    expect(result.tokens.length).toBe(0)
    expect(result.groups["comments"].length).toBe(1)
  })

  it("tokenizes multiple values in sequence", () => {
    const result = collectionLexer.tokenize(".ENUMVAL.,.T.,1.5,$,*")
    expect(result.errors.length).toBe(0)
    // .ENUMVAL., comma, .T., comma, 1.5, comma, $, comma, *
    expect(result.tokens.length).toBe(9)
  })
})

// ─── DateTime token ──────────────────────────────────────────────────────────

describe("Lexer — DateTime token", () => {
  it("tokenizes a datetime string as DateTime", () => {
    const result = collectionLexer.tokenize("'2016-02-04T08:47:55'")
    expect(result.errors.length).toBe(0)
    expect(tokenMatcher(result.tokens[0], DateTime)).toBe(true)
    expect(result.tokens[0].image).toBe("'2016-02-04T08:47:55'")
  })

  it("DateTime takes priority over AnyString for the same input", () => {
    const result = collectionLexer.tokenize("'2016-02-04T08:47:55'")
    expect(tokenMatcher(result.tokens[0], DateTime)).toBe(true)
    expect(tokenMatcher(result.tokens[0], AnyString)).toBe(false)
  })

  it("non-datetime single-quoted string still tokenizes as AnyString", () => {
    const result = collectionLexer.tokenize("'not-a-datetime'")
    expect(result.errors.length).toBe(0)
    expect(tokenMatcher(result.tokens[0], AnyString)).toBe(true)
  })

  it("FILE_NAME_IFC with datetime header lexes with zero errors", () => {
    const result = fileLexer.tokenize(FILE_NAME_IFC)
    expect(result.errors.length).toBe(0)
  })

  it("datetime in FILE_NAME_IFC lands as DateTime token (not AnyString)", () => {
    const result = fileLexer.tokenize(FILE_NAME_IFC)
    const datetimeToken = result.tokens.find(t => tokenMatcher(t, DateTime))
    expect(datetimeToken).toBeDefined()
    expect(datetimeToken!.image).toBe("'2016-02-04T08:47:55'")
  })
})

// ─── comment handling ────────────────────────────────────────────────────────

describe("Lexer — comment handling", () => {
  it("block comment lands in groups.comments, not in tokens", () => {
    const result = sectionLexer.tokenize("/* a comment */")
    expect(result.tokens.length).toBe(0)
    expect(result.groups["comments"].length).toBe(1)
  })

  it("multi-asterisk comment /*** ... ***/ is handled", () => {
    const result = sectionLexer.tokenize("/***\nSome multiline comment\n***/")
    expect(result.errors.length).toBe(0)
    expect(result.groups["comments"].length).toBe(1)
  })

  it("FULL_IFC lexes with zero errors despite multiple comments", () => {
    const result = fileLexer.tokenize(FULL_IFC)
    expect(result.errors.length).toBe(0)
  })

  it("COMMENT_IFC lexes with zero errors", () => {
    const result = fileLexer.tokenize(COMMENT_IFC)
    expect(result.errors.length).toBe(0)
  })

  it("comments from FULL_IFC all land in groups.comments", () => {
    const result = fileLexer.tokenize(FULL_IFC)
    // FULL_IFC has comments in header and data sections
    expect(result.groups["comments"].length).toBeGreaterThan(0)
    result.groups["comments"].forEach((tok: any) => {
      expect(tokenMatcher(tok, Comment)).toBe(true)
    })
  })
})

// ─── error cases ─────────────────────────────────────────────────────────────

describe("Lexer — error cases", () => {
  it("reports lex error for unexpected character @ in fileMode", () => {
    const result = fileLexer.tokenize("@")
    expect(result.errors.length).toBeGreaterThan(0)
  })

  it("still returns partial tokens when input has errors", () => {
    const result = fileLexer.tokenize("ISO-10303-21;@")
    expect(result.errors.length).toBeGreaterThan(0)
    // The valid prefix was still tokenized
    expect(result.tokens.length).toBeGreaterThan(0)
    expect(tokenMatcher(result.tokens[0], IsoStartTag)).toBe(true)
  })

  it("empty string produces zero tokens and zero errors", () => {
    const result = fileLexer.tokenize("")
    expect(result.errors.length).toBe(0)
    expect(result.tokens.length).toBe(0)
  })
})

// ─── tokenMatcher utility ────────────────────────────────────────────────────

describe("Lexer — tokenMatcher", () => {
  it("returns true when token matches its declared type", () => {
    const result = fileLexer.tokenize("ISO-10303-21;")
    expect(tokenMatcher(result.tokens[0], IsoStartTag)).toBe(true)
  })

  it("returns false when token does not match a different type", () => {
    const result = fileLexer.tokenize("ISO-10303-21;")
    expect(tokenMatcher(result.tokens[0], IsoEndTag)).toBe(false)
  })
})

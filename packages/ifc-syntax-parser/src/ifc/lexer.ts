import { createToken, IMultiModeLexerDefinition, Lexer } from "chevrotain"

export const LParen = createToken({
  name: "LParen",
  pattern: /\(/,
  push_mode: "collectionMode"
})
export const RParen = createToken({
  name: "RParen",
  pattern: /\)/,
  pop_mode: true
})

export const Comma = createToken({ name: "Comma", pattern: /,/ })
export const DotComma = createToken({ name: "DotComma", pattern: /;/ })
export const Equal = createToken({ name: "Equal", pattern: /\=/ })

export const Comment = createToken({
  name: "Comment",
  pattern: /\/\*+[\s\S]*?\*+\//,
  group: "comments"
})

export const WhiteSpace = createToken({
  name: "WhiteSpace",
  pattern: /[ \t\r\n\u000c]+/,
  group: Lexer.SKIPPED
})

export const AnyString = createToken({ name: "AnyString", pattern: /\'.*?\'/ })

export const Undefined = createToken({ name: "Undefined", pattern: /[$]/ })

export const TypeRef = createToken({
  name: "TypeRef",
  pattern: /[A-Z][A-Z0-9_]*/
})

export const StringLiteral = createToken({
  name: "StringLiteral",
  pattern: /"(?:[^\\"]|\\(?:[bfnrtv"\\/]|u[0-9a-fA-F]{4}))*"/
})

export const IsoStartTag = createToken({
  name: "IsoStartTag",
  pattern: /ISO-\d{5}-\d{2}/
})
export const IsoEndTag = createToken({
  name: "IsoEndTag",
  pattern: /END-ISO-\d{5}-\d{2}/
})

export const EndTag = createToken({
  name: "EndTag",
  pattern: /ENDSEC/,
  pop_mode: true
})
export const DataTag = createToken({
  name: "DataTag",
  pattern: /DATA/,
  push_mode: "sectionMode"
})

export const HeaderTag = createToken({
  name: "HeaderTag",
  pattern: /HEADER/,
  push_mode: "sectionMode"
})
// TODO: Missing file description, name and schema, not sure if really necessary.

export const RealLiteral = createToken({
  name: "RealLiteral",
  pattern: /-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?/
})

export const EnumValue = createToken({
  name: "EnumValue",
  pattern: /\.[A-Z][A-Z0-9_]*\./
})

export const LogicalBool = createToken({
  name: "LogicalBool",
  pattern: /\.[TFU]\./
})

export const Derived = createToken({ name: "Derived", pattern: /\*/ })

export const DateTime = createToken({
  name: "DateTime",
  pattern: /'[0-9]+\-[0-9]+\-[0-9]+T[0-9]+\:[0-9]+\:[0-9]+'/
})

export const Id = createToken({
  name: "Id",
  pattern: /#\d+/
})

export const Word = createToken({
  name: "Word",
  pattern: /[\w\d]+/
})

const fileMode = [
  IsoStartTag,
  IsoEndTag,
  HeaderTag,
  DataTag,
  DotComma,
  WhiteSpace
]

const sectionMode = [
  WhiteSpace,
  Id,
  Equal,
  EndTag,
  TypeRef,
  Comment,
  LParen,
  DotComma
]

const collectionMode = [
  WhiteSpace,
  Id,
  EndTag,
  EnumValue,
  TypeRef,
  RealLiteral,
  StringLiteral,
  Comment,
  AnyString,
  DateTime,
  Derived,
  LogicalBool,
  Word,
  LParen,
  RParen,
  Undefined,
  Comma,
  DotComma
]

export const allTokens: IMultiModeLexerDefinition = {
  modes: {
    fileMode,
    sectionMode,
    collectionMode
  },
  defaultMode: "fileMode"
}

export const lexerInstance = new Lexer(allTokens, {
  positionTracking: "onlyOffset"
})

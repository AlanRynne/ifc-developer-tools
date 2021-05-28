import { CstParser, CstNode } from "chevrotain"
import * as lexer from "./lexer"
import { debuglog } from "util"

type ParserRule = (idx?: number, ...args: any[]) => CstNode

export class IfcParser extends CstParser {
  /** Parses an entire IFC file */
  public ifc: ParserRule

  /** Parses an IFC file header section*/
  public header: ParserRule

  /** Parses an IFC file data section*/
  public data: ParserRule

  /** Parses an IFC instance */
  public instance: ParserRule

  private isoStart: ParserRule
  private isoEnd: ParserRule
  private headerTag: ParserRule
  private headerInstance: ParserRule
  private headerValue: ParserRule
  private dataTag: ParserRule
  private endTag: ParserRule
  private collection: ParserRule
  private collectionValue: ParserRule
  private entity: ParserRule
  private parameter: ParserRule

  // OR rule optimization props
  private colValueOr: any = undefined
  private paramOr: any = undefined
  private headValueOr: any = undefined

  constructor() {
    super(lexer.allTokens, {
      // by default the error recovery / fault tolerance capabilities are disabled
      recoveryEnabled: true,
      nodeLocationTracking: "full",
      dynamicTokensEnabled: false
    })

    //#region Main file sections

    this.RULE("ifc", () => {
      this.SUBRULE(this.isoStart)
      this.SUBRULE2(this.header)
      this.SUBRULE3(this.data)
      this.SUBRULE4(this.isoEnd)
    })

    this.RULE("header", () => {
      this.SUBRULE(this.headerTag)
      this.MANY(() => {
        this.SUBRULE2(this.headerInstance)
      })
      this.SUBRULE3(this.endTag)
    })

    this.RULE("data", () => {
      this.SUBRULE(this.dataTag)
      this.MANY(() => {
        this.SUBRULE2(this.instance)
      })
      this.SUBRULE3(this.endTag)
    })

    //#endregion

    //#region Tags

    this.RULE("isoStart", () => {
      this.CONSUME(lexer.IsoStartTag)
      this.CONSUME(lexer.DotComma)
    })

    this.RULE("isoEnd", () => {
      this.CONSUME(lexer.IsoEndTag)
      this.CONSUME(lexer.DotComma)
    })

    this.RULE("headerTag", () => {
      this.CONSUME(lexer.HeaderTag)
      this.CONSUME(lexer.DotComma)
    })

    this.RULE("dataTag", () => {
      this.CONSUME(lexer.DataTag)
      this.CONSUME(lexer.DotComma)
    })

    this.RULE("endTag", () => {
      this.CONSUME(lexer.EndTag)
      this.CONSUME(lexer.DotComma)
    })

    //#endregion
    this.RULE("headerInstance", () => {
      this.CONSUME(lexer.TypeRef)
      this.CONSUME(lexer.LParen)
      this.SUBRULE(this.headerValue)
      this.MANY(() => {
        this.CONSUME(lexer.Comma)
        this.SUBRULE2(this.headerValue)
      })
      this.CONSUME(lexer.RParen)
      this.CONSUME(lexer.DotComma)
    })

    this.RULE("headerValue", () => {
      this.OR(
        this.headValueOr ||
          (this.headValueOr = [
            { ALT: () => this.SUBRULE(this.collection) },
            { ALT: () => this.CONSUME(lexer.Undefined) },
            { ALT: () => this.CONSUME(lexer.AnyString) }
          ])
      )
    })

    this.RULE("instance", () => {
      this.CONSUME(lexer.Id)
      this.CONSUME(lexer.Equal)
      this.SUBRULE(this.entity)
      this.CONSUME(lexer.DotComma)
    })

    this.RULE("collection", () => {
      this.CONSUME(lexer.LParen)
      this.OPTION(() => {
        this.SUBRULE(this.collectionValue)
        this.MANY(() => {
          this.CONSUME(lexer.Comma)
          this.SUBRULE2(this.collectionValue)
        })
      })
      this.CONSUME(lexer.RParen)
    })

    this.RULE("collectionValue", () => {
      this.OR(
        this.colValueOr ||
          (this.colValueOr = [
            { ALT: () => this.SUBRULE(this.collection) },
            { ALT: () => this.SUBRULE(this.entity) },
            { ALT: () => this.CONSUME(lexer.RealLiteral) },
            { ALT: () => this.CONSUME(lexer.StringLiteral) },
            { ALT: () => this.CONSUME(lexer.AnyString) },
            { ALT: () => this.CONSUME(lexer.Id) },
            { ALT: () => this.CONSUME(lexer.Undefined) }
          ])
      )
    })

    this.RULE("entity", () => {
      this.CONSUME(lexer.TypeRef)
      this.CONSUME(lexer.LParen)
      this.OPTION(() => {
        this.SUBRULE(this.parameter)
        this.MANY(() => {
          this.CONSUME(lexer.Comma)
          this.SUBRULE2(this.parameter)
        })
      })
      this.CONSUME(lexer.RParen)
    })

    this.RULE("parameter", () => {
      this.OR(
        this.paramOr ||
          (this.paramOr = [
            { ALT: () => this.SUBRULE(this.entity) },
            { ALT: () => this.SUBRULE(this.collection) },
            { ALT: () => this.CONSUME(lexer.StringLiteral) },
            { ALT: () => this.CONSUME(lexer.Undefined) },
            { ALT: () => this.CONSUME(lexer.Derived) },
            { ALT: () => this.CONSUME(lexer.EnumValue) },
            { ALT: () => this.CONSUME(lexer.LogicalBool) },
            { ALT: () => this.CONSUME(lexer.RealLiteral) },
            { ALT: () => this.CONSUME(lexer.AnyString) },
            { ALT: () => this.CONSUME(lexer.Id) }
          ])
      )
    })

    this.performSelfAnalysis()
  }
}

export const parser = new IfcParser()

// ----------------- wrapping it all together -----------------

export function parse(text: string) {
  // tokenize input text
  const lexResult = lexer.IfcLexer.tokenize(text)

  // setting a new input will RESET the parser instance's state.
  parser.input = lexResult.tokens

  // any top level rule may be used as an entry point
  const cst = parser.ifc()

  return {
    cst: cst,
    lexErrors: lexResult.errors,
    parseErrors: parser.errors
  }
}

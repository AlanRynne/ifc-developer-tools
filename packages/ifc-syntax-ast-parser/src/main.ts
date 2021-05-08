import ifcGrammar from "./grammar/ifc" // Nearley generated file, not commited to source code!!
import * as nearley from "nearley"
import { ASTNode } from "./ast"
import { DocumentNode } from "./ast/nodes"
import {
  ASTDefinitionVisitor,
  ASTPositionVisitor
} from "./ast/visitor/ASTVisitor"
import { debug } from "console"

// The compiled nearley grammar
export default ifcGrammar

export class Ifc2AstConfig {
  maxLineLength: number

  constructor() {
    this.maxLineLength = 10000
  }
}

// The class that does all the heavy lifting.
export class Ifc2Ast {
  private lastState: any
  private parser: any
  public config: Ifc2AstConfig

  constructor(config: Ifc2AstConfig = new Ifc2AstConfig()) {
    this.config = config
    this.reset()
  }

  public reset() {
    this.lastState = null
    this.parser = new nearley.Parser(ifcGrammar, { keepHistory: false })
  }

  public parseIfcFile(
    lines: string[],
    addTrailingNewLine: boolean,
    onError?: (err: any) => void
  ) {
    return new Promise<ASTNode>((resolve, reject) => {
      try {
        let lineNum = 0
        lines.forEach(line => {
          lineNum += 1

          try {
            if (line.length > this.config.maxLineLength) {
              // Report skipped line
              if (onError)
                onError({
                  type: "long",
                  value: `Line ${lineNum} is too long to be parsed`,
                  text: line,
                  offset: 0,
                  lineBreaks: 1,
                  line: lineNum,
                  col: 1,
                  toString: () => `Line ${lineNum} is too long to be parsed`
                })
              return
            }
            let txt = addTrailingNewLine ? line + "\n" : line
            this.parser.feed(txt)
            this.lastState = this.parser.save()
          } catch (error) {
            if (onError) onError(error)
            var state = this.lastState
            this.reset()
            this.lastState = state
            this.lastState.lexerState.line++
            this.parser.restore(this.lastState)
          }
        }, this)
        resolve(this.parser.results[0])
      } catch (error) {
        // Something unexpected happened!
        reject(error)
      }
    })
  }
}

export const DefinitionVisitor = ASTDefinitionVisitor
export const PositionVisitor = ASTPositionVisitor

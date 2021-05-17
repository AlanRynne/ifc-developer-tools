import * as ifcParserModule from "./ifc"
import * as ifcLexerModule from "./ifc/lexer"
import * as ifcActions from "./actions"

export default {
  ...ifcParserModule,
  ...ifcLexerModule,
  ...ifcActions
}

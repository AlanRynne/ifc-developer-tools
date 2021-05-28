import {parse} from "../ifc"
import {BaseIFCVisitor} from "./BaseIFCVisitor"
import {CstNode, CstNodeLocation} from "chevrotain"

interface Position {
  line: number
  character: number
}

export class PositionVisitor extends BaseIFCVisitor {
  constructor() {
    super()
    this.validateVisitor()
  }

  visit(cstNode: CstNode | CstNode[], pos?: any): any {
    var nodeLoc = cstNode["location"];
    if (nodeLoc) {
      if (isInsideNode(pos, nodeLoc)) {
        var visitResult = super.visit(cstNode, pos)
        return visitResult ? {...visitResult, location: nodeLoc} : cstNode
      }
    }
    else {
      return super.visit(cstNode, pos)
    }
  }

  ifc(ctx: any, pos: Position) {
    var head = this.visit(ctx.header[0], pos)
    if(head) return head
    var data = this.visit(ctx.data[0], pos)
    if(data) return data
  }

  data(ctx: any, pos: any) {
    // Return undefined if no matching token is found
    return undefined
  }

  header(ctx: any, pos: Position) {
    for (let i = 0; i < ctx.headerInstance.length; i++) {
      var res = this.visit(ctx.headerInstance[i], pos)
      if(res)
        return res;
    }
    // Return undefined if no matching token is found
    return undefined
  }

  headerInstance(ctx: any, pos: Position) {
    return undefined
  }

  headerValue(ctx: any) {
    return undefined
  }

  instance(ctx: any) {
    return {
      id: ctx.Id[0].image,
      entity: this.visit(ctx.entity)
    }
  }

  entity(ctx: any) {
    var ent = {
      name: ctx.TypeRef[0].image,
      parameter: ctx.parameter.map(p => this.visit(p))
    }
    return ent
  }

  parameter(ctx: any) {
    return undefined
  }

  collectionValue(ctx: any) {
    var value = Object.values(ctx).map((val: any) => {
      return val[0]
    })
    if (value.length > 1)
      throw Error("Collection value had more than one value.")
    return value[0]
  }
}

export const positionVisitor = new PositionVisitor()

export function searchAtPosition(inputText: string, line: number, char: number) {
  const result = parse(inputText)
  var pos: Position = {
    line: line,
    character: char
  }
  const defs = positionVisitor.visit(result.cst, pos)
  return defs
}

function isBetweenNodes(pos: Position, loc1: CstNodeLocation, loc2: CstNodeLocation) {
  return isInsideNode(pos, joinLocations(loc1, loc2))
}

function isInsideNode(pos: Position, nodeLoc: CstNodeLocation): boolean {
  var pastStart = pos.line > nodeLoc.startLine || (pos.line == nodeLoc.startLine && pos.character >= nodeLoc.startColumn)
  var beforeEnd = pos.line < nodeLoc.endLine || (pos.line == nodeLoc.endLine && pos.character <= nodeLoc.endColumn)
  return pastStart && beforeEnd
}

function joinLocations(loc1: CstNodeLocation, loc2: CstNodeLocation): CstNodeLocation {
  var {startOffset, startLine, startColumn} = loc1.startOffset < loc2.startOffset ? loc1 : loc2
  var {endOffset, endLine, endColumn} = loc1.endOffset > loc2.endOffset ? loc1 : loc2
  return {
    startOffset,
    startLine,
    startColumn,
    endOffset,
    endLine,
    endColumn
  }
}
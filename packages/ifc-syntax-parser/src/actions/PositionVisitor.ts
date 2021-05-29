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

  visit(cstNode: CstNode | CstNode[] | CstNodeLocation, pos?: any): any {
    if (cstNode["tokenTypeIdx"]){
      // Node is a token, shares location fields with CSTNodeLocation
      if(isInsideNode(pos, cstNode as CstNodeLocation)){
        return cstNode
      }
    }
    else if (cstNode["location"]) {
      // Node is an actual CSTNode
      var node = cstNode as CstNode
      if (isInsideNode(pos, node.location)) {
        var result = super.visit(node, pos)
        return result
      }
    }
    else if(cstNode["length"]) {
      // Is array, iterate through objects and visit individually
      // Return when any match is found
      var array = cstNode as CstNode[]
      for (const node of array) {
        if(isInsideNode(pos, node.location)) {
          var result = this.visit(node, pos)
          if (result)
            return result
        }
      }
    }
  }

  ifc(ctx: any, pos: Position) {
    var head = this.visit(ctx.header[0], pos)
    if(head) return head
    var data = this.visit(ctx.data[0], pos)
    if(data) return data
  }

  data(ctx: any, pos: Position) {
    // Return undefined if no matching token is found
    return this.visit(ctx.instance, pos)
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
    if(isInsideNode(pos, ctx.TypeRef[0]))
      return ctx.TypeRef[0]
    for (let i = 0; i < ctx.headerValue.length; i++) {
      var val = this.visit(ctx.headerValue[i],pos)
      if(val)
        return val
    }
    return undefined
  }

  headerValue(ctx: any, pos: Position) {
    if(ctx.collection) {
      var colResult = this.visit(ctx.collection, pos)
      if(colResult)
        return colResult
    }
    return undefined
  }

  instance(ctx: any, pos: Position) {
    return this.visit(ctx.Id[0], pos) || this.visit(ctx.entity, pos)
  }

  entity(ctx: any, pos: Position) {
    return this.visit(ctx.TypeRef[0], pos)
      || this.visit(ctx.parameter, pos)
  }

  parameter(ctx: any, pos: Position) {
    // Each ctx in parameter should only ever have one key/value pair, and we're only interested in it's value
    return this.visit(Object.values(ctx)[0][0] as any, pos)
  }

  collection(ctx: any, pos: Position){
    var res = this.visit(ctx.collectionValue, pos)
    return res
  }

  collectionValue(ctx: any, pos: Position) {
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
  if(!pos || !nodeLoc) return false
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
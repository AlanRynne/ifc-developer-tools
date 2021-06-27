import { parse } from "../ifc"
import { BaseIFCVisitor } from "./BaseIFCVisitor"

export class IfcDefinitionVisitor extends BaseIFCVisitor {
  constructor() {
    super()
    this.validateVisitor()
  }

  ifc(ctx: any) {
    var header = this.visit(ctx.header)
    var data = this.visit(ctx.data)
    return {
      header,
      data
    }
  }

  data(ctx: any) {
    var children = []
    ctx.instance.forEach((instance: any) => {
      var i = this.visit(instance)
      children.push(i)
    })
    return {
      name: "data",
      location: {
        startLine: ctx.dataTag[0].location.startLine,
        startColumn: ctx.dataTag[0].location.startColumn,
        endLine: ctx.endTag[0].location.endLine,
        endColumn: ctx.endTag[0].location.endColumn
      },
      children
    }
  }

  header(ctx: any) {
    var headerData = []
    ctx.headerInstance.forEach(i => headerData.push(this.visit(i)))
    return {
      name: "header",
      location: {
        startLine: ctx.headerTag[0].location.startLine,
        startColumn: ctx.headerTag[0].location.startColumn,
        endLine: ctx.endTag[0].location.endLine,
        endColumn: ctx.endTag[0].location.endColumn
      },
      children: headerData
    }
  }
  headerInstance(ctx: any) {
    return {
      name: ctx.TypeRef[0].image,
      location: {
        startLine: ctx.TypeRef[0].startLine,
        startColumn: ctx.TypeRef[0].startColumn,
        endLine: ctx.DotComma[0].endLine,
        endColumn: ctx.DotComma[0].endColumn
      }
    }
  }
  headerValue(ctx: any) {
    return ctx
  }

  instance(ctx: any) {
    return {
      id: ctx.Id[0].image,
      name: this.visit(ctx.entity).name,
      location: {
        startLine: ctx.Id[0].startLine,
        startColumn: ctx.Id[0].startColumn,
        endLine: ctx.DotComma[0].endLine,
        endColumn: ctx.DotComma[0].endColumn
      }
    }
  }

  entity(ctx: any) {
    var ent = {
      name: ctx.TypeRef[0].image
    }
    return ent
  }

  // parameter(ctx: any) {
  //   var param = (Object.values(ctx)[0] as any)[0]
  //   if (param?.name == "collection") {
  //     return param.children.collectionValue?.map(v => this.visit(v)) ?? []
  //   } else if (param?.name == "entity") {
  //     return this.visit(param)
  //   }

  //   delete param.tokenType
  //   return param
  // }

  // collectionValue(ctx: any) {
  //   var value = Object.values(ctx).map((val: any) => {
  //     return val[0]
  //   })
  //   if (value.length > 1)
  //     throw Error("Collection value had more than one value.")
  //   return value[0]
  // }
}

export const definitionVisitor = new IfcDefinitionVisitor()

export function toAst(inputText: string) {
  const result = parse(inputText)
  const defs = definitionVisitor.visit(result.cst)
  return defs
}

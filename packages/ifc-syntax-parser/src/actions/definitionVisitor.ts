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
      type: "ifc",
      version: "",
      header,
      data
    }
  }

  data(ctx: any) {
    var entities = {}
    ctx.instance.forEach((instance: any) => {
      var i = this.visit(instance)
      entities[i.id] = i.entity
    })
    return entities
  }

  header(ctx: any) {
    var headerData = ctx.headerInstance.map(i => this.visit(i))
    return {
      type: "header",
      ...headerData
    }
  }
  headerInstance(ctx: any) {
    return {
      name: ctx.TypeRef[0].image,
      value: ctx.headerValue.map(h => this.visit(h))
    }
  }
  headerValue(ctx: any) {
    return ctx
  }

  instance(ctx: any) {
    return {
      id: ctx.Id[0].image,
      entity: this.visit(ctx.entity)
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

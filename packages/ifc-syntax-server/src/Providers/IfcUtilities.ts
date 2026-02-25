import { CstNode, IToken } from "chevrotain"

export function findEntityInSchema(schema, name: string) {
  return (
    caseInsensitiveKeyValue(schema.types, name) ||
    caseInsensitiveKeyValue(schema.entities, name) ||
    caseInsensitiveKeyValue(schema.functions, name) ||
    caseInsensitiveKeyValue(schema.rules, name) ||
    null
  )
}
function propsToText(
  props: any,
  propDocs: any,
  parentName: string,
  inheritMessage: boolean = false,
  ifcVersion: string
): string[] {
  if (!props) {
    return []
  }
  const inheritNotice = inheritMessage
    ? ` _(from ${createLink(parentName, ifcVersion)})_`
    : ""
  return Object.entries(props).map(([key, value]: [string, any]) => {
    const text =
      typeof value.type === "string"
        ? createLink(value.type, ifcVersion, true, false)
        : typeToText(value.type, ifcVersion)
    const doc = propDocs ? caseInsensitiveKeyValue(propDocs, key) : undefined
    return `_@param_ \`${key}\`: ${text}${inheritNotice} -> ${
      doc || "No description."
    }\n`
  })
}

function inversePropsToText(
  props: any,
  parentName: string,
  inheritMessage: boolean = false,
  ifcVersion: string
): string[] {
  if (!props) {
    return []
  }
  const inheritNotice = inheritMessage
    ? ` _(from ${createLink(parentName, ifcVersion)})_`
    : ""
  return Object.entries(props).map(([key, value]: [string, any]) => {
    const text =
      typeof value.type === "string"
        ? createLink(value.type, ifcVersion, true, false)
        : typeToText(value.type, ifcVersion)
    return `_@inverse_ \`${key}\`: ${text}${inheritNotice} for ${value.for}\n`
  })
}

function derivedPropsToText(
  props: any,
  parentName: string,
  inheritMessage: boolean = false,
  ifcVersion: string
): string[] {
  if (!props) {
    return []
  }
  const inheritNotice = inheritMessage
    ? ` _(from ${createLink(parentName, ifcVersion)})_`
    : ""
  return Object.entries(props).map(([key, value]: [string, any]) => {
    const text =
      typeof value.type === "string"
        ? createLink(value.type, ifcVersion, true, false)
        : typeToText(value.type, ifcVersion)
    return `_@derived_ \`${key}\`: ${text}${inheritNotice}\n`
  })
}
function typeToText(type: any, ifcVersion: string) {
  if (typeof type === "string") {
    return createLink(type, ifcVersion, true, false)
  }
  return `_${type.type}_ of ${typeToText(
    type.contains ?? type.type,
    ifcVersion
  )}`
}

function getInheritedPropText(schema, entity, name: string = null) {
  var docs = caseInsensitiveKeyValue(ifcDocs.entities, entity.name)
  let props = propsToText(
    entity.properties,
    docs?.attributes,
    entity.name,
    name !== null,
    schema.schema
  ).join("\n")
  if (!entity.supertype || entity.supertype === null) {
    return props
  }
  let parent = findEntityInSchema(schema, entity.supertype)
  let parentProps = getInheritedPropText(schema, parent, name || entity.name)
  return [parentProps, props].join("\n")
}

function getInheritedInverseText(schema, entity, name: string = null) {
  let props = inversePropsToText(
    entity.inverse,
    entity.name,
    name !== null,
    schema.schema
  ).join("\n")
  if (!entity.supertype || entity.supertype === null) {
    return props
  }
  let parent = findEntityInSchema(schema, entity.supertype)
  let parentProps = getInheritedInverseText(schema, parent, name || entity.name)
  return [parentProps, props].join("\n")
}

function getInheritedDerivedText(schema, entity, name: string = null) {
  let props = derivedPropsToText(
    entity.derived,
    entity.name,
    name !== null,
    schema.schema
  ).join("\n")
  if (!entity.supertype || entity.supertype === null) {
    return props
  }
  let parent = findEntityInSchema(schema, entity.supertype)
  let parentProps = getInheritedDerivedText(schema, parent, name || entity.name)
  return [parentProps, props].join("\n")
}

function getInheritedProps(schema, entity) {
  if (entity.supertype === null) {
    return entity.properties
  }
  let parent = findEntityInSchema(schema, entity.supertype)
  let props = getInheritedProps(schema, parent)
  return { ...props, ...entity.properties }
}

import ifcDocs from "../schemaDocs/ifc4x1docs.json"

export function entityDataToText(entity: any, version: string, schema: any) {
  let header = createLink(entity.name, schema.schema, true)
  let docs = caseInsensitiveKeyValue(ifcDocs.entities, entity.name)
  if (entity.supertype) {
    header += `: ${createLink(entity.supertype, schema.schema, false, true)}`
  }
  const type = `_${version}_`
  const description = docs.description.join("\n\n") || "No description found."
  let props = [],
    inverse = [],
    subtypes = ""
  if (entity.properties) props = getInheritedPropText(schema, entity)
  if (entity.inverse) inverse = getInheritedInverseText(schema, entity)
  //const derived = getInheritedDerivedText(schema, entity)
  if (entity.subtypes)
    subtypes =
      entity.subtypes === null
        ? "**Subtypes:** _None_"
        : "**Subtypes:**\n" +
          entity.subtypes
            .map(type => "- " + createLink(type, schema.schema))
            .join("\n")
  return [header + " — " + type, description, props, subtypes]
}

function createLink(
  entityName: any,
  schemaName: any,
  bold?: boolean,
  italic?: boolean
) {
  let mod = ""
  if (italic) {
    mod += "_"
  }
  if (bold) {
    mod += "**"
  }
  let url =
    "vscode://AlanRynne.ifc-syntax/docs?name=" +
    entityName +
    "&version=" +
    schemaName
  return `[${mod}${entityName}${mod.split("").reverse().join("")}](${url})`
}

function caseInsensitiveKeyValue(object: any, key: string) {
  const existingKey = Object.keys(object).find(
    schemaKey => schemaKey.toLowerCase() === key.toLowerCase()
  )
  if (existingKey) {
    return object[existingKey]
  }
}
export function getFileSchemaVersion(cst: CstNode): string | null {
  const headerCst = cst.children["header"]?.[0] as CstNode | undefined
  if (!headerCst) return null
  for (const inst of (headerCst.children["headerInstance"] ?? [])) {
    const instanceNode = inst as CstNode
    const typeRefImg = (instanceNode.children["TypeRef"]?.[0] as IToken | undefined)?.image
    if (typeRefImg !== "FILE_SCHEMA") continue
    for (const hv of (instanceNode.children["headerValue"] ?? [])) {
      const hvNode = hv as CstNode
      for (const col of (hvNode.children["collection"] ?? [])) {
        for (const cv of ((col as CstNode).children["collectionValue"] ?? [])) {
          const raw = ((cv as CstNode).children["AnyString"]?.[0] as IToken | undefined)?.image
          if (raw) return raw.replace(/'/g, '')
        }
      }
    }
  }
  return null
}

/** Walk the CST and return the deepest IToken whose offset range contains `offset`. */
export function findTokenAtOffset(node: CstNode, offset: number): IToken | null {
  for (const childKey of Object.keys(node.children)) {
    for (const child of node.children[childKey]) {
      if (!child) continue
      if ((child as any).name !== undefined) {
        const found = findTokenAtOffset(child as CstNode, offset)
        if (found) return found
      } else {
        const token = child as IToken
        const start = token.startOffset
        const end = token.endOffset !== undefined ? token.endOffset : token.startOffset + token.image.length - 1
        if (offset >= start && offset <= end) return token
      }
    }
  }
  return null
}

/** Find a TypeRef token (entity type name) at the given offset. */
export function findTypeRefAtOffset(cst: CstNode, offset: number): IToken | null {
  const token = findTokenAtOffset(cst, offset)
  return token?.tokenType?.name === "TypeRef" ? token : null
}

/** Find an Id token (#N reference) at the given offset. */
export function findIdAtOffset(cst: CstNode, offset: number): IToken | null {
  const token = findTokenAtOffset(cst, offset)
  return token?.tokenType?.name === "Id" ? token : null
}

/** Find the instance CstNode in the DATA section whose Id token image matches idImage (e.g. "#42"). */
export function findInstanceById(cst: CstNode, idImage: string): CstNode | null {
  const dataCst = cst.children["data"]?.[0] as CstNode | undefined
  if (!dataCst) return null
  for (const inst of (dataCst.children["instance"] ?? [])) {
    const instanceNode = inst as CstNode
    if ((instanceNode.children["Id"]?.[0] as IToken | undefined)?.image === idImage) {
      return instanceNode
    }
  }
  return null
}

import {
  DocumentNode,
  SectionNode
} from "@alanrynne/ifc-syntax-ast-parser/dist/ast/nodes"

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
  return {...props, ...entity.properties}
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

export function getFileSchemaVersion(doc: any) {
  let schemaObj = ((doc as DocumentNode)
    .sections[0] as SectionNode).children.find(
    item => (item as any).name === "FILE_SCHEMA"
  )
  let schema = (schemaObj as any).args[0].items[0].text
  return schema
}

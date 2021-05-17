import {
  ISchema,
  IType,
  IEntity,
  IFunction,
  IRule
} from "@alanrynne/ifc-syntax-express-parser"
import fs from "fs"
import { SchemaToCode, SchemaToCodeOptions, ExpressTypes } from "./index"

function findInSchema(name: string, schema: ISchema) {
  return (
    schema.types[name] ||
    schema.entities[name] ||
    schema.functions[name] ||
    schema.rules[name]
  )
}
function findKeyCaseInsensitive(key: string, obj: Object) {
  return Object.keys(obj).find(val => val.toLowerCase() === key.toLowerCase())
}

function findKeyInSchemaCaseInsensitive(name: string, schema: ISchema) {
  return (
    findKeyCaseInsensitive(name, schema.types) ||
    findKeyCaseInsensitive(name, schema.entities) ||
    findKeyCaseInsensitive(name, schema.functions) ||
    findKeyCaseInsensitive(name, schema.rules)
  )
}

function getDerivedProps(entity: IEntity, schema: ISchema, origin?: string) {
  if (entity.supertype) {
    const parent = findInSchema(entity.supertype, schema)
    const derived = getDerivedProps(parent, schema, origin || entity.name)
    return origin && entity.name !== origin
      ? Object.assign({}, derived, entity.properties)
      : Object.assign({}, derived)
  } else {
    if (origin && entity.name !== origin) return entity.properties || {}
    else return {}
  }
}

export class ifc2ts implements SchemaToCode {
  release: ISchema
  releaseDocs: any
  fileExt: string = ".ts"
  NOT_IMP = "throw new Error('Function not implemented yet')"
  IND = 4

  constructor(schema: ISchema, docs: any) {
    this.release = schema
    this.releaseDocs = docs
  }

  typeFromName(name: string) {
    if (
      Object.keys(this.release.entities).find(
        value => value.toLowerCase() === name.toLowerCase()
      )
    )
      return "entities"
    if (
      Object.keys(this.release.functions).find(
        value => value.toLowerCase() === name.toLowerCase()
      )
    )
      return "functions"
    if (
      Object.keys(this.release.rules).find(
        value => value.toLowerCase() === name.toLowerCase()
      )
    )
      return "rules"
    if (
      Object.keys(this.release.types).find(
        value => value.toLowerCase() === name.toLowerCase()
      )
    )
      return "types"
  }

  getFileHeader(entities: string[]): string {
    return [
      `// This file was generated automatically using "ifc-syntax-codegen"`,
      "//",
      `// Licensed under MIT by Alan Rynne`,
      `//`,
      `// Contains the following entities:`,
      `//    - ${entities.join("\n    - ")}`
    ].join("\n")
  }

  convert(rootFolder: string, opts?: SchemaToCodeOptions): Promise<void> {
    console.log(`Started typescript translation for ${this.release.schema}`)
    const baseUrl = `${rootFolder}${this.release.schema.toLowerCase()}-ts/`
    const srcUrl = baseUrl + "src/"
    return fs.promises
      .mkdir(srcUrl, { recursive: true })
      .then(() => {
        return Promise.all([
          this.extractKeyTo(srcUrl, "types", this.convertType.bind(this)),
          this.extractKeyTo(srcUrl, "entities", this.convertEntity.bind(this)),
          this.extractKeyTo(
            srcUrl,
            "functions",
            this.convertFunction.bind(this)
          ),
          this.extractKeyTo(srcUrl, "rules", this.convertRule.bind(this))
        ]).then(() => {
          const contents = [
            `export * as Rules from './rules'`,
            `export * as Types from './types'`,
            `export * as Functions from './functions'`,
            `export * as Entities from './entities'`
          ].join("\n\n")
          this.saveToFile(srcUrl + "index.ts", contents)
        })
      })
      .finally(() => {
        this.generatePackageFiles(baseUrl)
      })
  }

  extractKeyTo(
    baseUrl: string,
    input: string,
    converter: (map: any) => string
  ) {
    return fs.promises
      .mkdir(baseUrl + input + "/", { recursive: true })
      .catch(err => console.error("mkdir err", err))
      .then(() => {
        const keys = Object.keys(this.release[input])
        const index = keys
          .map(key => {
            let tsString = converter(this.release[input][key])
            this.saveToFile(
              baseUrl + input + `/${key}` + this.fileExt,
              tsString
            )
            return `export { default as ${key}} from './${key}'`
          })
          .join("\n\n")
        this.saveToFile(baseUrl + input + "/index" + this.fileExt, index)
        console.log(`-- ${input.toUpperCase()} SAVED --`)
      })
  }

  saveToFile(filePath: string, content: string): void {
    fs.writeFileSync(filePath, content)
  }

  tsImport(name, path = "./") {
    return `import { ${name} } from '${path}'`
  }

  convertType(type: IType): string {
    let moduleOut = `export default ${type.name}`
    let header = this.getFileHeader([type.name])
    let imports = {}
    let tsType = ""

    if (typeof type.type === "string") {
      tsType = `type ${type.name} = ${ExpressTypes[type.type] || type.type}`
      if (!ExpressTypes[type.type]) imports[type.type] = true
    } else if (type.type.type === "enum" || type.type.type === "select") {
      tsType = [
        `enum ${type.name} {`,
        `    ${type.type.values.join(",\n    ")}`,
        `}`
      ].join("\n")
    } else if (
      type.type.type === "ARRAY" ||
      type.type.type === "LIST" ||
      type.type.type === "SET"
    ) {
      if (!ExpressTypes[type.type.contains]) imports[type.type.contains] = true
      tsType = `type ${type.name} = ${
        ExpressTypes[type.type.contains] || type.type.contains
      }[]`
    } else if (typeof type.type.type === "string") {
      tsType = `type ${type.name} = ${
        ExpressTypes[type.type.type] || type.type.type
      }`
      if (!ExpressTypes[type.type.type]) imports[type.type.type] = true
    } else {
      console.log("unsupported type", type.type)
    }
    let importString = Object.keys(imports)
      .map(val => {
        let type = this.typeFromName(val)
        return this.tsImport(val, type === "types" ? "./" : `../${type}`)
      })
      .join("\n")

    return [header, importString, tsType, moduleOut].join("\n")
  }

  convertExpressType(value: any, onImport?: (name: string) => void): string {
    if (typeof value === "string") {
      // Either an express base type or an ifc type
      if (ExpressTypes[value]) return ExpressTypes[value]
      const fixedValue = findKeyInSchemaCaseInsensitive(value, this.release)
      if (value !== "T" && onImport) onImport(fixedValue)
      return fixedValue
    } else if (
      ["ARRAY", "SET", "LIST", "BAG"].find(val => val === value.type)
    ) {
      // If its type is any of the Express list types.
      const contains = this.convertExpressType(value.contains, onImport)
      return `Array<${contains}>`
    } else if (value.type) {
      // If it has a 'type' property, try to convert again.
      return this.convertExpressType(value.type, onImport)
    } else {
      // Any unsuported objets are 'any'
      return "any"
    }
  }

  convertEntity(entity: IEntity): string {
    let imports = {}

    let doc = this.releaseDocs.entities[entity.name.toLowerCase()]
    let docCmnt = doc
      ? "/** " + doc.description?.join("\n *\n * ") + "\n" + " */"
      : "/**  */"

    let props = this.convertProps(entity.properties, doc?.attributes, name => {
      if (entity.name != name)
        imports[findKeyInSchemaCaseInsensitive(name, this.release)] = true
    })

    let propStatement = props.length == 0 ? "" : props.join("\n")

    let inheritance = ""
    let constructor = this.createConstructor(entity, name => {
      if (entity.name != name)
        imports[findKeyInSchemaCaseInsensitive(name, this.release)] = true
    })

    if (entity.supertype) {
      inheritance = `extends ${entity.supertype}`
      imports[findKeyInSchemaCaseInsensitive(entity.supertype, this.release)] =
        true
    }
    const abs = entity.abstract ? "abstract" : ""
    const body = [
      `${abs} class ${entity.name} ${inheritance} {`,
      constructor,
      propStatement,
      `}`
    ].join("\n")

    const header = this.getFileHeader([entity.name])
    const importString = this.convertImports(imports, "entities")
    const exportStatement = `export default ${entity.name}`

    return [header, importString, docCmnt + "\n" + body, exportStatement].join(
      "\n\n"
    )
  }

  private createConstructor(
    entity: IEntity,
    onImport?: (name: string) => void
  ) {
    let inputs = entity.properties
      ? Object.keys(entity.properties).map(
          key =>
            `${key}:${this.convertExpressType(
              entity.properties[key].type,
              onImport
            )}`
        )
      : []

    // Body
    let derivedProps = getDerivedProps(entity, this.release)
    let derivedInputs = derivedProps
      ? Object.keys(derivedProps).map(
          key =>
            `${key}:${this.convertExpressType(
              derivedProps[key].type,
              onImport
            )}`
        )
      : []

    let superProps = derivedProps ? Object.keys(derivedProps).join(", ") : ""
    let superCall = entity.supertype
      ? this.ind(2) + "super(" + superProps + ")"
      : ""
    let propAssign = entity.properties
      ? Object.keys(entity.properties)
          .map(key => this.ind(2) + `this.${key} = ${key}`)
          .join("\n")
      : ""
    let body = [superCall, propAssign].join("\n")
    return [
      this.ind() +
        "constructor(" +
        [...derivedInputs, ...inputs].join(", ") +
        ") {",
      body,
      this.ind() + "}"
    ].join("\n")
  }

  ind(times: number = 1) {
    return " ".repeat(this.IND).repeat(times)
  }

  convertRule(rule: IRule): string {
    return [
      `function ${rule.name}() {`,

      `}`,
      `export default ${rule.name}`
    ].join("\n")
  }

  convertFunction(func: IFunction): string {
    let doc = this.releaseDocs.entities[func.name.toLowerCase()]
    let docCmnt = ""
    if (doc) {
      let description =
        doc.description.join("\n *\n * ") || "_Missing func descritption_"
      let docProps = Object.keys(doc.attributes)
        .map(key => {
          let val = doc.attributes[key][0] || "_Missing prop description_"
          return ` * @param ${key} — ${val}`
        })
        .join("\n")
      let cmnt = ["/**", " * " + description, " *", docProps, " */"].join("\n")
      docCmnt = cmnt
    } else {
      docCmnt = "/** IFC Documentation Missing */"
    }

    if (!doc) console.warn()
    let importList = {}
    const name = func.name
    const args = this.convertProps(func.arguments, undefined, importName => {
      if (importName && name !== importName) {
        importList[findKeyInSchemaCaseInsensitive(importName, this.release)] =
          true
      }
    }).join(", ")

    const header = this.getFileHeader([func.name])
    const importStatements = this.convertImports(importList, "functions")
    const funcBody = this.ind() + this.NOT_IMP
    const funcStatement = [
      `function ${name}(${args})`,
      `{`,
      funcBody,
      `}`
    ].join("\n")

    const exportStatement = `export default ${name}`
    return [
      header,
      importStatements,
      docCmnt + "\n" + funcStatement,
      exportStatement
    ].join("\n\n")
  }

  convertImports(importList: any, currentFolder: string) {
    var typesByPath = {}
    Object.keys(importList).forEach(val => {
      var type = this.typeFromName(val)
      var path = type === currentFolder ? "./" : `../${type}`
      if (!typesByPath[path]) typesByPath[path] = []
      typesByPath[path].push(val)
    })

    return Object.keys(typesByPath)
      .map(path => this.tsImport(typesByPath[path].join(", "), path))
      .join("\n")
  }

  convertProps(
    obj: any,
    docObj: any,
    onImport: (name: string) => void
  ): string[] {
    if (obj === undefined || obj === null) return []
    return Object.entries(obj).map(([key, value]: [string, any]) => {
      let prop = key + (value.optional ? "?" : "")
      let type = this.convertExpressType(value, onImport)

      let docCmnt = ""
      if (docObj !== undefined && docObj !== null) {
        docCmnt =
          this.ind() +
          "/** " +
          docObj[key]?.join("\n" + this.ind() + " * ") +
          `\n${this.ind()}*/`
      }
      let statement = `${prop}: ${type}`
      return docCmnt + "\n" + this.ind() + statement
    })
  }

  generatePackageFiles(path: string) {
    var pckg = JSON.parse(fs.readFileSync("./package.json").toString())
    const pkg: any = {
      name: `@alanrynne/${this.release.schema.toLowerCase()}.ts`,
      version: pckg.version,
      description: `${this.release.schema.toUpperCase()} Classes for Typescript. This package was autogenerated by 'IFC Dev Tools'`,
      main: "dist/index.js",
      types: "dist/index.d.ts",
      scripts: {
        build: "tsc -b",
        clean: "rm -rf ./dist && rm tsconfig.tsbuildinfo"
      },
      keywords: ["IFC", "Industry Foundation Classses", "AEC"],
      author: pckg.author,
      repository: pckg.repository,
      license: pckg.license,
      dependencies: {},
      devDependencies: {
        "@types/node": "^14.11.1",
        typescript: "^4.2.4"
      }
    }
    fs.writeFileSync(path + "package.json", JSON.stringify(pkg, null, 2))

    const tsConfig: any = {
      compilerOptions: {
        target: "ES2019",
        module: "commonjs",
        lib: ["ES2019"],
        allowJs: false,
        checkJs: false,
        declaration: true,
        sourceMap: true,
        outDir: "dist",
        rootDir: "src",
        strict: false,
        esModuleInterop: true,
        forceConsistentCasingInFileNames: true,
        resolveJsonModule: true
      },
      exclude: ["dist/**/*.ts"]
    }
    fs.writeFileSync(path + "tsconfig.json", JSON.stringify(tsConfig, null, 2))

    const readme = `
# ${this.release.schema} Typescript

This package holds all IFC classes corresponding to version *${this.release.schema}*.

It was auto-generated using \`ifc-syntax-codegen\`, part of the **IFC Developer Tools** developed by [Alan Rynne](https://github.com/alanrynne).

These package is currently **under development** and most of the IFC functions, rules and validation have no implementation. Pending future releases!
    `
    fs.writeFileSync(path + "readme.md", readme)
  }
}

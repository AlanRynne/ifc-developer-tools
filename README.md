# IFC Developer Tools

[![Node.js CI](https://github.com/AlanRynne/ifc-tools-monorepo/actions/workflows/node.js.yml/badge.svg)](https://github.com/AlanRynne/ifc-tools-monorepo/actions/workflows/node.js.yml)

The Home for the **IFC Developer Tools** code!

## Packages

| Package | Description | URL|
|---|---|:---:|
|`ifc-syntax-ast-parser`| Parse IFC files to AST + Visitors||
|`ifc-syntax-express-parser`| Parse Express files to JSON ||
|`ifc-syntax-server`| IFC Language Server||
|`ifc-syntax-vscode`| IFC VSCode Extension||
|`ifc-syntax-docgen`| IFC Documentation extractor to JSON ||
|`ifc-syntax-codegen`| IFC Code Generator ||

## Setup

This monorepo requires lerna being installed globally:

```
npm i -g lerna
```

Then run:

```
npm i
lerna bootstrap
```

## Build

To build **all** the packages, run:

```
lerna run build
```

## Testing

To test **all** the packages, run:

```
lerna run test
```

# Contributing

THIS REPO IS PRIVATE! YOU SHOULD NOT BE HERE!! 🤣🤣
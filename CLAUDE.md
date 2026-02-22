# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a Lerna monorepo containing TypeScript packages for parsing, serving, and editing IFC (Industry Foundation Classes) and EXPRESS schema files. The primary output is a VSCode extension with a language server.

## Setup

```bash
npm i -g lerna
npm i
lerna bootstrap
```

## Common Commands

```bash
# Build all packages
lerna run build

# Build a single package
lerna run build --scope=@alanrynne/ifc-syntax-parser

# Watch mode across all packages (rebuilds on file changes)
npm run lerna-watch

# Test (only ifc-syntax-parser uses vitest)
lerna run test --scope=@alanrynne/ifc-syntax-parser

# Run a single test file
cd packages/ifc-syntax-parser && npx vitest run src/ifc/files.single.spec.ts

# Lint dependency version consistency
npm run lint:dependency-versions
npm run lint:dependency-versions:fix

# Publish VSCode extension
cd packages/ifc-syntax-vscode && npm run publish:vsce

# Publish packages to GitHub Packages registry
lerna publish
```

## Architecture

### Package Dependency Chain

```
ifc-syntax-express-parser  (nearley grammar → parses .exp schema files)
        ↓
ifc-syntax-codegen         (generates TypeScript types from EXPRESS schema)
        ↓
ifc2x3-ts / ifc4x2-ts / ifc4x3_rc1-ts  (pre-generated IFC schema TS types)

ifc-syntax-parser          (chevrotain CST parser for .ifc files)
        ↓
ifc-syntax-server          (LSP server: completion, hover, go-to-def, validation)
        ↓
ifc-syntax-vscode          (VSCode extension, bundles the server)
```

### Key Packages

- **`ifc-syntax-parser`** — Core CST parser for `.ifc` files using [Chevrotain](https://chevrotain.io). Exports `parser`, `lexer`, and `actions`. Uses vitest for testing.

- **`ifc-syntax-express-parser`** — Parses EXPRESS schema files (`.exp`) using [nearley](https://nearley.js.org). The grammar lives in `src/grammar/` and must be compiled with `npm run build-grammar` before use.

- **`ifc-syntax-server`** — LSP server using `vscode-languageserver`. Provides completion, hover, go-to-definition, symbol listing, and validation. Communicates with the extension over IPC.

- **`ifc-syntax-vscode`** — VSCode extension entry point. Activates on `*.ifc` / `*.exp` workspaces, spawns the language server as a child process, and registers commands. TextMate grammars for syntax highlighting are in `syntaxes/`.

- **`ifc-syntax-codegen`** — Reads EXPRESS schemas and generates TypeScript class files. Private package, not published.

- **`ifc-syntax-docgen`** — Scrapes IFC documentation HTML and extracts JSON. Private package, not published.

- **`ifc-syntax-ast-parser`** — Legacy/deprecated predecessor to `ifc-syntax-parser`. Kept for backwards compatibility.

### TypeScript Configuration

The root `tsconfig.json` sets path aliases (`@alanrynne/*` → `packages/*/src`) for IDE completions only. Each package has its own `tsconfig.json` for actual builds (composite project references via `tsc -b`).

### IFC Format

IFC files use the STEP physical file format (ISO 10303-21). Structure:
```
ISO-10303-21;
HEADER; ... ENDSEC;
DATA;
  #1 = ENTITY_NAME(param1, param2, ...);
ENDSEC;
END-ISO-10303-21;
```

### EXPRESS Schema

EXPRESS (ISO 10303-11) is the schema language defining IFC entity types, attributes, rules, and functions. Example files are in `examples/express/`. The express parser outputs JSON objects with `ifcType` fields (`"entity"`, `"type"`, `"function"`, `"rule"`).

### Language Server Providers

All LSP feature providers live in `packages/ifc-syntax-server/src/Providers/`:
- `CompletionProvider.ts`
- `GoToDefinitionProvider.ts`
- `HoverProvider.ts`
- `SymbolProvider.ts`
- `ValidationProvider.ts`

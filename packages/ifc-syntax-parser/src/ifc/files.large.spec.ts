import fs from "fs"
import dir from "node-dir"
import path from "path"
import { parse } from "."
import { describe, it, expect, afterEach } from "vitest"

const inputDir = "../../examples/ifc/bigFiles"

// Full-CST parsing keeps the entire token array + tree in memory simultaneously.
// Files above this threshold require more RAM than a typical dev machine provides.
const MAX_FILE_SIZE_MB = 50

const allFiles = dir.files(inputDir, { sync: true })
const allIfcFiles = allFiles.filter(file => path.extname(file) === ".ifc")
const ifcFiles = allIfcFiles.filter(file => {
  const sizeMB = fs.statSync(file).size / 1024 / 1024
  if (sizeMB > MAX_FILE_SIZE_MB) {
    console.warn(`Skipping ${path.basename(file)} (${sizeMB.toFixed(0)} MB > ${MAX_FILE_SIZE_MB} MB limit)`)
    return false
  }
  return true
})

// Release memory between large-file tests. Requires --expose-gc (set in test:large script).
afterEach(() => {
  if (typeof global.gc === "function") global.gc()
})

describe("Large Files", () => {
  ifcFiles.forEach(filePath => {
    it(filePath, async () => {
      var contents = fs.readFileSync(filePath).toString()
      var result = parse(contents)

      if (result.lexErrors.length > 0) {
        console.error("Lex errors:", result.lexErrors.map(e => e.message))
      }
      if (result.parseErrors.length > 0) {
        console.error("Parse errors:", result.parseErrors.map(e =>
          `${e.message} | token: "${e.token?.image?.slice(0, 80)}"`
        ))
      }

      expect(result.cst.name).toBe("ifc")
      expect(result.lexErrors.length).toBe(0)
      expect(result.parseErrors.length).toBe(0)
    }, 120_000)
  })
})

import glob from "glob"
import { DocItem } from "./DocItem"
import ExtractEntityFromFile from "./ExtractEntityFromFile"

export default function GenerateIndex(version: string, dir: string) {
  return new Promise<any>((resolve, reject) => {
    const result: any = {
      version: version.toUpperCase(),
      entities: {},
      domains: {}
    }
    printProgress(`Started generating Docs for version ${result.version}}\n`)
    // Get all files in schema docs
    return glob(dir + "ifc*/lexical/*.htm", (err, files) => {
      if (err) reject(err)
      var count = files.length
      files.forEach((path, index) => {
        // Extract url data
        const parts = path.split("/")
        const category = parts[parts.length - 3]
        const filename = parts[parts.length - 1].split(".htm")[0]
        printProgress(
          `${Math.floor(
            ((index + 1) * 100) / count
          )}% — Processing ${filename}`,
          true
        )
        result.entities[filename] = {}
        if (!result.domains[category]) result.domains[category] = []
        result.domains[category].push(filename)
        try {
          const item: DocItem = ExtractEntityFromFile(path, filename)
          result.entities[filename] = item
        } catch (error) {
          console.error(error.message)
          result.entities[filename] = null
        }
      })
      printProgress("\nFinished generating Docs\n")
      resolve(result)
    })
  })
}

function printProgress(progress, clear = false) {
  if (clear) {
    process.stdout.clearLine(0)
    process.stdout.cursorTo(0)
  }
  process.stdout.write(progress)
}

import { getSchemaForRelease, IFCVersion, IfcReleases } from "."
import fs from "fs"
import { describe, it, expect } from "vitest"

describe("Get Schema for release", () => {
  Object.keys(IfcReleases).forEach(key => {
    it(key, async () => {
      let schema = await getSchemaForRelease(IFCVersion[key])
      const data = JSON.stringify(schema, null, 4)
      fs.writeFileSync("./results/" + key + ".json", data)
      //TODO: Pending real checks here!!!
      expect(schema).toEqual(expect.anything())
    })
  })
})

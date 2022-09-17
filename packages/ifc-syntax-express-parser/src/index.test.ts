import { ExpressParser, getSchemaForRelease, IFCVersion, IfcReleases } from "."
import fs from "fs"

// describe("Express Parser Tests", () => {
//   Object.keys(IfcReleases).forEach(key => {
//     it(key, async () => {
//       await new ExpressParser()
//         .parse(folder + IfcReleases[key])
//         .then(schema => {
//           const data = JSON.stringify(schema, null, 4)
//           fs.writeFileSync("results/" + key + ".json", data)
//           expect(schema).toEqual(expect.anything())
//         })
//     })
//   })
// })

describe("Get Schema for release", () => {
  it("test.exp", async () => {
    let schema = await new ExpressParser().parse("test.exp")
    const data = JSON.stringify(schema, null, 4)
    fs.writeFileSync("./results/" + "test" + ".json", data)
    //TODO: Pending real checks here!!!
    expect(schema).toEqual(expect.anything())
  })

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

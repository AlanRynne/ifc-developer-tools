import fs from "fs"
import { downloadAndExtract } from "./download"
import GenerateIndex from "./GenerateIndex"

const schemas = [
  {
    version: "ifc4x2",
    url:
      "http://standards.buildingsmart.org/IFC/DEV/IFC4_2/FINAL/IFC4_2-HTML.zip",
    zipPath: "HTML/schema/"
  },
  {
    version: "ifc4x1",
    url:
      "http://standards.buildingsmart.org/IFC/RELEASE/IFC4_1/FINAL/IFC4_1-Final-HTML.zip",
    zipPath: "IFC4_1/Final/HTML/schema/"
  },
  {
    version: "ifc4x3-rc1",
    url: "http://standards.buildingsmart.org/IFC/DEV/IFC4_3/RC2/4_3_RC2.zip",
    zipPath: "4_3_0_0/RC2/html/schema/"
  }
]

schemas.forEach(
  async schema =>
    await extractDocInfo(schema.version, schema.url, schema.zipPath)
)

async function extractDocInfo(version: string, url: string, zipPath: string) {
  var folder = `data/${version}/`
  var path = `${folder}${zipPath}`
  if (!fs.existsSync(folder)) {
    console.log("Downloading " + version)
    await downloadAndExtract(url, folder)
  }

  await GenerateIndex(version, path)
    .then((index: any) => {
      fs.writeFileSync(
        `out/${version}docs.json`,
        JSON.stringify(index, null, 4)
      )
    })
    .catch(err => {
      console.warn(err)
    })
}

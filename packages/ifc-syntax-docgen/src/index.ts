import fs from "fs"
import { downloadAndExtract } from "./download"
import GenerateIndex from "./GenerateIndex"

export async function extractDocInfo(
  version: string,
  downloadUrl: string,
  downloadPath: string,
  zipPath: string
) {
  // Set download folder and zipPath to read schema from
  var folder = `${downloadPath}/${version}/`
  var path = `${folder}${zipPath}`

  // Only download if the folder doesn't already exist
  if (!fs.existsSync(folder)) {
    console.log("Downloading " + version)
    await downloadAndExtract(downloadUrl, folder)
  }

  // Generate documentation JSON
  return await GenerateIndex(version, path)
}

const schemas = [
  {
    version: "ifc4x2",
    url: "http://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2_TC1/ifc4-add2-tc1.zip",
    zipPath: "ifc4-add2-tc1/html/schema/"
  },
  {
    version: "ifc4x3-rc1",
    url: "http://standards.buildingsmart.org/IFC/DEV/IFC4_3/RC2/4_3_RC2.zip",
    zipPath: "4_3_0_0/RC2/html/schema/"
  }
]

schemas.forEach(async schema => {
  // Extract
  let docJson = await extractDocInfo(
    schema.version,
    schema.url,
    "data",
    schema.zipPath
  )
  // Write docs to file
  fs.writeFileSync(
    `out/${schema.version}docs.json`,
    JSON.stringify(docJson, null, 4)
  )
})

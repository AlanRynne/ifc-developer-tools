import fs from "fs"
import cheerio from "cheerio"
import tokenizer from "sbd"
import { DocItem } from "./DocItem"

const sentOptions = {
  newline_boundaries: false,
  html_boundaries: false,
  sanitize: true,
  preserve_whitespace: false
}

export default function ExtractEntityFromFile(
  path: string,
  fileName: string
): DocItem {
  const content = fs.readFileSync(path)
  const $ = cheerio.load(content, {
    ignoreWhitespace: true,
    normalizeWhitespace: true
  })
  // GET document body
  const body = $("html body")
  body.children("script").remove()

  // Extract entity name
  const name = body.children("h4").text()
  if (!name) throw Error(`No name found on file: ${path}`)
  if (name.toLowerCase() !== fileName.toLowerCase())
    throw new Error(`${fileName}: Name '${name}' doesn't match`)

  let item: DocItem = {
    name,
    path: "https://standards.buildingsmart.org/IFC/DEV/IFC4_2/FINAL/" + path
  }
  body.find("section").each((index, section) => {
    const sec = $(section)
    const secTitle = sec.find("h5").text()
    if (secTitle.startsWith("Semantic definitions")) {
      let details = sec.find("details").first()
      let description = details.children("p").text().trim()
      let note = details
        .children("blockquote.note")
        .first()
        .text()
        .trim()
        .split(/\s*NOTE\s*/)
        .join(" ")

      const attributes: any = {}
      // Attribute descriptions
      let head: string[] = []
      sec
        .find("details table.attributes tr")
        .toArray()
        .forEach((element, index) => {
          let tr = $(element)
          if (index == 0) {
            head = tr
              .children("th")
              .toArray()
              .map(val => $(val).text())
          } else {
            let attrint: any = head.indexOf("Attribute")

            let typeInd = attrint === -1 ? 0 : attrint
            let descInd = head.indexOf("Description")
            let attr = tr
              .children("td")
              .toArray()
              .map(val => $(val).text()?.split("\n").join(" "))
            attributes[attr[typeInd]] = tokenizer.sentences(
              attr[descInd]?.split("NOTE").join(" ")
            )
          }
        })

      item.description = tokenizer.sentences(
        description?.split("\n").join(" "),
        sentOptions
      )
      item.note = tokenizer.sentences(note?.split("\n").join(""))

      item.attributes = attributes
    }
  })

  if (Object.keys(item).length === 0) {
    throw Error(`${fileName}: EMPTY ./` + path)
  }
  return item
}

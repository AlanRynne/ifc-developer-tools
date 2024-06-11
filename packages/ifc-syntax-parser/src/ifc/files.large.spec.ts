import fs from "fs"
import { parse } from "."
import { describe, it } from "vitest"
import { checkParseResult } from "../checkParseResult"

const inputDir = "../../examples/ifc/bigFiles/"

describe(
  "Large Files",
  () => {
    it("1604-SA65_EST.ifc", () => testFile(inputDir + "1604-SA65_EST.ifc"))
    it("20200820IFC4_Convenience_store_Renga_4.1.ifc", () =>
      testFile(inputDir + "20200820IFC4_Convenience_store_Renga_4.1.ifc"))
    it("Clinic_Architectural.ifc", () => testFile(inputDir + "Clinic_Architectural.ifc"))
    it("Clinic_Electrical.ifc", () => testFile(inputDir + "Clinic_Electrical.ifc"))
    it("Clinic_HVAC.ifc", () => testFile(inputDir + "Clinic_HVAC.ifc"))
    //it("Clinic_Plumbing.ifc", () => testFile(inputDir + "Clinic_Plumbing.ifc"))
    it("Clinic_Structural.ifc", () => testFile(inputDir + "Clinic_Structural.ifc"))
  },
  { skip: true }
)

const testFile = async filePath => {
  var contents = fs.readFileSync(filePath).toString()
  var result = parse(contents)
  checkParseResult(result, "ifc")
}

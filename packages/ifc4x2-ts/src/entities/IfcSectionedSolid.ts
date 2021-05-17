// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSectionedSolid

import { IfcCurve, IfcProfileDef, IfcSolidModel } from './'

/** An IfcSectionedSolid is an abstract base type for solids constructed by sweeping potentially variable cross sections along a directrix.
 */
abstract class IfcSectionedSolid extends IfcSolidModel {
    constructor(Directrix:IfcCurve, CrossSections:Array<IfcProfileDef>) {
        super()
        this.Directrix = Directrix
        this.CrossSections = CrossSections
    }
    /** The curve used to define the sweeping operation.
    */
    Directrix: IfcCurve
    /** List of cross sections in sequential order along the Directrix.
    */
    CrossSections: Array<IfcProfileDef>
}

export default IfcSectionedSolid
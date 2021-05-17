// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSweptAreaSolid

import { IfcProfileDef, IfcAxis2Placement3D, IfcSolidModel } from './'

/** An IfcSweptAreaSolid represents the 3D shape by a sweeping representation scheme allowing a two dimensional planar cross section to sweep through space
 *
 * The swept area is defined by a cross section, represented by a subtype if IfcProfileDef, that is provided as a closed two-dimensional boundary on an implicit plane.
 *
 * The swept area is defined in the xy plane of the object coordinate system.
 *
 * The sweeping operation is applied to the swept area as defined within the subtypes of IfcSweptAreaSolid, some subtypes require an implicit transformation of the swept area to the start position of the sweep.
 *
 * The optional Position coordinate system allows for re-positioning the resulting swept solid relative to the object coordinate system.
 */
abstract class IfcSweptAreaSolid extends IfcSolidModel {
    constructor(SweptArea:IfcProfileDef, Position:IfcAxis2Placement3D) {
        super()
        this.SweptArea = SweptArea
        this.Position = Position
    }
    /** The surface defining the area to be swept.
     * It is given as a profile definition within the xy plane of the position coordinate system.
    */
    SweptArea: IfcProfileDef
    /** Position coordinate system for the resulting swept solid of the sweeping operation.
     * The position coordinate system allows for re-positioning of the swept solid.
     * If not provided, the swept solid remains within the position as determined by the cross section or by the directrix used for the sweeping operation.
     * IFC4 CHANGE The attribute has been changed to OPTIONAL with upward compatibility for file-based exchange.
    */
    Position: IfcAxis2Placement3D
}

export default IfcSweptAreaSolid
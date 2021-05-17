// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSweptSurface

import { IfcProfileDef, IfcAxis2Placement3D, IfcSurface } from './'

/** An IfcSweptSurface is a surface defined by sweeping a curve.
 *
 * The swept surface is defined by a open or closed curve, represented by a subtype if IfcProfileDef, that is provided as a two-dimensional curve on an implicit plane, and by the sweeping operation.
 *
 * The optional Position coordinate system allows for re-positioning the resulting swept surface relative to the object coordinate system.
 */
abstract class IfcSweptSurface extends IfcSurface {
    constructor(SweptCurve:IfcProfileDef, Position:IfcAxis2Placement3D) {
        super()
        this.SweptCurve = SweptCurve
        this.Position = Position
    }
    /** The curve to be swept in defining the surface.
     * The curve is defined as a profile within the position coordinate system.
    */
    SweptCurve: IfcProfileDef
    /** Position coordinate system for the swept surface, provided by a profile definition within the XY plane of the Position coordinates.
     * If not provided, the position of the profile being swept is determined by the object coordinate system.
     * In this case, the swept surface is not repositioned.
     * IFC4 CHANGE The attribute has been changed to OPTIONAL with upward compatibility for file-based exchange.
    */
    Position: IfcAxis2Placement3D
}

export default IfcSweptSurface
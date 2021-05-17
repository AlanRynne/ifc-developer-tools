// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSurfaceOfRevolution

import { IfcAxis1Placement, IfcProfileDef, IfcAxis2Placement3D, IfcSweptSurface } from './'

/** The IfcSurfaceOfRevolution is a surface derived by rotating a curve about an axis.
 *
 * Informal Propositions:
 */
 class IfcSurfaceOfRevolution extends IfcSweptSurface {
    constructor(SweptCurve:IfcProfileDef, Position:IfcAxis2Placement3D, AxisPosition:IfcAxis1Placement) {
        super(SweptCurve, Position)
        this.AxisPosition = AxisPosition
    }
    /** A point on the axis of revolution and the direction of the axis of revolution.
    */
    AxisPosition: IfcAxis1Placement
}

export default IfcSurfaceOfRevolution
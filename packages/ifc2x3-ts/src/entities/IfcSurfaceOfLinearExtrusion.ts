// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSurfaceOfLinearExtrusion

import { IfcDirection, IfcProfileDef, IfcAxis2Placement3D, IfcSweptSurface } from './'
import { IfcLengthMeasure } from '../types'

/** The IfcSurfaceOfLinearExtrusion is a surface derived by sweeping a curve along a vector
 *
 * Informal Propositions:
 */
 class IfcSurfaceOfLinearExtrusion extends IfcSweptSurface {
    constructor(SweptCurve:IfcProfileDef, Position:IfcAxis2Placement3D, ExtrudedDirection:IfcDirection, Depth:IfcLengthMeasure) {
        super(SweptCurve, Position)
        this.ExtrudedDirection = ExtrudedDirection
        this.Depth = Depth
    }
    /** The direction of the extrusion.
    */
    ExtrudedDirection: IfcDirection
    /** The depth of the extrusion, it determines the parameterization.
    */
    Depth: IfcLengthMeasure
}

export default IfcSurfaceOfLinearExtrusion
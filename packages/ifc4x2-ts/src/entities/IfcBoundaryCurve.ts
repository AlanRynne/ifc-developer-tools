// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcBoundaryCurve

import { IfcCompositeCurveSegment, IfcCompositeCurveOnSurface } from './'
import { IfcLogical } from '../types'

/** An IfcBoundaryCurve defines a curve acting as the boundary of a surface.
 */
 class IfcBoundaryCurve extends IfcCompositeCurveOnSurface {
    constructor(Segments:Array<IfcCompositeCurveSegment>, SelfIntersect:IfcLogical) {
        super(Segments, SelfIntersect)

    }

}

export default IfcBoundaryCurve
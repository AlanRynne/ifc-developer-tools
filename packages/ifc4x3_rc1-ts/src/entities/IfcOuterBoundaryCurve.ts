// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcOuterBoundaryCurve

import { IfcCompositeCurveSegment, IfcBoundaryCurve } from './'
import { IfcLogical } from '../types'

/** The IfcOuterBoundaryCurve defines the outer boundary of a bounded surface.
 */
 class IfcOuterBoundaryCurve extends IfcBoundaryCurve {
    constructor(Segments:Array<IfcCompositeCurveSegment>, SelfIntersect:IfcLogical) {
        super(Segments, SelfIntersect)

    }

}

export default IfcOuterBoundaryCurve
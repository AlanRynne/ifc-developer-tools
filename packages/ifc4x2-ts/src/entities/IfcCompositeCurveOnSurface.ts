// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCompositeCurveOnSurface

import { IfcCompositeCurveSegment, IfcCompositeCurve } from './'
import { IfcLogical } from '../types'

/** The IfcCompositeCurveOnSurface is a collection of segments, based on p-curves.
 *
 * i.e. a curve which lies on the basis of a surface and is defined in the parameter space of that surface.
 *
 * The p-curve segment is a special type of a composite curve segment and shall only be used to bound a surface.
 */
 class IfcCompositeCurveOnSurface extends IfcCompositeCurve {
    constructor(Segments:Array<IfcCompositeCurveSegment>, SelfIntersect:IfcLogical) {
        super(Segments, SelfIntersect)

    }

}

export default IfcCompositeCurveOnSurface
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCompositeCurve

import { IfcCompositeCurveSegment, IfcBoundedCurve } from './'
import { IfcLogical } from '../types'

/** An IfcCompositeCurve is a continuous curve composed of curve segments
 *
 * Figure 371 illustrates an example of a composite curve
 *
 * Consider an IfcCompositeCurve having line segment and an arc segment.
 *
 * The line should be parameterized:The arch should be parameterized:Then the parameterization of the composite curve is: Informal Propositions:
 */
 class IfcCompositeCurve extends IfcBoundedCurve {
    constructor(Segments:Array<IfcCompositeCurveSegment>, SelfIntersect:IfcLogical) {
        super()
        this.Segments = Segments
        this.SelfIntersect = SelfIntersect
    }
    /** The component bounded curves, their transitions and senses.
     * The transition attribute for the last segment defines the transition between the end of the last segment and the start of the first; this transition attribute may take the value discontinuous, which indicates an open curve.
    */
    Segments: Array<IfcCompositeCurveSegment>
    /** Indication of whether the curve intersects itself or not; this is for information only.
    */
    SelfIntersect: IfcLogical
}

export default IfcCompositeCurve
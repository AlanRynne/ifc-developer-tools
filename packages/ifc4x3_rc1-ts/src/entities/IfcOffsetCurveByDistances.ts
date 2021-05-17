// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcOffsetCurveByDistances

import { IfcDistanceExpression, IfcCurve, IfcOffsetCurve } from './'
import { IfcLabel } from '../types'

/** An IfcOffsetCurveByDistances is a curve defined by a list of offsets along its BasisCurve.
 *
 * If only one offset is provided, it indicates a constant offset along the extents of the basis curve.
 *
 * Figure 377 illustrates eight instances of IfcOffsetCurveByDistances (in green) defined relative to an IfcAlignmentCurve (in blue).
 */
 class IfcOffsetCurveByDistances extends IfcOffsetCurve {
    constructor(BasisCurve:IfcCurve, OffsetValues:Array<IfcDistanceExpression>, Tag:IfcLabel) {
        super(BasisCurve)
        this.OffsetValues = OffsetValues
        this.Tag = Tag
    }
    /** List of sequential points described relative to the basis curve.
     * If the offsets do not span the full extent of the basis curve (e.g. if the list contains only one item), then the lateral and vertical offsets implicitly continue with the same value towards the head and tail of the basis curve.
    */
    OffsetValues: Array<IfcDistanceExpression>
    /** Optional identifier of the curve, which may be used to correlate points from a variable cross-section.
    */
    Tag?: IfcLabel
}

export default IfcOffsetCurveByDistances
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcAlignment2DHorizontalSegment

import { IfcCurveSegment2D, IfcAlignment2DSegment } from './'
import { IfcBoolean, IfcLabel } from '../types'

/** Individual segment along the IfcAlignment2DHorizontal, being defined in the x/y coordinate space.
 *
 * Each single horizontal alignment segment has an associated curve geometry.
 *
 * The following segment curve types are defined by the CurveGeometry:For each horizontal segment, the following non-redundant information is provided:The following information can be calculated (and is therefore not exchanged explicitly to avoid redundancy and inconsistencies)The following checks can be done to validate the correct exchange:
 */
 class IfcAlignment2DHorizontalSegment extends IfcAlignment2DSegment {
    constructor(TangentialContinuity:IfcBoolean, StartTag:IfcLabel, EndTag:IfcLabel, CurveGeometry:IfcCurveSegment2D) {
        super(TangentialContinuity, StartTag, EndTag)
        this.CurveGeometry = CurveGeometry
    }
    /** Geometric representation of the horizontal alignment within the 2D X/Y coordinate space.
    */
    CurveGeometry: IfcCurveSegment2D
}

export default IfcAlignment2DHorizontalSegment
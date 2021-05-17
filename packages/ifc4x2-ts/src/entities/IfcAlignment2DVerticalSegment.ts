// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcAlignment2DVerticalSegment

import { IfcLengthMeasure, IfcPositiveLengthMeasure, IfcRatioMeasure, IfcBoolean, IfcLabel } from '../types'
import { IfcAlignment2DSegment } from './'

/** Individual segment along the IfcAlignment2DVertical, being defined in the distance-along/z coordinate space.
 *
 * The vertical alignment is defined by segments that connects end-to-start.
 *
 * The vertical alignment curve geometry is defined in a plane with x = distance along horizontal, the y = height (or elevation).
 *
 * The transition at the segment connection is not enforced to be tangential, if the “tangential continuity” flag is set to false, otherwise a tangential continuity shall be preserved
 *
 * The following vertical segment types are defined:For each vertical segment, the following non-redundant information is provided:The following information can be calculated (and is therefore not exchanged explicitly to avoid redundancy and inconsistencies)The following checks can be done to validate the correct exchange:
 */
abstract class IfcAlignment2DVerticalSegment extends IfcAlignment2DSegment {
    constructor(TangentialContinuity:IfcBoolean, StartTag:IfcLabel, EndTag:IfcLabel, StartDistAlong:IfcLengthMeasure, HorizontalLength:IfcPositiveLengthMeasure, StartHeight:IfcLengthMeasure, StartGradient:IfcRatioMeasure) {
        super(TangentialContinuity, StartTag, EndTag)
        this.StartDistAlong = StartDistAlong
        this.HorizontalLength = HorizontalLength
        this.StartHeight = StartHeight
        this.StartGradient = StartGradient
    }
    /** Distance along the horizontal alignment, measured along the IfcAlignment2DHorizontal given in the length unit of the global IfcUnitAssignment.
    */
    StartDistAlong: IfcLengthMeasure
    /** Length measured as distance along the horizontal alignment of the segment.
    */
    HorizontalLength: IfcPositiveLengthMeasure
    /** Elevation in Z of the start point relative to the IfcAlignment coordinate system.
     * It is strongly advised to not offset the IfcAlignment coordinate system from the project engineering coordinate system.
    */
    StartHeight: IfcLengthMeasure
    /** Gradient of the tangent of the vertical segment at the start point.
     * It is provided as a ratio measure.
     * The ratio is percentage/100 (0.1 is equal to 10%).
     * It has a theoretical range of -∞ < n < ∞ using a ratio measure.
     * The equivalent range measured in degree is -90° < n < 90°.
     * For practical application of start gradient, the range of the ratio measure should be within the limits of -1 ≤ n ≤ 1 (equivalent in degree -45° ≤ n ≤ 45°).
     * However larger limits might apply for particular usages.
     * Positive gradient means an increasing height at the start (or uphill), a negative gradient means decreasing height at the start (or downhill).
    */
    StartGradient: IfcRatioMeasure
}

export default IfcAlignment2DVerticalSegment
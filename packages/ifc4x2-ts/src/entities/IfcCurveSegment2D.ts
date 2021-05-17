// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCurveSegment2D

import { IfcCartesianPoint, IfcBoundedCurve } from './'
import { IfcPlaneAngleMeasure, IfcPositiveLengthMeasure } from '../types'

/** The abstract definition of a bounded 2D curve representation item.
 *
 * Each curve segment is defined by a start point, a start direction, a segment length and additional curve geometry parameter.
 *
 * It defines arcs without the need to use a trimmed curve.
 */
abstract class IfcCurveSegment2D extends IfcBoundedCurve {
    constructor(StartPoint:IfcCartesianPoint, StartDirection:IfcPlaneAngleMeasure, SegmentLength:IfcPositiveLengthMeasure) {
        super()
        this.StartPoint = StartPoint
        this.StartDirection = StartDirection
        this.SegmentLength = SegmentLength
    }
    /** The start point of the 2D curve as x/y coordinates defined by a 2D Cartesian point.
    */
    StartPoint: IfcCartesianPoint
    /** The direction of the tangent at the start point.
     * Direction value 0. indicates a curve with a start tangent along the positive x-axis.
     * Values increases counter-clockwise, and decreases clockwise.
     * Depending on the plane angle unit, either degree or radians, the sensible range is -360° ≤ n ≤ 360° (or -2π ≤ n ≤ 2π).
     * Values larger then a full circle (>|360°| or >|2 π| shall not be used.
    */
    StartDirection: IfcPlaneAngleMeasure
    /** The length along the curve
    */
    SegmentLength: IfcPositiveLengthMeasure
}

export default IfcCurveSegment2D
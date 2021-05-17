// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTransitionCurveSegment2D

import { IfcPositiveLengthMeasure, IfcBoolean, IfcTransitionCurveType, IfcPlaneAngleMeasure } from '../types'
import { IfcCartesianPoint, IfcCurveSegment2D } from './'

/** An IfcTransitionCurveSegment2D is a curve that transitions between a straight line and a circular arc (or the reverse).
 */
 class IfcTransitionCurveSegment2D extends IfcCurveSegment2D {
    constructor(StartPoint:IfcCartesianPoint, StartDirection:IfcPlaneAngleMeasure, SegmentLength:IfcPositiveLengthMeasure, StartRadius:IfcPositiveLengthMeasure, EndRadius:IfcPositiveLengthMeasure, IsStartRadiusCCW:IfcBoolean, IsEndRadiusCCW:IfcBoolean, TransitionCurveType:IfcTransitionCurveType) {
        super(StartPoint, StartDirection, SegmentLength)
        this.StartRadius = StartRadius
        this.EndRadius = EndRadius
        this.IsStartRadiusCCW = IsStartRadiusCCW
        this.IsEndRadiusCCW = IsEndRadiusCCW
        this.TransitionCurveType = TransitionCurveType
    }
    /** The radius of the curve at the start point.
     * If the radius is not provided by a value, i.e. being “NIL” it is interpreted as INFINITE – the StartPoint is at the point, where it does not have a curvature.
    */
    StartRadius?: IfcPositiveLengthMeasure
    /** The radius of the curve at the end point.
     * If the radius is not provided by a value, i.e. being “NIL” it is interpreted as INFINITE – the end point is at the point, where it does not have a curvature.
    */
    EndRadius?: IfcPositiveLengthMeasure
    /** Indication of the curve starting counter-clockwise or clockwise.
     * The orientation of the curve is IsCcw=”true”, if the spiral arc goes counter-clockwise as seen from the start point and start direction, or “to the left", and with IsCcw=”false” if the spiral arc goes clockwise, or “to the right”.
    */
    IsStartRadiusCCW: IfcBoolean
    /** Indication of the curve ending counter-clockwise or clockwise.
     * The orientation of the clothoidal arc is IsCcw=”true”, if the spiral arc goes counter-clockwise as seen towards the end point and end direction, or “to the left", and with IsCcw=”false” if the spiral arc goes clockwise, or “to the right”.
    */
    IsEndRadiusCCW: IfcBoolean
    /** Indicates the specific type of transition curve.
    */
    TransitionCurveType: IfcTransitionCurveType
}

export default IfcTransitionCurveSegment2D
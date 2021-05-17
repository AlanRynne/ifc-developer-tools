// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCircularArcSegment2D

import { IfcPositiveLengthMeasure, IfcBoolean, IfcPlaneAngleMeasure } from '../types'
import { IfcCartesianPoint, IfcCurveSegment2D } from './'

/** The circular arc segment uses the inherited attributes StartPoint as the start of the circular arc, StartDirection as the tangent at the start point and SegmentLength as the arc length.
 */
 class IfcCircularArcSegment2D extends IfcCurveSegment2D {
    constructor(StartPoint:IfcCartesianPoint, StartDirection:IfcPlaneAngleMeasure, SegmentLength:IfcPositiveLengthMeasure, Radius:IfcPositiveLengthMeasure, IsCCW:IfcBoolean) {
        super(StartPoint, StartDirection, SegmentLength)
        this.Radius = Radius
        this.IsCCW = IsCCW
    }
    /** The radius of the circular arc
    */
    Radius: IfcPositiveLengthMeasure
    /** (counter-clockwise or clockwise) as the orientation of the circular arc with Boolean=”true” being counter-clockwise, or “to the left", and Boolean=”false” being clockwise, or “to the right”.
    */
    IsCCW: IfcBoolean
}

export default IfcCircularArcSegment2D
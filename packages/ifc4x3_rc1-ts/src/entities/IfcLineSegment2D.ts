// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcLineSegment2D

import { IfcCartesianPoint, IfcCurveSegment2D } from './'
import { IfcPlaneAngleMeasure, IfcPositiveLengthMeasure } from '../types'

/** The line segment is defined using the inherited start point, start distance and segment length parameter.
 */
 class IfcLineSegment2D extends IfcCurveSegment2D {
    constructor(StartPoint:IfcCartesianPoint, StartDirection:IfcPlaneAngleMeasure, SegmentLength:IfcPositiveLengthMeasure) {
        super(StartPoint, StartDirection, SegmentLength)

    }

}

export default IfcLineSegment2D
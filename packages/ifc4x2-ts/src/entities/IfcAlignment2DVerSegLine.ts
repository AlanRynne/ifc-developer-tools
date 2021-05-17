// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcAlignment2DVerSegLine

import { IfcBoolean, IfcLabel, IfcLengthMeasure, IfcPositiveLengthMeasure, IfcRatioMeasure } from '../types'
import { IfcAlignment2DVerticalSegment } from './'

/** The vertical straight segment is defined as a line using the inherited attributes from IfcAlignment2DVerticalSegment.
 */
 class IfcAlignment2DVerSegLine extends IfcAlignment2DVerticalSegment {
    constructor(TangentialContinuity:IfcBoolean, StartTag:IfcLabel, EndTag:IfcLabel, StartDistAlong:IfcLengthMeasure, HorizontalLength:IfcPositiveLengthMeasure, StartHeight:IfcLengthMeasure, StartGradient:IfcRatioMeasure) {
        super(TangentialContinuity, StartTag, EndTag, StartDistAlong, HorizontalLength, StartHeight, StartGradient)

    }

}

export default IfcAlignment2DVerSegLine
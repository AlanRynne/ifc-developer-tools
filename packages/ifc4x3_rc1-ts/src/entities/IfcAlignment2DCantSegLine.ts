// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcAlignment2DCantSegLine

import { IfcBoolean, IfcLabel, IfcPositiveLengthMeasure, IfcLengthMeasure } from '../types'
import { IfcAlignment2DCantSegment } from './'

/**  */
 class IfcAlignment2DCantSegLine extends IfcAlignment2DCantSegment {
    constructor(TangentialContinuity:IfcBoolean, StartTag:IfcLabel, EndTag:IfcLabel, StartDistAlong:IfcPositiveLengthMeasure, HorizontalLength:IfcPositiveLengthMeasure, StartCantLeft:IfcLengthMeasure, EndCantLeft:IfcLengthMeasure, StartCantRight:IfcLengthMeasure, EndCantRight:IfcLengthMeasure) {
        super(TangentialContinuity, StartTag, EndTag, StartDistAlong, HorizontalLength, StartCantLeft, EndCantLeft, StartCantRight, EndCantRight)

    }

}

export default IfcAlignment2DCantSegLine
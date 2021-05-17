// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcAlignment2DCantSegment

import { IfcPositiveLengthMeasure, IfcLengthMeasure, IfcBoolean, IfcLabel } from '../types'
import { IfcAlignment2DSegment } from './'

/**  */
abstract class IfcAlignment2DCantSegment extends IfcAlignment2DSegment {
    constructor(TangentialContinuity:IfcBoolean, StartTag:IfcLabel, EndTag:IfcLabel, StartDistAlong:IfcPositiveLengthMeasure, HorizontalLength:IfcPositiveLengthMeasure, StartCantLeft:IfcLengthMeasure, EndCantLeft:IfcLengthMeasure, StartCantRight:IfcLengthMeasure, EndCantRight:IfcLengthMeasure) {
        super(TangentialContinuity, StartTag, EndTag)
        this.StartDistAlong = StartDistAlong
        this.HorizontalLength = HorizontalLength
        this.StartCantLeft = StartCantLeft
        this.EndCantLeft = EndCantLeft
        this.StartCantRight = StartCantRight
        this.EndCantRight = EndCantRight
    }

    StartDistAlong: IfcPositiveLengthMeasure

    HorizontalLength: IfcPositiveLengthMeasure

    StartCantLeft: IfcLengthMeasure

    EndCantLeft?: IfcLengthMeasure

    StartCantRight: IfcLengthMeasure

    EndCantRight?: IfcLengthMeasure
}

export default IfcAlignment2DCantSegment
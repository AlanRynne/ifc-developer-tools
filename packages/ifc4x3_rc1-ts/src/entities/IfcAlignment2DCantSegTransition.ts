// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcAlignment2DCantSegTransition

import { IfcPositiveLengthMeasure, IfcBoolean, IfcTransitionCurveType, IfcLabel, IfcLengthMeasure } from '../types'
import { IfcAlignment2DCantSegment } from './'

/**  */
 class IfcAlignment2DCantSegTransition extends IfcAlignment2DCantSegment {
    constructor(TangentialContinuity:IfcBoolean, StartTag:IfcLabel, EndTag:IfcLabel, StartDistAlong:IfcPositiveLengthMeasure, HorizontalLength:IfcPositiveLengthMeasure, StartCantLeft:IfcLengthMeasure, EndCantLeft:IfcLengthMeasure, StartCantRight:IfcLengthMeasure, EndCantRight:IfcLengthMeasure, StartRadius:IfcPositiveLengthMeasure, EndRadius:IfcPositiveLengthMeasure, IsStartRadiusCCW:IfcBoolean, IsEndRadiusCCW:IfcBoolean, TransitionCurveType:IfcTransitionCurveType) {
        super(TangentialContinuity, StartTag, EndTag, StartDistAlong, HorizontalLength, StartCantLeft, EndCantLeft, StartCantRight, EndCantRight)
        this.StartRadius = StartRadius
        this.EndRadius = EndRadius
        this.IsStartRadiusCCW = IsStartRadiusCCW
        this.IsEndRadiusCCW = IsEndRadiusCCW
        this.TransitionCurveType = TransitionCurveType
    }

    StartRadius?: IfcPositiveLengthMeasure

    EndRadius?: IfcPositiveLengthMeasure

    IsStartRadiusCCW: IfcBoolean

    IsEndRadiusCCW: IfcBoolean

    TransitionCurveType: IfcTransitionCurveType
}

export default IfcAlignment2DCantSegTransition
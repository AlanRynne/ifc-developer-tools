// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcAlignment2DVerSegTransition

import { IfcPositiveLengthMeasure, IfcBoolean, IfcTransitionCurveType, IfcLabel, IfcLengthMeasure, IfcRatioMeasure } from '../types'
import { IfcAlignment2DVerticalSegment } from './'

/**  */
 class IfcAlignment2DVerSegTransition extends IfcAlignment2DVerticalSegment {
    constructor(TangentialContinuity:IfcBoolean, StartTag:IfcLabel, EndTag:IfcLabel, StartDistAlong:IfcLengthMeasure, HorizontalLength:IfcPositiveLengthMeasure, StartHeight:IfcLengthMeasure, StartGradient:IfcRatioMeasure, StartRadius:IfcPositiveLengthMeasure, EndRadius:IfcPositiveLengthMeasure, IsStartRadiusCCW:IfcBoolean, IsEndRadiusCCW:IfcBoolean, TransitionCurveType:IfcTransitionCurveType) {
        super(TangentialContinuity, StartTag, EndTag, StartDistAlong, HorizontalLength, StartHeight, StartGradient)
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

export default IfcAlignment2DVerSegTransition
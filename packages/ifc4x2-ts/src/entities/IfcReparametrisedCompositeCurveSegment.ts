// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcReparametrisedCompositeCurveSegment

import { IfcParameterValue, IfcTransitionCode, IfcBoolean } from '../types'
import { IfcCurve, IfcCompositeCurveSegment } from './'

/** The IfcReparametrisedCompositeCurveSegment is geometrically identical to a IfcCompositeCurveSegment but with the additional capability of reparametrization.
 */
 class IfcReparametrisedCompositeCurveSegment extends IfcCompositeCurveSegment {
    constructor(Transition:IfcTransitionCode, SameSense:IfcBoolean, ParentCurve:IfcCurve, ParamLength:IfcParameterValue) {
        super(Transition, SameSense, ParentCurve)
        this.ParamLength = ParamLength
    }
    /** 
    */
    ParamLength: IfcParameterValue
}

export default IfcReparametrisedCompositeCurveSegment
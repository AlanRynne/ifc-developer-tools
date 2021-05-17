// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCompositeCurveSegment

import { IfcTransitionCode } from '../types'
import { IfcCurve, IfcGeometricRepresentationItem } from './'

/** An IfcCompositeCurveSegment is a bounded curve constructed for the sole purpose to be a segment within an IfcCompositeCurve.
 */
 class IfcCompositeCurveSegment extends IfcGeometricRepresentationItem {
    constructor(Transition:IfcTransitionCode, SameSense:boolean, ParentCurve:IfcCurve) {
        super()
        this.Transition = Transition
        this.SameSense = SameSense
        this.ParentCurve = ParentCurve
    }
    /** The state of transition (i.e., geometric continuity from the last point of this segment to the first point of the next segment) in a composite curve.
    */
    Transition: IfcTransitionCode
    /** An indicator of whether or not the sense of the segment agrees with, or opposes, that of the parent curve.
     * If SameSense is false, the point with highest parameter value is taken as the first point of the segment.
     * If the datatype of ParentCurve is IfcTrimmedCurve, the value of SameSense overrides the value of IfcTrimmedCurve
     * SenseAgreement
    */
    SameSense: boolean
    /** The bounded curve which defines the geometry of the segment.
    */
    ParentCurve: IfcCurve
}

export default IfcCompositeCurveSegment
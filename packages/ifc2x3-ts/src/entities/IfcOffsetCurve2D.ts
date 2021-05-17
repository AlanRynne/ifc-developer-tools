// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcOffsetCurve2D

import { IfcCurve } from './'
import { IfcLengthMeasure } from '../types'

/** An IfcOffsetCurve2D is a curve defined by an offset in 2D space from its BasisCurve.
 */
 class IfcOffsetCurve2D extends IfcCurve {
    constructor(BasisCurve:IfcCurve, Distance:IfcLengthMeasure, SelfIntersect:boolean | null) {
        super()
        this.BasisCurve = BasisCurve
        this.Distance = Distance
        this.SelfIntersect = SelfIntersect
    }
    /** undefined
    */
    BasisCurve: IfcCurve
    /** The distance of the offset curve from the basis curve.
     * distance may be positive, negative or zero.
     * A positive value of distance defines an offset in the direction which is normal to the curve in the sense of an anti-clockwise rotation through 90 degrees from the tangent vector T at the given point.
     * (This is in the direction of orthogonal complement(T).)
    */
    Distance: IfcLengthMeasure
    /** An indication of whether the offset curve self-intersects; this is for information only.
    */
    SelfIntersect: boolean | null
}

export default IfcOffsetCurve2D
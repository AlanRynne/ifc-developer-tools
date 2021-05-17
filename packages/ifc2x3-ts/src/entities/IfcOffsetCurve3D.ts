// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcOffsetCurve3D

import { IfcCurve, IfcDirection } from './'
import { IfcLengthMeasure } from '../types'

/** An IfcOffsetCurve3D is a curve defined by an offset in 3D space from its BasisCurve
 *
 * Informal Propositions:
 */
 class IfcOffsetCurve3D extends IfcCurve {
    constructor(BasisCurve:IfcCurve, Distance:IfcLengthMeasure, SelfIntersect:boolean | null, RefDirection:IfcDirection) {
        super()
        this.BasisCurve = BasisCurve
        this.Distance = Distance
        this.SelfIntersect = SelfIntersect
        this.RefDirection = RefDirection
    }
    /** undefined
    */
    BasisCurve: IfcCurve
    /** The distance of the offset curve from the basis curve.
     * The distance may be positive, negative or zero.
    */
    Distance: IfcLengthMeasure
    /** An indication of whether the offset curve self-intersects, this is for information only.
    */
    SelfIntersect: boolean | null
    /** The direction used to define the direction of the offset curve 3d from the basis curve.
    */
    RefDirection: IfcDirection
}

export default IfcOffsetCurve3D
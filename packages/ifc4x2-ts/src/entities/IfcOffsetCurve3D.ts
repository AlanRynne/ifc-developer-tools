// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcOffsetCurve3D

import { IfcLengthMeasure, IfcLogical } from '../types'
import { IfcDirection, IfcCurve, IfcOffsetCurve } from './'

/** An IfcOffsetCurve3D is a curve defined by an offset in 3D space from its BasisCurve
 *
 * Informal Propositions:
 */
 class IfcOffsetCurve3D extends IfcOffsetCurve {
    constructor(BasisCurve:IfcCurve, Distance:IfcLengthMeasure, SelfIntersect:IfcLogical, RefDirection:IfcDirection) {
        super(BasisCurve)
        this.Distance = Distance
        this.SelfIntersect = SelfIntersect
        this.RefDirection = RefDirection
    }
    /** The distance of the offset curve from the basis curve.
     * The distance may be positive, negative or zero.
    */
    Distance: IfcLengthMeasure
    /** An indication of whether the offset curve self-intersects, this is for information only.
    */
    SelfIntersect: IfcLogical
    /** The direction used to define the direction of the offset curve 3d from the basis curve.
    */
    RefDirection: IfcDirection
}

export default IfcOffsetCurve3D
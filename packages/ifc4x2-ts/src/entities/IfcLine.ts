// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcLine

import { IfcCartesianPoint, IfcVector, IfcCurve } from './'

/** The IfcLine is an unbounded line parameterized by an IfcCartesianPoint and an IfcVector.
 *
 * The magnitude of the IfcVector affects the parameterization of the line, but it does not bound the line.
 */
 class IfcLine extends IfcCurve {
    constructor(Pnt:IfcCartesianPoint, Dir:IfcVector) {
        super()
        this.Pnt = Pnt
        this.Dir = Dir
    }
    /** The location of the IfcLine.
    */
    Pnt: IfcCartesianPoint
    /** The direction of the IfcLine, the magnitude and units of Dir affect the parameterization of the line.
    */
    Dir: IfcVector
}

export default IfcLine
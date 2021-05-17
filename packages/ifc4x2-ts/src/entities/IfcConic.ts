// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcConic

import { IfcAxis2Placement } from '../types'
import { IfcCurve } from './'

/** An IfcConic is a parameterized planar curve.
 */
abstract class IfcConic extends IfcCurve {
    constructor(Position:IfcAxis2Placement) {
        super()
        this.Position = Position
    }
    /** The location and orientation of the conic.
     * Further details of the interpretation of this attribute are given for the individual subtypes."
    */
    Position: IfcAxis2Placement
}

export default IfcConic
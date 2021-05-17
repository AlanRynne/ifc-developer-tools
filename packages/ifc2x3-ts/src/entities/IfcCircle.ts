// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCircle

import { IfcPositiveLengthMeasure, IfcAxis2Placement } from '../types'
import { IfcConic } from './'

/** An IfcCircle is a curve consisting of a set of points having equal distance from the center
 *
 * Figure 368 illustrates the definition of IfcCircle within a three-dimensional position coordinate system placed within the object coordinate system of an element.
 */
 class IfcCircle extends IfcConic {
    constructor(Position:IfcAxis2Placement, Radius:IfcPositiveLengthMeasure) {
        super(Position)
        this.Radius = Radius
    }
    /** The radius of the circle, which shall be greater than zero.
    */
    Radius: IfcPositiveLengthMeasure
}

export default IfcCircle
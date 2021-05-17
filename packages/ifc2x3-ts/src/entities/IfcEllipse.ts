// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcEllipse

import { IfcPositiveLengthMeasure, IfcAxis2Placement } from '../types'
import { IfcConic } from './'

/** An IfcEllipse is a curve consisting of a set of points whose distances to two fixed points add to the same constant
 *
 * The inherited SELF\IfcConic
 *
 * Position.Location is the center of the IfcEllipse, and the inherited SELF\IfcConic
 *
 * Position.Position.P[1] is the direction of the SemiAxis1.
 */
 class IfcEllipse extends IfcConic {
    constructor(Position:IfcAxis2Placement, SemiAxis1:IfcPositiveLengthMeasure, SemiAxis2:IfcPositiveLengthMeasure) {
        super(Position)
        this.SemiAxis1 = SemiAxis1
        this.SemiAxis2 = SemiAxis2
    }
    /** The first radius of the ellipse which shall be positive.
     * Placement
     * Axes[1] gives the direction of the SemiAxis1.
    */
    SemiAxis1: IfcPositiveLengthMeasure
    /** The second radius of the ellipse which shall be positive.
    */
    SemiAxis2: IfcPositiveLengthMeasure
}

export default IfcEllipse
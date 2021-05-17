// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcColourRgb

import { IfcNormalisedRatioMeasure, IfcLabel } from '../types'
import { IfcColourSpecification } from './'

/** 
 */
 class IfcColourRgb extends IfcColourSpecification {
    constructor(Name:IfcLabel, Red:IfcNormalisedRatioMeasure, Green:IfcNormalisedRatioMeasure, Blue:IfcNormalisedRatioMeasure) {
        super(Name)
        this.Red = Red
        this.Green = Green
        this.Blue = Blue
    }
    /** The intensity of the red colour component.
     * The colour component value is given within the range of 0..1, and not within the range of 0..255 as otherwise usual.
    */
    Red: IfcNormalisedRatioMeasure
    /** The intensity of the green colour component.
     * The colour component value is given within the range of 0..1, and not within the range of 0..255 as otherwise usual.
    */
    Green: IfcNormalisedRatioMeasure
    /** The intensity of the blue colour component.
     * The colour component value is given within the range of 0..1, and not within the range of 0..255 as otherwise usual.
    */
    Blue: IfcNormalisedRatioMeasure
}

export default IfcColourRgb
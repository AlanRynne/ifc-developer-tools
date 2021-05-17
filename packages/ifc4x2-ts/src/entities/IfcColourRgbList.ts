// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcColourRgbList

import { IfcNormalisedRatioMeasure } from '../types'
import { IfcPresentationItem } from './'

/** The IfcColourRgbList defines an ordered collection of RGB colour values.
 *
 * Each colour value is a fixed list of three colour components (red, green, blue).
 *
 * The attribute ColourList is a two-dimensional list, where:
 */
 class IfcColourRgbList extends IfcPresentationItem {
    constructor(ColourList:Array<Array<IfcNormalisedRatioMeasure>>) {
        super()
        this.ColourList = ColourList
    }
    /** List of colours defined by the red, green, blue components.
     * All values are provided as a ratio of 0.0 ≤ value ≤ 1.0.
     * When using 8bit for each colour channel, a value of 0.0 equals 0, a value of 1.0 equals 255, and values between are interpolated.
    */
    ColourList: Array<Array<IfcNormalisedRatioMeasure>>
}

export default IfcColourRgbList
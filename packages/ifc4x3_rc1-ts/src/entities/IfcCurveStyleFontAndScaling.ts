// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCurveStyleFontAndScaling

import { IfcLabel, IfcCurveStyleFontSelect, IfcPositiveRatioMeasure } from '../types'
import { IfcPresentationItem } from './'

/** The IfcCurveStyleFontAndScaling allows for the reuse of the same curve style definition in several sizes.
 *
 * The definition of the CurveFontScale is the scaling of a base curve style pattern to be used as a new or derived curve style pattern
 *
 * An example for IfcCurveStyleFontAndScaling is the sizing of a basic curve style dash pattern 'dash' (visible 0.01m, invisible 0.005m) into 'dash large' with CurveFontScale = 2 (resulting in visible 0.02m, invisible 0.01m), and into 'dash small' with CurveFontScale = 0.5 (resulting in visible 0.005m, invisible 0.0025m).
 */
 class IfcCurveStyleFontAndScaling extends IfcPresentationItem {
    constructor(Name:IfcLabel, CurveFont:IfcCurveStyleFontSelect, CurveFontScaling:IfcPositiveRatioMeasure) {
        super()
        this.Name = Name
        this.CurveFont = CurveFont
        this.CurveFontScaling = CurveFontScaling
    }
    /** Name that may be assigned with the scaling of a curve font.
    */
    Name?: IfcLabel
    /** The curve font to be scaled.
    */
    CurveFont: IfcCurveStyleFontSelect
    /** The scale factor.
    */
    CurveFontScaling: IfcPositiveRatioMeasure
}

export default IfcCurveStyleFontAndScaling
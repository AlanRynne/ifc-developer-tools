// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCurveStyle

import { IfcCurveFontOrScaledCurveFontSelect, IfcSizeSelect, IfcColour, IfcBoolean, IfcLabel } from '../types'
import { IfcPresentationStyle } from './'

/** An IfcCurveStyle provides the style table for presentation information assigned to geometric curves.
 *
 * The style is defined by a color, a font and a width.
 *
 * The IfcCurveStyle defines curve patterns as model patterns, that is, the distance between visible and invisible segments of curve patterns are given in model space dimensions (that have to be scaled using the target plot scale)
 *
 * Styles are intended to be shared by multiple IfcStyledItem's, assigning the style to occurrences of (subtypes of) IfcGeometricRepresentationItem's.
 *
 * Measures given to a font pattern or a curve width are given in global drawing length units
 *
 * The measure values for font pattern and curve width apply to the model space with a target plot scale provided for the correct appearance in the default plot scale..
 *
 * For different scale and projection dependent curve styles a different instance of IfcCurveStyle needs to be used by IfcPresentationStyleAssignment for different IfcGeometricRepresentationSubContext dependent representations
 *
 * An IfcCurveStyle can be assigned to IfcGeometricRepresentationItem's via the IfcPresentationStyleAssignment through an intermediate IfcStyledItem or IfcAnnotationCurveOccurrence.
 */
 class IfcCurveStyle extends IfcPresentationStyle {
    constructor(Name:IfcLabel, CurveFont:IfcCurveFontOrScaledCurveFontSelect, CurveWidth:IfcSizeSelect, CurveColour:IfcColour, ModelOrDraughting:IfcBoolean) {
        super(Name)
        this.CurveFont = CurveFont
        this.CurveWidth = CurveWidth
        this.CurveColour = CurveColour
        this.ModelOrDraughting = ModelOrDraughting
    }
    /** A curve style font which is used to present a curve.
     * It can either be a predefined curve font, or an explicitly defined curve font.
     * Both may be scaled.
     * If not given, then the curve font should be taken from the layer assignment with style, if that is not given either, then the default curve font applies.
    */
    CurveFont?: IfcCurveFontOrScaledCurveFontSelect
    /** A positive length measure in units of the presentation area for the width of a presented curve.
     * If not given, then the style should be taken from the layer assignment with style, if that is not given either, then the default style applies.
    */
    CurveWidth?: IfcSizeSelect
    /** The colour of the visible part of the curve.
     * If not given, then the colour should be taken from the layer assignment with style, if that is not given either, then the default colour applies.
    */
    CurveColour?: IfcColour
    /** Indication whether the length measures provided for the presentation style are model based, or draughting based.
     * IFC4 CHANGE New attribute.
    */
    ModelOrDraughting?: IfcBoolean
}

export default IfcCurveStyle
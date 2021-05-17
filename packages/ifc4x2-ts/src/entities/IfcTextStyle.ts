// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTextStyle

import { IfcTextStyleForDefinedFont, IfcTextStyleTextModel, IfcPresentationStyle } from './'
import { IfcTextFontSelect, IfcBoolean, IfcLabel } from '../types'

/** The IfcTextStyle is a presentation style for annotations that place a text in model space.
 *
 * The IfcTextStyle provides the text style for presentation information assigned to IfcTextLiteral's.
 *
 * The style is defined by color, text font characteristics, and text box characteristics
 *
 * An IfcTextStyle is instantiated with:An IfcTextStyle is assigned to IfcTextLiteral through the IfcStyledItem entity.
 */
 class IfcTextStyle extends IfcPresentationStyle {
    constructor(Name:IfcLabel, TextCharacterAppearance:IfcTextStyleForDefinedFont, TextStyle:IfcTextStyleTextModel, TextFontStyle:IfcTextFontSelect, ModelOrDraughting:IfcBoolean) {
        super(Name)
        this.TextCharacterAppearance = TextCharacterAppearance
        this.TextStyle = TextStyle
        this.TextFontStyle = TextFontStyle
        this.ModelOrDraughting = ModelOrDraughting
    }
    /** A character style to be used for presented text.
     * IFC4 CHANGE Superfluous select type IfcCharacterStyleSelect has been removed.
    */
    TextCharacterAppearance?: IfcTextStyleForDefinedFont
    /** The style applied to the text block for its visual appearance.
     * IFC2x3 CHANGE The attribute TextBlockStyle has been changed from SET[1:?] to a non-aggregated optional and renamed into TextStyles.
     * IFC4 CHANGE The IfcTextStyleWithBoxCharacteristics and the now superfluous select type IfcTextStyleSelect have been removed.
    */
    TextStyle?: IfcTextStyleTextModel
    /** The style applied to the text font for its visual appearance.
     * It defines the font family, font style, weight and size.
     * IFC2x2 Add2 CHANGE The attribute TextFontStyle is a new attribute attached to IfcTextStyle.
    */
    TextFontStyle: IfcTextFontSelect
    /** Indication whether the length measures provided for the presentation style are model based, or draughting based.
     * IFC4 CHANGE New attribute.
    */
    ModelOrDraughting?: IfcBoolean
}

export default IfcTextStyle
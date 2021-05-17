// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTextStyleFontModel

import { IfcTextFontName, IfcFontStyle, IfcFontVariant, IfcFontWeight, IfcSizeSelect, IfcLabel } from '../types'
import { IfcPreDefinedTextFont } from './'

/** (The above algorithm can be optimized to avoid having to revisit the CSS1 properties for each character.) The per-property matching rules from (2) above are as follows: The inherited Name attribute is used to define the font name, particularly in cases, where no (list of) font families are provided.
 */
 class IfcTextStyleFontModel extends IfcPreDefinedTextFont {
    constructor(Name:IfcLabel, FontFamily:Array<IfcTextFontName>, FontStyle:IfcFontStyle, FontVariant:IfcFontVariant, FontWeight:IfcFontWeight, FontSize:IfcSizeSelect) {
        super(Name)
        this.FontFamily = FontFamily
        this.FontStyle = FontStyle
        this.FontVariant = FontVariant
        this.FontWeight = FontWeight
        this.FontSize = FontSize
    }
    /** The value is a prioritized list of font family names and/or generic family names.
     * The first list entry has the highest priority, if this font fails, the next list item shall be used.
     * The last list item should (if possible) be a generic family.
     * IFC4 CHANGE Attribute changed to being mandatory.
    */
    FontFamily?: Array<IfcTextFontName>
    /** The font style property selects between normal (sometimes referred to as "roman" or "upright"), italic and oblique faces within a font family.
    */
    FontStyle?: IfcFontStyle
    /** The font variant property selects between normal and small-caps.
     * It has been introduced for later compliance to full CSS1 support.
    */
    FontVariant?: IfcFontVariant
    /** The font weight property selects the weight of the font.
     * Values other then 'normal' and 'bold' have been introduced for later compliance to full CSS1 support.
    */
    FontWeight?: IfcFontWeight
    /** The font size provides the size or height of the text font.
     * The following values are allowed, <IfcLengthMeasure, with positive values, the length unit is globally defined at IfcUnitAssignment.
    */
    FontSize: IfcSizeSelect
}

export default IfcTextStyleFontModel
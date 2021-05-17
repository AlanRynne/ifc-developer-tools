// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTextStyleTextModel

import { IfcSizeSelect, IfcTextAlignment, IfcTextDecoration, IfcTextTransformation } from '../types'

/** The IfcTextStyleTextModel combines all text style properties, that affect the presentation of a text literal within a given extent.
 *
 * It includes the spacing between characters and words, the horizontal and vertical alignment of the text within the planar box of the extent, decorations (like underline), transformations of the literal (like uppercase), and the height of each text line within a multi-line text block.
 */
 class IfcTextStyleTextModel  {
    constructor(TextIndent:IfcSizeSelect, TextAlign:IfcTextAlignment, TextDecoration:IfcTextDecoration, LetterSpacing:IfcSizeSelect, WordSpacing:IfcSizeSelect, TextTransform:IfcTextTransformation, LineHeight:IfcSizeSelect) {

        this.TextIndent = TextIndent
        this.TextAlign = TextAlign
        this.TextDecoration = TextDecoration
        this.LetterSpacing = LetterSpacing
        this.WordSpacing = WordSpacing
        this.TextTransform = TextTransform
        this.LineHeight = LineHeight
    }
    /** The property specifies the indentation that appears before the first formatted line.
     * It has been introduced for later compliance to full CSS support.
    */
    TextIndent?: IfcSizeSelect
    /** This property describes how text is aligned horizontally within the element.
     * The actual justification algorithm used is dependent on the rendering algorithm.
    */
    TextAlign?: IfcTextAlignment
    /** This property describes decorations that are added to the text of an element.
    */
    TextDecoration?: IfcTextDecoration
    /** The length unit indicates an addition to the default space between characters.
     * Values can be negative, but there may be implementation-specific limits.
     * The importing application is free to select the exact spacing algorithm.
     * The letter spacing may also be influenced by justification (which is a value of the TextAlign attribute).
     * The following values are allowed, IfcDescriptiveMeasure with value='normal', IfcRatioMeasure, or IfcLengthMeasure, where the length unit is globally defined at IfcUnitAssignment.
    */
    LetterSpacing?: IfcSizeSelect
    /** The length unit indicates an addition to the default space between words.
     * Values can be negative, but there may be implementation-specific limits.
     * The importing application is free to select the exact spacing algorithm.
     * The word spacing may also be influenced by justification (which is a value of the 'text-align' property).
     * It has been introduced for later compliance to full CSS support.
    */
    WordSpacing?: IfcSizeSelect
    /** This property describes how text characters may transform to upper case, lower case, or capitalized case, independent of the character case used in the text literal.
     * It has been introduced for later compliance to full CSS support.
    */
    TextTransform?: IfcTextTransformation
    /** The property sets the distance between two adjacent lines' baselines.
     * When a ratio value is specified, the line height is given by the font size of the current element multiplied with the numerical value.
     * A value of 'normal' sets the line height to a reasonable value for the element's font.
     * It is suggested that importing applications set the 'normal' value to be a ratio number in the range of 1.0 to 1.2.
     * The following values are allowed: IfcDescriptiveMeasure with value='normal', or IfcLengthMeasure, with non-negative values, the length unit is globally defined at IfcUnitAssignment, or IfcRatioMeasure.
    */
    LineHeight?: IfcSizeSelect
}

export default IfcTextStyleTextModel
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTextLiteral

import { IfcPresentableText, IfcAxis2Placement, IfcTextPath } from '../types'
import { IfcGeometricRepresentationItem } from './'

/** The text literal is a geometric representation item which describes a text string using a string literal and additional position and path information.
 *
 * The text size and appearance is determined by the IfcTextStyle that is associated to the IfcTextLiteral through an IfcStyledItem
 *
 * The text string is placed within the planar extent (the box) defined within the subtype IfcTextLiteralWithExtent.
 */
 class IfcTextLiteral extends IfcGeometricRepresentationItem {
    constructor(Literal:IfcPresentableText, Placement:IfcAxis2Placement, Path:IfcTextPath) {
        super()
        this.Literal = Literal
        this.Placement = Placement
        this.Path = Path
    }
    /** The text literal to be presented.
    */
    Literal: IfcPresentableText
    /** An IfcAxis2Placement that determines the placement and orientation of the presented string.
    */
    Placement: IfcAxis2Placement
    /** The writing direction of the text literal.
    */
    Path: IfcTextPath
}

export default IfcTextLiteral
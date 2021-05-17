// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTextLiteralWithExtent

import { IfcPlanarExtent, IfcTextLiteral } from './'
import { IfcBoxAlignment, IfcPresentableText, IfcAxis2Placement, IfcTextPath } from '../types'

/** The text literal with extent is a text literal with the additional explicit information of the planar extent.
 *
 * An alignment attribute defines how the text box is aligned to the placement and how it may expand if additional lines of text need to be added
 *
 * Figure 406 shows the use of planar extent and box alignment to position the text stringThe planar extent defines the box model within which the text is placed.
 *
 * Padding maybe defined in the text style that offsets the text from the box to its inside.
 */
 class IfcTextLiteralWithExtent extends IfcTextLiteral {
    constructor(Literal:IfcPresentableText, Placement:IfcAxis2Placement, Path:IfcTextPath, Extent:IfcPlanarExtent, BoxAlignment:IfcBoxAlignment) {
        super(Literal, Placement, Path)
        this.Extent = Extent
        this.BoxAlignment = BoxAlignment
    }
    /** The extent in the x and y direction of the text literal.
    */
    Extent: IfcPlanarExtent
    /** The alignment of the text literal relative to its position.
    */
    BoxAlignment: IfcBoxAlignment
}

export default IfcTextLiteralWithExtent
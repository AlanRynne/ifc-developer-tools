// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcAnnotationFillArea

import { IfcCurve, IfcGeometricRepresentationItem } from './'

/** The IfcAnnotationFillArea defines an area by a definite OuterBoundary, that might include InnerBoundaries.
 *
 * The areas defined by the InnerBoundaries are excluded from applying the fill area style.
 *
 * The InnerBoundaries shall not intersect with the OuterBoundary nor being outside of the OuterBoundary
 *
 * The fill area style that is applied to the IfcAnnotationFillArea is declared using the IfcFillAreaStyle, associated to the area by an IfcStyledItem.
 *
 * Applicable fill area styles are a solid color, a hatching, tiles, or a combination of those styles
 *
 * Figure 405 illustrates annotation fill area
 *
 * Informal Propositions:
 */
 class IfcAnnotationFillArea extends IfcGeometricRepresentationItem {
    constructor(OuterBoundary:IfcCurve, InnerBoundaries:Array<IfcCurve>) {
        super()
        this.OuterBoundary = OuterBoundary
        this.InnerBoundaries = InnerBoundaries
    }
    /** A closed curve that defines the outer boundary of the fill area.
     * The areas defined by the outer boundary (minus potentially defined inner boundaries) is filled by the fill area style.
     * IFC2x3 CHANGE The two new attributes OuterBoundary and InnerBoundaries replace the old single attribute Boundaries.
    */
    OuterBoundary: IfcCurve
    /** A set of inner curves that define the inner boundaries of the fill area.
     * The areas defined by the inner boundaries are excluded from applying the fill area style.
     * IFC2x3 CHANGE The two new attributes OuterBoundary and InnerBoundaries replace the old single attribute Boundaries.
    */
    InnerBoundaries?: Array<IfcCurve>
}

export default IfcAnnotationFillArea
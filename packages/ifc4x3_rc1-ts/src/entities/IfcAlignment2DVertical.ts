// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcAlignment2DVertical

import { IfcAlignment2DVerticalSegment, IfcGeometricRepresentationItem } from './'

/** An IfcAlignment2DVertical is a height profile along the horizontal alignment.
 *
 * Points along a vertical alignment have two coordinate values.
 *
 * The first value is the distance along the horizontal alignment, the second value is the height according to the project engineering coordinate system.
 *
 * Based on the context of the project, they are geo-referenced and the height value is convertible into orthogonal height above/below the vertical datum.
 */
 class IfcAlignment2DVertical extends IfcGeometricRepresentationItem {
    constructor(Segments:Array<IfcAlignment2DVerticalSegment>) {
        super()
        this.Segments = Segments
    }
    /** An ordered list of unique vertical alignment segments, each (but the last) are joint end to start
    */
    Segments: Array<IfcAlignment2DVerticalSegment>
}

export default IfcAlignment2DVertical
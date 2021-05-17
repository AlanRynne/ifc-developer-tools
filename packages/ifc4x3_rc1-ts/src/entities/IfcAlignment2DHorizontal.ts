// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcAlignment2DHorizontal

import { IfcLengthMeasure } from '../types'
import { IfcAlignment2DHorizontalSegment, IfcGeometricRepresentationItem } from './'

/** An IfcAlignment2DHorizontal is a linear reference projected onto the horizontal x/y plane.
 *
 * Points along a horizontal alignment have two coordinate values, x and y in the local Cartesian engineering system
 *
 * The horizontal alignment is defined by segments that are connected end-to-start.
 *
 * The transition at the segment connection is not enforced to be tangential, if the “tangential continuity” flag is set to false, otherwise a tangential continuity shall be preserved.
 *
 * Based on the context of the project, they are geo-referenced and convertible into Northing and Easting values.
 */
 class IfcAlignment2DHorizontal extends IfcGeometricRepresentationItem {
    constructor(StartDistAlong:IfcLengthMeasure, Segments:Array<IfcAlignment2DHorizontalSegment>) {
        super()
        this.StartDistAlong = StartDistAlong
        this.Segments = Segments
    }
    /** The value of the distance along at the start of the horizontal alignment.
     * If omited (standard) it is set to zero.
    */
    StartDistAlong?: IfcLengthMeasure
    /** An ordered list of unique horizontal alignment segments, each (but the last) are joint end to start
    */
    Segments: Array<IfcAlignment2DHorizontalSegment>
}

export default IfcAlignment2DHorizontal
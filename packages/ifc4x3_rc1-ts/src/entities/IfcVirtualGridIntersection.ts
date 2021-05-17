// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcVirtualGridIntersection

import { IfcGridAxis } from './'
import { IfcLengthMeasure } from '../types'

/** IfcVirtualGridIntersection defines the derived location of the intersection between two grid axes.
 *
 * Offset values may be given to set an offset distance to the grid axis for the calculation of the virtual grid intersection
 *
 * The two intersecting axes (IntersectingAxes) define the intersection point, which exact location (in terms of the Cartesian point representing the intersection) has to be calculated from the geometric representation of the two participating curves
 *
 * Offset values may be given (OffsetDistances).
 *
 * If given, the position within the list of OffsetDistances corresponds with the position within the list of IntersectingAxes.
 *
 * Therefore:The following figures explain the usage of the OffsetDistances and IntersectingAxes attributes
 *
 * The distance of the offset curve (OffsetDistances[n]) is measured from the basis curve.
 *
 * The distance may be positive, negative or zero.
 *
 * A positive value of distance defines an offset in the direction which is normal to the curve in the sense of an anti-clockwise rotation through 90 degrees from the tangent vector T at the given point.
 *
 * (This is in the direction of orthogonal complement(T).) This can be reverted by the SameSense attribute at IfcGridAxis which may switch the sense of the AxisCurve
 *
 * Informal Propositions:
 */
 class IfcVirtualGridIntersection  {
    constructor(IntersectingAxes:Array<IfcGridAxis>, OffsetDistances:Array<IfcLengthMeasure>) {

        this.IntersectingAxes = IntersectingAxes
        this.OffsetDistances = OffsetDistances
    }
    /** Two grid axes which intersects at exactly one intersection (see also informal proposition at IfcGrid).
     * If attribute OffsetDistances is omitted, the intersection defines the placement or ref direction of a grid placement directly.
     * If OffsetDistances are given, the intersection is defined by the offset curves to the grid axes.
    */
    IntersectingAxes: Array<IfcGridAxis>
    /** Offset distances to the grid axes.
     * If given, it defines virtual offset curves to the grid axes.
     * The intersection of the offset curves specify the virtual grid intersection.
    */
    OffsetDistances: Array<IfcLengthMeasure>
}

export default IfcVirtualGridIntersection
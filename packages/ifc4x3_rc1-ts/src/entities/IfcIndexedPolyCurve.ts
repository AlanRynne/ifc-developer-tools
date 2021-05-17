// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcIndexedPolyCurve

import { IfcCartesianPointList, IfcBoundedCurve } from './'
import { IfcSegmentIndexSelect, IfcBoolean } from '../types'

/** The IfcIndexedPolyCurve is a bounded curve with only linear and circular arc segments defined by a Cartesian point list and an optional list of segments, providing indices into the Cartesian point list.
 *
 * In the case that the list of Segments is not provided, all points in the IfcCartesianPointList are connected by straight line segments in the order they appear in the IfcCartesianPointList
 *
 * In the case that the list of Segments is provided, it is interpreted as such:The IfcIndexedPolyCurve represents an open or a closed curve depending on the following condition:Informal Propositions:
 */
 class IfcIndexedPolyCurve extends IfcBoundedCurve {
    constructor(Points:IfcCartesianPointList, Segments:Array<IfcSegmentIndexSelect>, SelfIntersect:IfcBoolean) {
        super()
        this.Points = Points
        this.Segments = Segments
        this.SelfIntersect = SelfIntersect
    }
    /** A list of points, provided by a point list of either two, or three dimensions, that is used to define the poly curve.
     * If the attribute Segments is not provided, the poly curve is generated as a poly line by connecting the points in the order of their appearance in the point list.
     * If the attribute Segments is provided, the segments determine, how the points are to be used to create straigth and circular arc segments.
    */
    Points: IfcCartesianPointList
    /** List of straight line and circular arc segments, each providing a list of indices into the Cartesian point list.
     * Indices should preserve consecutive connectivity between the segments, the start index of the next segment shall be identical with the end index of the previous segment.
    */
    Segments?: Array<IfcSegmentIndexSelect>
    /** Indication of whether the curve intersects itself or not; this is for information only.
    */
    SelfIntersect?: IfcBoolean
}

export default IfcIndexedPolyCurve
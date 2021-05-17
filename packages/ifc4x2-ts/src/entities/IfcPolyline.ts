// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPolyline

import { IfcCartesianPoint, IfcBoundedCurve } from './'

/** The IfcPolyline is a bounded curve with only linear segments defined by a list of Cartesian points.
 *
 * If the first and the last Cartesian point in the list are identical, then the polyline is a closed curve, otherwise it is an open curve.
 */
 class IfcPolyline extends IfcBoundedCurve {
    constructor(Points:Array<IfcCartesianPoint>) {
        super()
        this.Points = Points
    }
    /** The points defining the polyline.
    */
    Points: Array<IfcCartesianPoint>
}

export default IfcPolyline
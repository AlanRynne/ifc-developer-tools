// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcLinearPlacement

import { IfcCurve, IfcDistanceExpression, IfcOrientationExpression, IfcAxis2Placement3D, IfcObjectPlacement } from './'

/** IfcLinearPlacement provides a specialization of IfcObjectPlacement in which the placement and axis direction of the object coordinate system is defined by a reference to a curve such as IfcAlignmentCurve.
 */
 class IfcLinearPlacement extends IfcObjectPlacement {
    constructor(PlacementRelTo:IfcObjectPlacement, PlacementMeasuredAlong:IfcCurve, Distance:IfcDistanceExpression, Orientation:IfcOrientationExpression, CartesianPosition:IfcAxis2Placement3D) {
        super(PlacementRelTo)
        this.PlacementMeasuredAlong = PlacementMeasuredAlong
        this.Distance = Distance
        this.Orientation = Orientation
        this.CartesianPosition = CartesianPosition
    }
    /** The curve used as the basis for positioning parameters.
    */
    PlacementMeasuredAlong: IfcCurve
    /** The position relative to the referenced curve.
    */
    Distance: IfcDistanceExpression
    /** Rotation of the object in the horizontal plane and vertical axis (after applying DistanceAlong, OffsetLateral, OffsetVertical, and OffsetLongitudinal).
    */
    Orientation?: IfcOrientationExpression
    /** Indicates the calculated global location and orientation in Cartesian coordinates as a fallback which may be used by applications that do not support linear placement.
    */
    CartesianPosition?: IfcAxis2Placement3D
}

export default IfcLinearPlacement
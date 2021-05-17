// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcLinearPlacementWithInclination

import { IfcAxisLateralInclination, IfcObjectPlacement, IfcCurve, IfcDistanceExpression, IfcOrientationExpression, IfcAxis2Placement3D, IfcLinearPlacement } from './'

/**  */
 class IfcLinearPlacementWithInclination extends IfcLinearPlacement {
    constructor(PlacementRelTo:IfcObjectPlacement, PlacementMeasuredAlong:IfcCurve, Distance:IfcDistanceExpression, Orientation:IfcOrientationExpression, CartesianPosition:IfcAxis2Placement3D, Inclinating:IfcAxisLateralInclination) {
        super(PlacementRelTo, PlacementMeasuredAlong, Distance, Orientation, CartesianPosition)
        this.Inclinating = Inclinating
    }

    Inclinating: IfcAxisLateralInclination
}

export default IfcLinearPlacementWithInclination
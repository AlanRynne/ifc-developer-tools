// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcLinearSpanPlacement

import { IfcPositiveLengthMeasure } from '../types'
import { IfcObjectPlacement, IfcCurve, IfcDistanceExpression, IfcOrientationExpression, IfcAxis2Placement3D, IfcLinearPlacement } from './'

/**  */
 class IfcLinearSpanPlacement extends IfcLinearPlacement {
    constructor(PlacementRelTo:IfcObjectPlacement, PlacementMeasuredAlong:IfcCurve, Distance:IfcDistanceExpression, Orientation:IfcOrientationExpression, CartesianPosition:IfcAxis2Placement3D, Span:IfcPositiveLengthMeasure) {
        super(PlacementRelTo, PlacementMeasuredAlong, Distance, Orientation, CartesianPosition)
        this.Span = Span
    }

    Span: IfcPositiveLengthMeasure
}

export default IfcLinearSpanPlacement
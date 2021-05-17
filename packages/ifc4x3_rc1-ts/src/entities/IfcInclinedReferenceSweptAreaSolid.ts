// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcInclinedReferenceSweptAreaSolid

import { IfcBoolean } from '../types'
import { IfcAxisLateralInclination, IfcProfileDef, IfcAxis2Placement3D, IfcCurve, IfcDistanceExpression, IfcDirectrixDistanceSweptAreaSolid } from './'

/**  */
 class IfcInclinedReferenceSweptAreaSolid extends IfcDirectrixDistanceSweptAreaSolid {
    constructor(SweptArea:IfcProfileDef, Position:IfcAxis2Placement3D, Directrix:IfcCurve, StartDistance:IfcDistanceExpression, EndDistance:IfcDistanceExpression, FixedAxisVertical:IfcBoolean, Inclinating:IfcAxisLateralInclination) {
        super(SweptArea, Position, Directrix, StartDistance, EndDistance)
        this.FixedAxisVertical = FixedAxisVertical
        this.Inclinating = Inclinating
    }

    FixedAxisVertical?: IfcBoolean

    Inclinating: IfcAxisLateralInclination
}

export default IfcInclinedReferenceSweptAreaSolid
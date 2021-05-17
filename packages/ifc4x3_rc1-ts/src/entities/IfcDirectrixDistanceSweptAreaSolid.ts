// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcDirectrixDistanceSweptAreaSolid

import { IfcCurve, IfcDistanceExpression, IfcProfileDef, IfcAxis2Placement3D, IfcSweptAreaSolid } from './'

/**  */
abstract class IfcDirectrixDistanceSweptAreaSolid extends IfcSweptAreaSolid {
    constructor(SweptArea:IfcProfileDef, Position:IfcAxis2Placement3D, Directrix:IfcCurve, StartDistance:IfcDistanceExpression, EndDistance:IfcDistanceExpression) {
        super(SweptArea, Position)
        this.Directrix = Directrix
        this.StartDistance = StartDistance
        this.EndDistance = EndDistance
    }

    Directrix: IfcCurve

    StartDistance?: IfcDistanceExpression

    EndDistance?: IfcDistanceExpression
}

export default IfcDirectrixDistanceSweptAreaSolid
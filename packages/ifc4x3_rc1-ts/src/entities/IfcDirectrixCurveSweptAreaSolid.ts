// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcDirectrixCurveSweptAreaSolid

import { IfcCurve, IfcProfileDef, IfcAxis2Placement3D, IfcSweptAreaSolid } from './'
import { IfcParameterValue } from '../types'

/**  */
abstract class IfcDirectrixCurveSweptAreaSolid extends IfcSweptAreaSolid {
    constructor(SweptArea:IfcProfileDef, Position:IfcAxis2Placement3D, Directrix:IfcCurve, StartParam:IfcParameterValue, EndParam:IfcParameterValue) {
        super(SweptArea, Position)
        this.Directrix = Directrix
        this.StartParam = StartParam
        this.EndParam = EndParam
    }

    Directrix: IfcCurve

    StartParam?: IfcParameterValue

    EndParam?: IfcParameterValue
}

export default IfcDirectrixCurveSweptAreaSolid
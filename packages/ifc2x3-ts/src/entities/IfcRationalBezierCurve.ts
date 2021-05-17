// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRationalBezierCurve

import { IfcCartesianPoint, IfcBezierCurve } from './'
import { IfcBSplineCurveForm } from '../types'

/**  */
 class IfcRationalBezierCurve extends IfcBezierCurve {
    constructor(Degree:number, ControlPointsList:Array<IfcCartesianPoint>, CurveForm:IfcBSplineCurveForm, ClosedCurve:boolean | null, SelfIntersect:boolean | null, WeightsData:Array<number>) {
        super(Degree, ControlPointsList, CurveForm, ClosedCurve, SelfIntersect)
        this.WeightsData = WeightsData
    }

    WeightsData: Array<number>
}

export default IfcRationalBezierCurve
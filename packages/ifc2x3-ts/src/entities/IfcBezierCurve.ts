// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcBezierCurve

import { IfcCartesianPoint, IfcBSplineCurve } from './'
import { IfcBSplineCurveForm } from '../types'

/**  */
 class IfcBezierCurve extends IfcBSplineCurve {
    constructor(Degree:number, ControlPointsList:Array<IfcCartesianPoint>, CurveForm:IfcBSplineCurveForm, ClosedCurve:boolean | null, SelfIntersect:boolean | null) {
        super(Degree, ControlPointsList, CurveForm, ClosedCurve, SelfIntersect)

    }

}

export default IfcBezierCurve
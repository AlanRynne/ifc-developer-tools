// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRationalBSplineCurveWithKnots

import { IfcReal, IfcInteger, IfcBSplineCurveForm, IfcLogical, IfcParameterValue, IfcKnotType } from '../types'
import { IfcCartesianPoint, IfcBSplineCurveWithKnots } from './'

/** A rational B-spline curve with knots is a B-spline curve described in terms of control points and basic functions.
 *
 * It describes weights in addition to the control points defined at the supertype IfcBSplineCurve
 *
 * All weights shall be positive and the curve is given by:where
 */
 class IfcRationalBSplineCurveWithKnots extends IfcBSplineCurveWithKnots {
    constructor(Degree:IfcInteger, ControlPointsList:Array<IfcCartesianPoint>, CurveForm:IfcBSplineCurveForm, ClosedCurve:IfcLogical, SelfIntersect:IfcLogical, KnotMultiplicities:Array<IfcInteger>, Knots:Array<IfcParameterValue>, KnotSpec:IfcKnotType, WeightsData:Array<IfcReal>) {
        super(Degree, ControlPointsList, CurveForm, ClosedCurve, SelfIntersect, KnotMultiplicities, Knots, KnotSpec)
        this.WeightsData = WeightsData
    }
    /** The supplied values of the weights.
    */
    WeightsData: Array<IfcReal>
}

export default IfcRationalBSplineCurveWithKnots
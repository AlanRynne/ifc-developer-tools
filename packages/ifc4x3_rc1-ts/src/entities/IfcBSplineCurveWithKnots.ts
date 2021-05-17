// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcBSplineCurveWithKnots

import { IfcInteger, IfcParameterValue, IfcKnotType, IfcBSplineCurveForm, IfcLogical } from '../types'
import { IfcCartesianPoint, IfcBSplineCurve } from './'

/** The IfcBSplineCurveWithKnots is a spline curve parameterized by spline functions for which the knot values are explicitly given.
 */
 class IfcBSplineCurveWithKnots extends IfcBSplineCurve {
    constructor(Degree:IfcInteger, ControlPointsList:Array<IfcCartesianPoint>, CurveForm:IfcBSplineCurveForm, ClosedCurve:IfcLogical, SelfIntersect:IfcLogical, KnotMultiplicities:Array<IfcInteger>, Knots:Array<IfcParameterValue>, KnotSpec:IfcKnotType) {
        super(Degree, ControlPointsList, CurveForm, ClosedCurve, SelfIntersect)
        this.KnotMultiplicities = KnotMultiplicities
        this.Knots = Knots
        this.KnotSpec = KnotSpec
    }
    /** The multiplicities of the knots.
     * This list defines the number of times each knot in the knots list is to be repeated in constructing the knot array.
    */
    KnotMultiplicities: Array<IfcInteger>
    /** The list of distinct knots used to define the B-spline basis functions.
    */
    Knots: Array<IfcParameterValue>
    /** The description of the knot type.
     * This is for information only.
    */
    KnotSpec: IfcKnotType
}

export default IfcBSplineCurveWithKnots
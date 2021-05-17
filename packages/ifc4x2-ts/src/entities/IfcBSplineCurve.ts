// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcBSplineCurve

import { IfcInteger, IfcBSplineCurveForm, IfcLogical } from '../types'
import { IfcCartesianPoint, IfcBoundedCurve } from './'

/** The IfcBSplineCurve is a spline curve parameterized by spline functions
 *
 * Figure 367 illustrates a B-spline curve.
 */
abstract class IfcBSplineCurve extends IfcBoundedCurve {
    constructor(Degree:IfcInteger, ControlPointsList:Array<IfcCartesianPoint>, CurveForm:IfcBSplineCurveForm, ClosedCurve:IfcLogical, SelfIntersect:IfcLogical) {
        super()
        this.Degree = Degree
        this.ControlPointsList = ControlPointsList
        this.CurveForm = CurveForm
        this.ClosedCurve = ClosedCurve
        this.SelfIntersect = SelfIntersect
    }
    /** The algebraic degree of the basis functions.
    */
    Degree: IfcInteger
    /** The list of control points for the curve.
    */
    ControlPointsList: Array<IfcCartesianPoint>
    /** Used to identify particular types of curve; it is for information only.
    */
    CurveForm: IfcBSplineCurveForm
    /** Indication of whether the curve is closed; it is for information only.
    */
    ClosedCurve: IfcLogical
    /** Indication whether the curve self-intersects or not; it is for information only.
    */
    SelfIntersect: IfcLogical
}

export default IfcBSplineCurve
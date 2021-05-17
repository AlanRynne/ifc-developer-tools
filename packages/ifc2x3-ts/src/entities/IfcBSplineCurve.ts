// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcBSplineCurve

import { IfcCartesianPoint, IfcBoundedCurve } from './'
import { IfcBSplineCurveForm } from '../types'

/** The IfcBSplineCurve is a spline curve parameterized by spline functions
 *
 * Figure 367 illustrates a B-spline curve.
 */
abstract class IfcBSplineCurve extends IfcBoundedCurve {
    constructor(Degree:number, ControlPointsList:Array<IfcCartesianPoint>, CurveForm:IfcBSplineCurveForm, ClosedCurve:boolean | null, SelfIntersect:boolean | null) {
        super()
        this.Degree = Degree
        this.ControlPointsList = ControlPointsList
        this.CurveForm = CurveForm
        this.ClosedCurve = ClosedCurve
        this.SelfIntersect = SelfIntersect
    }
    /** The algebraic degree of the basis functions.
    */
    Degree: number
    /** The list of control points for the curve.
    */
    ControlPointsList: Array<IfcCartesianPoint>
    /** Used to identify particular types of curve; it is for information only.
    */
    CurveForm: IfcBSplineCurveForm
    /** Indication of whether the curve is closed; it is for information only.
    */
    ClosedCurve: boolean | null
    /** Indication whether the curve self-intersects or not; it is for information only.
    */
    SelfIntersect: boolean | null
}

export default IfcBSplineCurve
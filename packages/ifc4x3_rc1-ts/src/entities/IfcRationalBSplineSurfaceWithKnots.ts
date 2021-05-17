// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRationalBSplineSurfaceWithKnots

import { IfcReal, IfcInteger, IfcBSplineSurfaceForm, IfcLogical, IfcParameterValue, IfcKnotType } from '../types'
import { IfcCartesianPoint, IfcBSplineSurfaceWithKnots } from './'

/** A rational B-spline surface with knots is a piecewise parametric rational surface described in terms of control points, and associated weight values
 *
 * The surface is to be interpreted as follows:
 */
 class IfcRationalBSplineSurfaceWithKnots extends IfcBSplineSurfaceWithKnots {
    constructor(UDegree:IfcInteger, VDegree:IfcInteger, ControlPointsList:Array<Array<IfcCartesianPoint>>, SurfaceForm:IfcBSplineSurfaceForm, UClosed:IfcLogical, VClosed:IfcLogical, SelfIntersect:IfcLogical, UMultiplicities:Array<IfcInteger>, VMultiplicities:Array<IfcInteger>, UKnots:Array<IfcParameterValue>, VKnots:Array<IfcParameterValue>, KnotSpec:IfcKnotType, WeightsData:Array<Array<IfcReal>>) {
        super(UDegree, VDegree, ControlPointsList, SurfaceForm, UClosed, VClosed, SelfIntersect, UMultiplicities, VMultiplicities, UKnots, VKnots, KnotSpec)
        this.WeightsData = WeightsData
    }
    /** The weights associated with the control points in the rational case.
    */
    WeightsData: Array<Array<IfcReal>>
}

export default IfcRationalBSplineSurfaceWithKnots
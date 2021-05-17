// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcBSplineSurfaceWithKnots

import { IfcInteger, IfcParameterValue, IfcKnotType, IfcBSplineSurfaceForm, IfcLogical } from '../types'
import { IfcCartesianPoint, IfcBSplineSurface } from './'

/** The IfcBSplineSurfaceWithKnots is a general form of rational or polynomial parametric surface in which the knot values are explicitly given.
 */
 class IfcBSplineSurfaceWithKnots extends IfcBSplineSurface {
    constructor(UDegree:IfcInteger, VDegree:IfcInteger, ControlPointsList:Array<Array<IfcCartesianPoint>>, SurfaceForm:IfcBSplineSurfaceForm, UClosed:IfcLogical, VClosed:IfcLogical, SelfIntersect:IfcLogical, UMultiplicities:Array<IfcInteger>, VMultiplicities:Array<IfcInteger>, UKnots:Array<IfcParameterValue>, VKnots:Array<IfcParameterValue>, KnotSpec:IfcKnotType) {
        super(UDegree, VDegree, ControlPointsList, SurfaceForm, UClosed, VClosed, SelfIntersect)
        this.UMultiplicities = UMultiplicities
        this.VMultiplicities = VMultiplicities
        this.UKnots = UKnots
        this.VKnots = VKnots
        this.KnotSpec = KnotSpec
    }
    /** The multiplicities of the knots in the u parameter direction.
    */
    UMultiplicities: Array<IfcInteger>
    /** The multiplicities of the knots in the v parameter direction.
    */
    VMultiplicities: Array<IfcInteger>
    /** The list of the distinct knots in the u parameter direction.
    */
    UKnots: Array<IfcParameterValue>
    /** The list of the distinct knots in the v parameter direction.
    */
    VKnots: Array<IfcParameterValue>
    /** The description of the knot type.
    */
    KnotSpec: IfcKnotType
}

export default IfcBSplineSurfaceWithKnots
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcBSplineSurface

import { IfcInteger, IfcBSplineSurfaceForm, IfcLogical } from '../types'
import { IfcCartesianPoint, IfcBoundedSurface } from './'

/** The IfcBSplineSurface is a general form of rational or polynomial parametric surface.
 */
abstract class IfcBSplineSurface extends IfcBoundedSurface {
    constructor(UDegree:IfcInteger, VDegree:IfcInteger, ControlPointsList:Array<Array<IfcCartesianPoint>>, SurfaceForm:IfcBSplineSurfaceForm, UClosed:IfcLogical, VClosed:IfcLogical, SelfIntersect:IfcLogical) {
        super()
        this.UDegree = UDegree
        this.VDegree = VDegree
        this.ControlPointsList = ControlPointsList
        this.SurfaceForm = SurfaceForm
        this.UClosed = UClosed
        this.VClosed = VClosed
        this.SelfIntersect = SelfIntersect
    }
    /** Algebraic degree of basis functions in u.
    */
    UDegree: IfcInteger
    /** Algebraic degree of basis functions in v.
    */
    VDegree: IfcInteger
    /** This is a list of lists of control points.
    */
    ControlPointsList: Array<Array<IfcCartesianPoint>>
    /** Indicator of special surface types.
    */
    SurfaceForm: IfcBSplineSurfaceForm
    /** Indication of whether the surface is closed in the u direction; this is for information only.
    */
    UClosed: IfcLogical
    /** Indication of whether the surface is closed in the v direction; this is for information only.
    */
    VClosed: IfcLogical
    /** Flag to indicate whether, or not, surface is self-intersecting; this is for information only.
    */
    SelfIntersect: IfcLogical
}

export default IfcBSplineSurface
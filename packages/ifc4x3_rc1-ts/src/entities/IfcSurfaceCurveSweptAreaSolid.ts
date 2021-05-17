// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSurfaceCurveSweptAreaSolid

import { IfcSurface, IfcProfileDef, IfcAxis2Placement3D, IfcCurve, IfcDirectrixCurveSweptAreaSolid } from './'
import { IfcParameterValue } from '../types'

/** The IfcSurfaceCurveSweptAreaSolid is the result of sweeping an area along a directrix that lies on a reference surface.
 *
 * The swept area is provided by a subtype of IfcProfileDef.
 *
 * The profile is placed by an implicit cartesian transformation operator at the start point of the sweep, where the profile normal agrees to the tangent of the directrix at this point, and the profile's x-axis agrees to the surface normal.
 *
 * At any point along the directrix, the swept profile origin lies on the directrix, the profile's normal points towards the tangent of the directrix, and the profile's x-axis is identical to the surface normal at this point
 *
 * The Directrix and the ReferenceSurface are positioned within the object coordinate system.
 *
 * The start of the sweeping operation is at the StartParam, the parameter value is provided based on the curve parameterization.
 *
 * If no StartParam is provided the start defaults to the begin of the directrix.
 *
 * The end of the sweeping operation is at the EndParam, the parameter value is provided based on the curve parameterization.
 *
 * If no EndParam is provided the end defaults to the end of the directrix.
 *
 * The geometric shape of the solid is not dependent upon the curve parameterization; the volume depends upon the area swept and the length of the Directrix
 *
 * At any point of the directrix, a plane can be constructed.
 *
 * The origin of the position coordinate system of the implicit plane lies at the directrix.
 *
 * The Axis3 (the z-axis, or normal) of the position coordinate system is identical to the tangent of the directrix at this point, the Axis1 (the x axis, or u) of the position coordinate system is identical to the normal of the reference surface at this point.
 *
 * The Axis2 (the y axis, or v) is constructed
 *
 * The resulting body of the swept solid is not repositioned if the inherited Position attribute is omitted.
 *
 * Otherwise the coordinate system established by the Position attribute is used to reposition the body relative to the object coordinate system.
 *
 * Informal Propositions:
 */
 class IfcSurfaceCurveSweptAreaSolid extends IfcDirectrixCurveSweptAreaSolid {
    constructor(SweptArea:IfcProfileDef, Position:IfcAxis2Placement3D, Directrix:IfcCurve, StartParam:IfcParameterValue, EndParam:IfcParameterValue, ReferenceSurface:IfcSurface) {
        super(SweptArea, Position, Directrix, StartParam, EndParam)
        this.ReferenceSurface = ReferenceSurface
    }
    /** The surface containing the Directrix.
    */
    ReferenceSurface: IfcSurface
}

export default IfcSurfaceCurveSweptAreaSolid
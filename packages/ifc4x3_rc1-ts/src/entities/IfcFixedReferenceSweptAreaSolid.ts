// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcFixedReferenceSweptAreaSolid

import { IfcDirection, IfcProfileDef, IfcAxis2Placement3D, IfcCurve, IfcDirectrixCurveSweptAreaSolid } from './'
import { IfcParameterValue } from '../types'

/** An IfcFixedReferenceSweptAreaSolid is a type of swept area solid which is the result of sweeping an area along a Directrix.
 *
 * The swept area is provided by a subtype of IfcProfileDef.
 *
 * The profile is placed by an implicit cartesian transformation operator at the start point of the sweep, where the profile normal agrees to the tangent of the directrix at this point, and the profile's x-axis agrees to the FixedReference direction.
 *
 * The orientation of the curve during the sweeping operation is controlled by the FixedReference direction
 *
 * The SweptArea is swept along the Directrix in such a way that the origin of the local coordinate system used to define the SweptArea is on the Directrix and the local X axis is in the direction of the projection of FixedReference onto the normal plane to the directrix at this point.
 *
 * The resulting solid has the property that the cross section of the surface by the normal plane to the Directrix at any point is a copy of the SweptArea.
 *
 * The resulting swept solid is placed by the Position coordinate system
 *
 * The Directrix and the ReferenceSurface are positioned within the object coordinate system.
 *
 * The start of the sweeping operation is at the StartParam, the parameter value is provided based on the curve parameterization.
 *
 * If no StartParam is provided the start defaults to the begin of the directrix.
 *
 * The end of the sweeping operation is at the EndParam, the parameter value is provided based on the curve parameterization.
 *
 * If no EndParam is provided the end defaults to the end of the directrix
 *
 * The orientation of the SweptArea as it sweeps along the Directrix is precisely defined by a CartesianTransformationOperator3d with attributes:The remaining attributes are defaulted to define a corresponding transformation matrix T(u), which varies with the Directrix parameter u.Informal Propositions:
 */
 class IfcFixedReferenceSweptAreaSolid extends IfcDirectrixCurveSweptAreaSolid {
    constructor(SweptArea:IfcProfileDef, Position:IfcAxis2Placement3D, Directrix:IfcCurve, StartParam:IfcParameterValue, EndParam:IfcParameterValue, FixedReference:IfcDirection) {
        super(SweptArea, Position, Directrix, StartParam, EndParam)
        this.FixedReference = FixedReference
    }
    /** The direction providing the fixed axis1 (x-axis) direction for orienting the swept area during the sweeping operation along the Directrix.
    */
    FixedReference: IfcDirection
}

export default IfcFixedReferenceSweptAreaSolid
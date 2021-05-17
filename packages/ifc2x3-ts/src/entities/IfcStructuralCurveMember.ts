// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStructuralCurveMember

import { IfcStructuralCurveTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcStructuralMember } from './'

/** Instances of IfcStructuralCurveMember describe edge members, i.e. structural analysis idealizations of beams, columns, rods etc.. Curve members may be straight or curved
 *
 * Coordinate Systems:See definitions at IfcStructuralItem.
 *
 * The local coordinate system is established by the reference curve given by topology representation and by the attribute Axis.
 *
 * The local x axis is parallel with the tangent on the reference curve.
 *
 * The local z axis is located in the surface which is created by sweeping Axis along the reference curve and is directed according to Axis.
 *
 * The local y axis is directed such that x,y,z form a right-handed Cartesian coordinate system.
 */
 class IfcStructuralCurveMember extends IfcStructuralMember {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, PredefinedType:IfcStructuralCurveTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation)
        this.PredefinedType = PredefinedType
    }
    /** Type of member with respect to its load carrying behavior in this analysis idealization.
    */
    PredefinedType: IfcStructuralCurveTypeEnum
}

export default IfcStructuralCurveMember
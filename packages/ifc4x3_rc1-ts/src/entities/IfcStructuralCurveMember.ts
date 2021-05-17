// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStructuralCurveMember

import { IfcStructuralCurveMemberTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcDirection, IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcStructuralMember } from './'

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
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, PredefinedType:IfcStructuralCurveMemberTypeEnum, Axis:IfcDirection) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation)
        this.PredefinedType = PredefinedType
        this.Axis = Axis
    }
    /** Type of member with respect to its load carrying behavior in this analysis idealization.
    */
    PredefinedType: IfcStructuralCurveMemberTypeEnum
    /** Direction which is used in the definition of the local z axis.
     * Axis is specified relative to the so-called global coordinate system, i.e. the SELF\IfcProduct.ObjectPlacement.
     * It is desirable and usually possible that many instances of IfcStructuralCurveConnection and IfcStructuralCurveMember share a common instance of IfcDirection as their Axis attribute.
    */
    Axis: IfcDirection
}

export default IfcStructuralCurveMember
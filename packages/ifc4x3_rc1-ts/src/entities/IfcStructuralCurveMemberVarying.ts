// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStructuralCurveMemberVarying

import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcStructuralCurveMemberTypeEnum } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcDirection, IfcStructuralCurveMember } from './'

/** This entity describes edge members with varying profile properties.
 *
 * Each instance of IfcStructuralCurveMemberVarying is composed of two or more instances of IfcStructuralCurveMember with differing profile properties.
 *
 * These subordinate members relate to the instance of IfcStructuralCurveMemberVarying by IfcRelAggregates
 *
 * Coordinate Systems:See definitions at IfcStructuralItem and IfcStructuralCurveMember.
 *
 * The local coordinates of the aggregate are derived from those of its parts.
 *
 * Length measures in local x direction of the aggregate depend on continuity and lengths of the parts.
 *
 * The Axis of the aggregate shal be the same as the Axis of the part at the start of the aggregate
 *
 * Material Use DefinitionOnly the individual parts (direct instances of IfcStructuralCurveMember) carry material and profile information.
 */
 class IfcStructuralCurveMemberVarying extends IfcStructuralCurveMember {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, PredefinedType:IfcStructuralCurveMemberTypeEnum, Axis:IfcDirection) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, PredefinedType, Axis)

    }

}

export default IfcStructuralCurveMemberVarying
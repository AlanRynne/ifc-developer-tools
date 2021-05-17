// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcMemberStandardCase

import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier, IfcMemberTypeEnum } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcMember } from './'

/** The standard member, IfcMemberStandardCase, defines a member with certain constraints for the provision of material usage, parameters and with certain constraints for the geometric representation.
 *
 * The IfcMemberStandardCase handles all cases of members, that:
 */
 class IfcMemberStandardCase extends IfcMember {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcMemberTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag, PredefinedType)

    }

}

export default IfcMemberStandardCase
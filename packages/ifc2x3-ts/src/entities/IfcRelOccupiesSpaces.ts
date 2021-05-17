// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelOccupiesSpaces

import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcObjectTypeEnum } from '../types'
import { IfcOwnerHistory, IfcObjectDefinition, IfcActor, IfcActorRole, IfcRelAssignsToActor } from './'

/**  */
 class IfcRelOccupiesSpaces extends IfcRelAssignsToActor {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatedObjects:Array<IfcObjectDefinition>, RelatedObjectsType:IfcObjectTypeEnum, RelatingActor:IfcActor, ActingRole:IfcActorRole) {
        super(GlobalId, OwnerHistory, Name, Description, RelatedObjects, RelatedObjectsType, RelatingActor, ActingRole)

    }

}

export default IfcRelOccupiesSpaces
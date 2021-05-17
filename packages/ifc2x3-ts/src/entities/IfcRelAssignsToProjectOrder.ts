// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelAssignsToProjectOrder

import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcObjectTypeEnum } from '../types'
import { IfcOwnerHistory, IfcObjectDefinition, IfcControl, IfcRelAssignsToControl } from './'

/**  */
 class IfcRelAssignsToProjectOrder extends IfcRelAssignsToControl {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatedObjects:Array<IfcObjectDefinition>, RelatedObjectsType:IfcObjectTypeEnum, RelatingControl:IfcControl) {
        super(GlobalId, OwnerHistory, Name, Description, RelatedObjects, RelatedObjectsType, RelatingControl)

    }

}

export default IfcRelAssignsToProjectOrder
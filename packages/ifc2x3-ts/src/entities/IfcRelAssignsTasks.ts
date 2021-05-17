// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelAssignsTasks

import { IfcScheduleTimeControl, IfcOwnerHistory, IfcObjectDefinition, IfcControl, IfcRelAssignsToControl } from './'
import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcObjectTypeEnum } from '../types'

/**  */
 class IfcRelAssignsTasks extends IfcRelAssignsToControl {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatedObjects:Array<IfcObjectDefinition>, RelatedObjectsType:IfcObjectTypeEnum, RelatingControl:IfcControl, TimeForTask:IfcScheduleTimeControl) {
        super(GlobalId, OwnerHistory, Name, Description, RelatedObjects, RelatedObjectsType, RelatingControl)
        this.TimeForTask = TimeForTask
    }

    TimeForTask?: IfcScheduleTimeControl
}

export default IfcRelAssignsTasks
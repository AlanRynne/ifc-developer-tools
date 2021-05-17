// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcOrderAction

import { IfcIdentifier, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcTask } from './'

/**  */
 class IfcOrderAction extends IfcTask {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, TaskId:IfcIdentifier, Status:IfcLabel, WorkMethod:IfcLabel, IsMilestone:boolean, Priority:number, ActionID:IfcIdentifier) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, TaskId, Status, WorkMethod, IsMilestone, Priority)
        this.ActionID = ActionID
    }

    ActionID: IfcIdentifier
}

export default IfcOrderAction
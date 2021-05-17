// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcMove

import { IfcSpatialStructureElement, IfcOwnerHistory, IfcTask } from './'
import { IfcText, IfcGloballyUniqueId, IfcLabel, IfcIdentifier } from '../types'

/**  */
 class IfcMove extends IfcTask {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, TaskId:IfcIdentifier, Status:IfcLabel, WorkMethod:IfcLabel, IsMilestone:boolean, Priority:number, MoveFrom:IfcSpatialStructureElement, MoveTo:IfcSpatialStructureElement, PunchList:Array<IfcText>) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, TaskId, Status, WorkMethod, IsMilestone, Priority)
        this.MoveFrom = MoveFrom
        this.MoveTo = MoveTo
        this.PunchList = PunchList
    }

    MoveFrom: IfcSpatialStructureElement

    MoveTo: IfcSpatialStructureElement

    PunchList?: Array<IfcText>
}

export default IfcMove
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcWorkSchedule

import { IfcWorkScheduleTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier, IfcDateTime, IfcDuration } from '../types'
import { IfcOwnerHistory, IfcPerson, IfcWorkControl } from './'

/** An IfcWorkSchedule represents a task schedule of a work plan, which in turn can contain a set of schedules for different purposes.
 *
 * Declaration Use Definition IfcWorkSchedule can reference a project (the single IfcProject instance) via IfcRelDeclares.
 *
 * Figure 148 shows the backbone structure of a work schedule that defines (1) a context through IfcRelDeclares (not necessarily the project) and (2) controls tasks (typically the schedule summary task) and resources.
 *
 * Please note that a work calendar shall be assigned to the summary task and not the work schedule.
 *
 * If an assigned IfcTask is a root-level task, such task must be declared on the IfcProject using the IfcRelDeclares relationship.
 */
 class IfcWorkSchedule extends IfcWorkControl {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, Identification:IfcIdentifier, CreationDate:IfcDateTime, Creators:Array<IfcPerson>, Purpose:IfcLabel, Duration:IfcDuration, TotalFloat:IfcDuration, StartTime:IfcDateTime, FinishTime:IfcDateTime, PredefinedType:IfcWorkScheduleTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, Identification, CreationDate, Creators, Purpose, Duration, TotalFloat, StartTime, FinishTime)
        this.PredefinedType = PredefinedType
    }
    /** Identifies the predefined types of a work schedule from which the type required may be set.
    */
    PredefinedType?: IfcWorkScheduleTypeEnum
}

export default IfcWorkSchedule
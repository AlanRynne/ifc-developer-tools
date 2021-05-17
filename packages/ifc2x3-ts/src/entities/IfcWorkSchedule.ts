// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcWorkSchedule

import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier, IfcDateTimeSelect, IfcTimeMeasure, IfcWorkControlTypeEnum } from '../types'
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
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, Identifier:IfcIdentifier, CreationDate:IfcDateTimeSelect, Creators:Array<IfcPerson>, Purpose:IfcLabel, Duration:IfcTimeMeasure, TotalFloat:IfcTimeMeasure, StartTime:IfcDateTimeSelect, FinishTime:IfcDateTimeSelect, WorkControlType:IfcWorkControlTypeEnum, UserDefinedControlType:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, Identifier, CreationDate, Creators, Purpose, Duration, TotalFloat, StartTime, FinishTime, WorkControlType, UserDefinedControlType)

    }

}

export default IfcWorkSchedule
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcWorkPlan

import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier, IfcDateTimeSelect, IfcTimeMeasure, IfcWorkControlTypeEnum } from '../types'
import { IfcOwnerHistory, IfcPerson, IfcWorkControl } from './'

/** An IfcWorkPlan represents work plans in a construction or a facilities management project.
 *
 * A work plan contains a set of work schedules for different purposes (including construction and facilities management).
 *
 * Contained work schedules are defined through the IfcRelAggregates relationship.
 *
 * Through inheritance from IfcWorkControl it is also possible to define references to activities (for example, IfcTask) and resources used in the work plan.
 *
 * A work plan has information such as start date, finish date, total free float, and so on.
 *
 * IfcWorkPlan can also refer to the construction project represented by the single IfcProject instance (please also check the definition of IfcWorkControl).
 *
 * Figure 147 shows the backbone structure of a work plan that defines (1) contained work schedules through IfcRelAggregates and (2), if not assigned otherwise to contained work schedules, assigned tasks and resources through IfcRelAssignsToControl.
 *
 * If an assigned IfcTask is a root-level task, such task must be declared on the IfcProject using the IfcRelDeclares relationship.
 */
 class IfcWorkPlan extends IfcWorkControl {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, Identifier:IfcIdentifier, CreationDate:IfcDateTimeSelect, Creators:Array<IfcPerson>, Purpose:IfcLabel, Duration:IfcTimeMeasure, TotalFloat:IfcTimeMeasure, StartTime:IfcDateTimeSelect, FinishTime:IfcDateTimeSelect, WorkControlType:IfcWorkControlTypeEnum, UserDefinedControlType:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, Identifier, CreationDate, Creators, Purpose, Duration, TotalFloat, StartTime, FinishTime, WorkControlType, UserDefinedControlType)

    }

}

export default IfcWorkPlan
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcWorkPlan

import { IfcWorkPlanTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier, IfcDateTime, IfcDuration } from '../types'
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
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, Identification:IfcIdentifier, CreationDate:IfcDateTime, Creators:Array<IfcPerson>, Purpose:IfcLabel, Duration:IfcDuration, TotalFloat:IfcDuration, StartTime:IfcDateTime, FinishTime:IfcDateTime, PredefinedType:IfcWorkPlanTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, Identification, CreationDate, Creators, Purpose, Duration, TotalFloat, StartTime, FinishTime)
        this.PredefinedType = PredefinedType
    }
    /** Identifies the predefined types of a work plan from which the type required may be set.
    */
    PredefinedType?: IfcWorkPlanTypeEnum
}

export default IfcWorkPlan
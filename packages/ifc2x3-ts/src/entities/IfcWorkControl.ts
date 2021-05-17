// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcWorkControl

import { IfcIdentifier, IfcDateTimeSelect, IfcLabel, IfcTimeMeasure, IfcWorkControlTypeEnum, IfcGloballyUniqueId, IfcText } from '../types'
import { IfcPerson, IfcOwnerHistory, IfcControl } from './'

/** An IfcWorkControl is an abstract supertype which captures information that is common to both IfcWorkPlan and IfcWorkSchedule.
 *
 * A work control may have resources assigned to it.
 *
 * This is handled by the IfcRelAssignsToControl relationship.
 *
 * A work control should also define a context that gives further information about its usage.
 *
 * If no special context information is required then the IfcProject instance as a global context should be used instead.
 *
 * An explicit link between the work control and the IfcProject via IfcRelDeclares should then be provided.
 *
 * The attribute IfcWorkControl
 *
 * Purpose is used to define the purpose of either a work schedule or a work plan.
 *
 * In the case of IfcWorkPlan, the purpose attribute can be used to determine if the work plan is for cost estimating, task scheduling or some other defined purpose.
 */
abstract class IfcWorkControl extends IfcControl {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, Identifier:IfcIdentifier, CreationDate:IfcDateTimeSelect, Creators:Array<IfcPerson>, Purpose:IfcLabel, Duration:IfcTimeMeasure, TotalFloat:IfcTimeMeasure, StartTime:IfcDateTimeSelect, FinishTime:IfcDateTimeSelect, WorkControlType:IfcWorkControlTypeEnum, UserDefinedControlType:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType)
        this.Identifier = Identifier
        this.CreationDate = CreationDate
        this.Creators = Creators
        this.Purpose = Purpose
        this.Duration = Duration
        this.TotalFloat = TotalFloat
        this.StartTime = StartTime
        this.FinishTime = FinishTime
        this.WorkControlType = WorkControlType
        this.UserDefinedControlType = UserDefinedControlType
    }
    /** undefined
    */
    Identifier: IfcIdentifier
    /** The date that the plan is created.
    */
    CreationDate: IfcDateTimeSelect
    /** The authors of the work plan.
    */
    Creators?: Array<IfcPerson>
    /** A description of the purpose of the work schedule.
    */
    Purpose?: IfcLabel
    /** The total duration of the entire work schedule.
    */
    Duration?: IfcTimeMeasure
    /** The total time float of the entire work schedule.
    */
    TotalFloat?: IfcTimeMeasure
    /** The start time of the schedule.
    */
    StartTime: IfcDateTimeSelect
    /** The finish time of the schedule.
    */
    FinishTime?: IfcDateTimeSelect
    /** undefined
    */
    WorkControlType?: IfcWorkControlTypeEnum
    /** undefined
    */
    UserDefinedControlType?: IfcLabel
}

export default IfcWorkControl
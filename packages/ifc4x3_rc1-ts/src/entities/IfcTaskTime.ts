// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTaskTime

import { IfcTaskDurationEnum, IfcDuration, IfcDateTime, IfcBoolean, IfcPositiveRatioMeasure, IfcLabel, IfcDataOriginEnum } from '../types'
import { IfcSchedulingTime } from './'

/** IfcTaskTime captures the time-related information about a task including the different types (actual or scheduled) of starting and ending times
 *
 * All given values should be provided by the application; the IFC schema does not deal with dependencies between task time values.
 *
 * There is also no consistency check through where rules that guarantee a meaningful population of time values.
 *
 * Thus, an application is responsible to provide reasonable values and, if an application receives task times, has to make consistency checks by their own
 *
 * IfcTaskTime furthermore provides a generic mechanism to differentiate between user given time values and time values derived from user given time values and other constraints such as work calendars and assigned resources.
 */
 class IfcTaskTime extends IfcSchedulingTime {
    constructor(Name:IfcLabel, DataOrigin:IfcDataOriginEnum, UserDefinedDataOrigin:IfcLabel, DurationType:IfcTaskDurationEnum, ScheduleDuration:IfcDuration, ScheduleStart:IfcDateTime, ScheduleFinish:IfcDateTime, EarlyStart:IfcDateTime, EarlyFinish:IfcDateTime, LateStart:IfcDateTime, LateFinish:IfcDateTime, FreeFloat:IfcDuration, TotalFloat:IfcDuration, IsCritical:IfcBoolean, StatusTime:IfcDateTime, ActualDuration:IfcDuration, ActualStart:IfcDateTime, ActualFinish:IfcDateTime, RemainingTime:IfcDuration, Completion:IfcPositiveRatioMeasure) {
        super(Name, DataOrigin, UserDefinedDataOrigin)
        this.DurationType = DurationType
        this.ScheduleDuration = ScheduleDuration
        this.ScheduleStart = ScheduleStart
        this.ScheduleFinish = ScheduleFinish
        this.EarlyStart = EarlyStart
        this.EarlyFinish = EarlyFinish
        this.LateStart = LateStart
        this.LateFinish = LateFinish
        this.FreeFloat = FreeFloat
        this.TotalFloat = TotalFloat
        this.IsCritical = IsCritical
        this.StatusTime = StatusTime
        this.ActualDuration = ActualDuration
        this.ActualStart = ActualStart
        this.ActualFinish = ActualFinish
        this.RemainingTime = RemainingTime
        this.Completion = Completion
    }
    /** Enables to specify the type of duration values for ScheduleDuration, ActualDuration and RemainingTime.
     * The duration type is either work time or elapsed time.
    */
    DurationType?: IfcTaskDurationEnum
    /** The amount of time which is scheduled for completion of a task.
     * The value might be measured or somehow calculated, which is defined by ScheduleDataOrigin.
     * The value is either given as elapsed time or work time, which is defined by DurationType.
     * Scheduled Duration may be calculated as the time from scheduled start date to scheduled finish date.
    */
    ScheduleDuration?: IfcDuration
    /** The date on which a task is scheduled to be started.
     * The value might be measured or somehow calculated, which is defined by ScheduleDataOrigin.
     * The scheduled start date must be greater than or equal to the earliest start date.
    */
    ScheduleStart?: IfcDateTime
    /** The date on which a task is scheduled to be finished.
     * The value might be measured or somehow calculated, which is defined by ScheduleDataOrigin.
     * The scheduled finish date must be greater than or equal to the earliest finish date.
    */
    ScheduleFinish?: IfcDateTime
    /** The earliest date on which a task can be started.
     * It is a calculated value.
    */
    EarlyStart?: IfcDateTime
    /** The earliest date on which a task can be finished.
     * It is a calculated value.
    */
    EarlyFinish?: IfcDateTime
    /** The latest date on which a task can be started.
     * It is a calculated value.
    */
    LateStart?: IfcDateTime
    /** The latest date on which a task can be finished.
     * It is a calculated value.
    */
    LateFinish?: IfcDateTime
    /** The amount of time during which the start or finish of a task may be varied without any effect on the overall programme of work.
     * It is a calculated elapsed time value.
    */
    FreeFloat?: IfcDuration
    /** The difference between the duration available to carry out a task and the scheduled duration of the task.
     * It is a calculated elapsed time value.
     * Total Float time may be calculated as being the difference between the scheduled duration of a task and the available duration from earliest start to latest finish.
     * Float time may be either positive, zero or negative.
     * Where it is zero or negative, the task becomes critical.
    */
    TotalFloat?: IfcDuration
    /** A flag which identifies whether a scheduled task is a critical item within the programme.
     * A task becomes critical when the float time becomes zero or negative.
    */
    IsCritical?: IfcBoolean
    /** The date or time at which the status of the tasks within the schedule is analyzed.
    */
    StatusTime?: IfcDateTime
    /** The actual duration of the task.
     * It is a measured value.
     * The value is either given as elapsed time or work time, which is defined by DurationType.
    */
    ActualDuration?: IfcDuration
    /** The date on which a task is actually started.
     * It is a measured value.
     * The scheduled start date must be greater than or equal to the earliest start date.
     * No constraint is applied to the actual start date with respect to the scheduled start date since a task may be started earlier than had originally been scheduled if circumstances allow.
    */
    ActualStart?: IfcDateTime
    /** The date on which a task is actually finished.
    */
    ActualFinish?: IfcDateTime
    /** The amount of time remaining to complete a task.
     * It is a predicted value.
     * The value is either given as elapsed time or work time, which is defined by DurationType.
     * The time remaining in which to complete a task may be determined both for tasks which have not yet started and those which have.
     * Remaining time for a task not yet started has the same value as the scheduled duration.
     * For a task already started, remaining time is calculated as the difference between the scheduled finish and the point of analysis.
    */
    RemainingTime?: IfcDuration
    /** The extent of completion expressed as a ratio or percentage.
     * It is a measured value.
    */
    Completion?: IfcPositiveRatioMeasure
}

export default IfcTaskTime
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcResourceTime

import { IfcDuration, IfcPositiveRatioMeasure, IfcDateTime, IfcLabel, IfcBoolean, IfcDataOriginEnum } from '../types'
import { IfcSchedulingTime } from './'

/** IfcResourceTime captures the time-related information about a construction resource.
 */
 class IfcResourceTime extends IfcSchedulingTime {
    constructor(Name:IfcLabel, DataOrigin:IfcDataOriginEnum, UserDefinedDataOrigin:IfcLabel, ScheduleWork:IfcDuration, ScheduleUsage:IfcPositiveRatioMeasure, ScheduleStart:IfcDateTime, ScheduleFinish:IfcDateTime, ScheduleContour:IfcLabel, LevelingDelay:IfcDuration, IsOverAllocated:IfcBoolean, StatusTime:IfcDateTime, ActualWork:IfcDuration, ActualUsage:IfcPositiveRatioMeasure, ActualStart:IfcDateTime, ActualFinish:IfcDateTime, RemainingWork:IfcDuration, RemainingUsage:IfcPositiveRatioMeasure, Completion:IfcPositiveRatioMeasure) {
        super(Name, DataOrigin, UserDefinedDataOrigin)
        this.ScheduleWork = ScheduleWork
        this.ScheduleUsage = ScheduleUsage
        this.ScheduleStart = ScheduleStart
        this.ScheduleFinish = ScheduleFinish
        this.ScheduleContour = ScheduleContour
        this.LevelingDelay = LevelingDelay
        this.IsOverAllocated = IsOverAllocated
        this.StatusTime = StatusTime
        this.ActualWork = ActualWork
        this.ActualUsage = ActualUsage
        this.ActualStart = ActualStart
        this.ActualFinish = ActualFinish
        this.RemainingWork = RemainingWork
        this.RemainingUsage = RemainingUsage
        this.Completion = Completion
    }
    /** Indicates the total work (e.g. person-hours) allocated to the task on behalf of the resource.
     * Note: this is not necessarily the same as the task duration (IfcTaskTime
     * ScheduleDuration); it may vary according to the resource usage ratio and other resources assigned to the task.
    */
    ScheduleWork?: IfcDuration
    /** Indicates the amount of the resource used concurrently.
     * For example, 100% means 1 worker, 300% means 3 workers, 50% means half of 1 worker's time for scenarios where multitasking is feasible.
     * If not provided, then the usage ratio is considered to be 100%.
    */
    ScheduleUsage?: IfcPositiveRatioMeasure
    /** Indicates the time when the resource is scheduled to start working.
    */
    ScheduleStart?: IfcDateTime
    /** Indicates the time when the resource is scheduled to finish working.
    */
    ScheduleFinish?: IfcDateTime
    /** Indicates how a resource should be leveled over time by adjusting the resource usage according to a specified curve.
     * Standard values include: 'Flat', 'BackLoaded', 'FrontLoaded', 'DoublePeak', 'EarlyPeak', 'LatePeak', 'Bell', and 'Turtle'.
     * Custom values may specify a custom name or formula.
    */
    ScheduleContour?: IfcLabel
    /** Indicates a delay in the ScheduleStart caused by leveling.
    */
    LevelingDelay?: IfcDuration
    /** Indicates that the resource is scheduled in excess of its capacity.
    */
    IsOverAllocated?: IfcBoolean
    /** Indicates the date and time for which status values are applicable; particularly completion, actual, and remaining values.
     * If values are time-phased (the referencing IfcConstructionResource has associated time series values for attributes), then the status values may be determined from such time-phased data as of the StatusTime.
    */
    StatusTime?: IfcDateTime
    /** Indicates the actual work performed by the resource as of the StatusTime.
    */
    ActualWork?: IfcDuration
    /** Indicates the actual amount of the resource used concurrently.
    */
    ActualUsage?: IfcPositiveRatioMeasure
    /** Indicates the time when the resource actually started working.
    */
    ActualStart?: IfcDateTime
    /** Indicates the time when the resource actually finished working.
    */
    ActualFinish?: IfcDateTime
    /** Indicates the work remaining to be completed by the resource.
    */
    RemainingWork?: IfcDuration
    /** 
    */
    RemainingUsage?: IfcPositiveRatioMeasure
    /** Indicates the percent completion of this resource.
     * If the resource is assigned to a task, then indicates completion of the task on behalf of the resource; if the resource is partitioned into sub-allocations, then indicates overall completion of sub-allocations.
    */
    Completion?: IfcPositiveRatioMeasure
}

export default IfcResourceTime
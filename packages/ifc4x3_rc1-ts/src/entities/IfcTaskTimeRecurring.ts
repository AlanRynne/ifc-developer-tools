// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTaskTimeRecurring

import { IfcRecurrencePattern, IfcTaskTime } from './'
import { IfcLabel, IfcDataOriginEnum, IfcTaskDurationEnum, IfcDuration, IfcDateTime, IfcBoolean, IfcPositiveRatioMeasure } from '../types'

/** IfcTaskTimeRecurring is a recurring instance of IfcTaskTime for handling regularly scheduled or repetitive tasks.
 */
 class IfcTaskTimeRecurring extends IfcTaskTime {
    constructor(Name:IfcLabel, DataOrigin:IfcDataOriginEnum, UserDefinedDataOrigin:IfcLabel, DurationType:IfcTaskDurationEnum, ScheduleDuration:IfcDuration, ScheduleStart:IfcDateTime, ScheduleFinish:IfcDateTime, EarlyStart:IfcDateTime, EarlyFinish:IfcDateTime, LateStart:IfcDateTime, LateFinish:IfcDateTime, FreeFloat:IfcDuration, TotalFloat:IfcDuration, IsCritical:IfcBoolean, StatusTime:IfcDateTime, ActualDuration:IfcDuration, ActualStart:IfcDateTime, ActualFinish:IfcDateTime, RemainingTime:IfcDuration, Completion:IfcPositiveRatioMeasure, Recurrence:IfcRecurrencePattern) {
        super(Name, DataOrigin, UserDefinedDataOrigin, DurationType, ScheduleDuration, ScheduleStart, ScheduleFinish, EarlyStart, EarlyFinish, LateStart, LateFinish, FreeFloat, TotalFloat, IsCritical, StatusTime, ActualDuration, ActualStart, ActualFinish, RemainingTime, Completion)
        this.Recurrence = Recurrence
    }
    /** 
    */
    Recurrence: IfcRecurrencePattern
}

export default IfcTaskTimeRecurring
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcScheduleTimeControl

import { IfcDateTimeSelect, IfcTimeMeasure, IfcPositiveRatioMeasure, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcControl } from './'

/**  */
 class IfcScheduleTimeControl extends IfcControl {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ActualStart:IfcDateTimeSelect, EarlyStart:IfcDateTimeSelect, LateStart:IfcDateTimeSelect, ScheduleStart:IfcDateTimeSelect, ActualFinish:IfcDateTimeSelect, EarlyFinish:IfcDateTimeSelect, LateFinish:IfcDateTimeSelect, ScheduleFinish:IfcDateTimeSelect, ScheduleDuration:IfcTimeMeasure, ActualDuration:IfcTimeMeasure, RemainingTime:IfcTimeMeasure, FreeFloat:IfcTimeMeasure, TotalFloat:IfcTimeMeasure, IsCritical:boolean, StatusTime:IfcDateTimeSelect, StartFloat:IfcTimeMeasure, FinishFloat:IfcTimeMeasure, Completion:IfcPositiveRatioMeasure) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType)
        this.ActualStart = ActualStart
        this.EarlyStart = EarlyStart
        this.LateStart = LateStart
        this.ScheduleStart = ScheduleStart
        this.ActualFinish = ActualFinish
        this.EarlyFinish = EarlyFinish
        this.LateFinish = LateFinish
        this.ScheduleFinish = ScheduleFinish
        this.ScheduleDuration = ScheduleDuration
        this.ActualDuration = ActualDuration
        this.RemainingTime = RemainingTime
        this.FreeFloat = FreeFloat
        this.TotalFloat = TotalFloat
        this.IsCritical = IsCritical
        this.StatusTime = StatusTime
        this.StartFloat = StartFloat
        this.FinishFloat = FinishFloat
        this.Completion = Completion
    }

    ActualStart?: IfcDateTimeSelect

    EarlyStart?: IfcDateTimeSelect

    LateStart?: IfcDateTimeSelect

    ScheduleStart?: IfcDateTimeSelect

    ActualFinish?: IfcDateTimeSelect

    EarlyFinish?: IfcDateTimeSelect

    LateFinish?: IfcDateTimeSelect

    ScheduleFinish?: IfcDateTimeSelect

    ScheduleDuration?: IfcTimeMeasure

    ActualDuration?: IfcTimeMeasure

    RemainingTime?: IfcTimeMeasure

    FreeFloat?: IfcTimeMeasure

    TotalFloat?: IfcTimeMeasure

    IsCritical?: boolean

    StatusTime?: IfcDateTimeSelect

    StartFloat?: IfcTimeMeasure

    FinishFloat?: IfcTimeMeasure

    Completion?: IfcPositiveRatioMeasure
}

export default IfcScheduleTimeControl
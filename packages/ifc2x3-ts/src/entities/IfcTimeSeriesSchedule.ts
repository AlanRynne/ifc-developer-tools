// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTimeSeriesSchedule

import { IfcDateTimeSelect, IfcTimeSeriesScheduleTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcTimeSeries, IfcOwnerHistory, IfcControl } from './'

/**  */
 class IfcTimeSeriesSchedule extends IfcControl {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ApplicableDates:Array<IfcDateTimeSelect>, TimeSeriesScheduleType:IfcTimeSeriesScheduleTypeEnum, TimeSeries:IfcTimeSeries) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType)
        this.ApplicableDates = ApplicableDates
        this.TimeSeriesScheduleType = TimeSeriesScheduleType
        this.TimeSeries = TimeSeries
    }

    ApplicableDates?: Array<IfcDateTimeSelect>

    TimeSeriesScheduleType: IfcTimeSeriesScheduleTypeEnum

    TimeSeries: IfcTimeSeries
}

export default IfcTimeSeriesSchedule
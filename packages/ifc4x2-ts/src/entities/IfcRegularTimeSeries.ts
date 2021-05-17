// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRegularTimeSeries

import { IfcTimeMeasure, IfcLabel, IfcText, IfcDateTime, IfcTimeSeriesDataTypeEnum, IfcDataOriginEnum, IfcUnit } from '../types'
import { IfcTimeSeriesValue, IfcTimeSeries } from './'

/** In a regular time series, the data arrives predictably at predefined intervals.
 *
 * In a regular time series there is no need to store multiple time stamps and the algorithms for analyzing the time series are therefore significantly simpler.
 *
 * Using the start time provided in the supertype, the time step is used to identify the frequency of the occurrences of the list of values.
 */
 class IfcRegularTimeSeries extends IfcTimeSeries {
    constructor(Name:IfcLabel, Description:IfcText, StartTime:IfcDateTime, EndTime:IfcDateTime, TimeSeriesDataType:IfcTimeSeriesDataTypeEnum, DataOrigin:IfcDataOriginEnum, UserDefinedDataOrigin:IfcLabel, Unit:IfcUnit, TimeStep:IfcTimeMeasure, Values:Array<IfcTimeSeriesValue>) {
        super(Name, Description, StartTime, EndTime, TimeSeriesDataType, DataOrigin, UserDefinedDataOrigin, Unit)
        this.TimeStep = TimeStep
        this.Values = Values
    }
    /** A duration of time intervals between values.
    */
    TimeStep: IfcTimeMeasure
    /** The collection of time series values.
    */
    Values: Array<IfcTimeSeriesValue>
}

export default IfcRegularTimeSeries
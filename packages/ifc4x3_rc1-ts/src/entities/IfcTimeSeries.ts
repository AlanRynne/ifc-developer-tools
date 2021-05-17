// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTimeSeries

import { IfcLabel, IfcText, IfcDateTime, IfcTimeSeriesDataTypeEnum, IfcDataOriginEnum, IfcUnit } from '../types'

/** A time series is a set of a time-stamped data entries.
 *
 * It allows a natural association of data collected over intervals of time.
 *
 * Time series can be regular or irregular.
 *
 * In regular time series data arrive predictably at predefined intervals.
 *
 * In irregular time series some or all time stamps do not follow a repetitive pattern and unpredictable bursts of data may arrive at unspecified points in time
 *
 * The modeling of buildings and their performance involves data that are generated and recorded over a period of time.
 *
 * Such data cover a large spectrum, from weather data to schedules of all kinds to status measurements to reporting to everything else that has a time related aspect.
 *
 * Their correct placement in time is essential for their proper understanding and use, and the IfcTimeSeries subtypes provide the appropriate data structures to accommodate these types of data.
 */
abstract class IfcTimeSeries  {
    constructor(Name:IfcLabel, Description:IfcText, StartTime:IfcDateTime, EndTime:IfcDateTime, TimeSeriesDataType:IfcTimeSeriesDataTypeEnum, DataOrigin:IfcDataOriginEnum, UserDefinedDataOrigin:IfcLabel, Unit:IfcUnit) {

        this.Name = Name
        this.Description = Description
        this.StartTime = StartTime
        this.EndTime = EndTime
        this.TimeSeriesDataType = TimeSeriesDataType
        this.DataOrigin = DataOrigin
        this.UserDefinedDataOrigin = UserDefinedDataOrigin
        this.Unit = Unit
    }
    /** An unique name for the time series.
    */
    Name: IfcLabel
    /** A text description of the data that the series represents.
    */
    Description?: IfcText
    /** The start time of a time series.
    */
    StartTime: IfcDateTime
    /** The end time of a time series.
    */
    EndTime: IfcDateTime
    /** The time series data type.
    */
    TimeSeriesDataType: IfcTimeSeriesDataTypeEnum
    /** The origin of a time series data.
    */
    DataOrigin: IfcDataOriginEnum
    /** Value of the data origin if DataOrigin attribute is USERDEFINED.
    */
    UserDefinedDataOrigin?: IfcLabel
    /** The unit to be assigned to all values within the time series.
     * Note that mixing units is not allowed.
     * If the value is not given, the global unit for the type of IfcValue, as defined at IfcProject
     * UnitsInContext is used.
    */
    Unit?: IfcUnit
}

export default IfcTimeSeries
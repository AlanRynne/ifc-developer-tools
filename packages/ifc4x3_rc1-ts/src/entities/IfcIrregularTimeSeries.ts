// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcIrregularTimeSeries

import { IfcIrregularTimeSeriesValue, IfcTimeSeries } from './'
import { IfcLabel, IfcText, IfcDateTime, IfcTimeSeriesDataTypeEnum, IfcDataOriginEnum, IfcUnit } from '../types'

/** In an irregular time series, unpredictable bursts of data arrive at unspecified points in time, or most time stamps cannot be characterized by a repeating pattern.
 */
 class IfcIrregularTimeSeries extends IfcTimeSeries {
    constructor(Name:IfcLabel, Description:IfcText, StartTime:IfcDateTime, EndTime:IfcDateTime, TimeSeriesDataType:IfcTimeSeriesDataTypeEnum, DataOrigin:IfcDataOriginEnum, UserDefinedDataOrigin:IfcLabel, Unit:IfcUnit, Values:Array<IfcIrregularTimeSeriesValue>) {
        super(Name, Description, StartTime, EndTime, TimeSeriesDataType, DataOrigin, UserDefinedDataOrigin, Unit)
        this.Values = Values
    }
    /** The collection of time series values.
    */
    Values: Array<IfcIrregularTimeSeriesValue>
}

export default IfcIrregularTimeSeries
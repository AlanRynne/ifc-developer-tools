// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTimePeriod

import { IfcTime } from '../types'

/** IfcTimePeriod defines a time period given by a start and end time.
 *
 * Both time definitions consider the time zone and allow for the daylight savings offset
 *
 * A time period is defined by a start and an end time, which is defined by IfcTime.
 *
 * The given time period should be within reasonable values (for example, the start time must be before the end time).
 *
 * It is furthermore expected that both time definitions use the same time zone and, if given, the same daylight saving offset.
 */
 class IfcTimePeriod  {
    constructor(StartTime:IfcTime, EndTime:IfcTime) {

        this.StartTime = StartTime
        this.EndTime = EndTime
    }
    /** Start time of the time period.
    */
    StartTime: IfcTime
    /** End time of the time period.
    */
    EndTime: IfcTime
}

export default IfcTimePeriod
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcEventTime

import { IfcDateTime, IfcLabel, IfcDataOriginEnum } from '../types'
import { IfcSchedulingTime } from './'

/** IfcEventTime captures the time-related information about an event including the different types of event dates (i.e. actual, scheduled, early, and late).
 *
 * All given values should be provided by the application, that is, the IFC schema does not deal with dependencies between process time values.
 *
 * At this stage there is also no consistency check through where rules that guarantee a meaningful population of date values.
 *
 * Thus, an application is responsible to provide reasonable values and, if an application receives event dates, has to make consistency checks by their own.
 *
 * IfcEventTime furthermore provides a generic mechanism to differentiate between user given time values and time values derived from user given time values and other constraints such as work calendars and assigned resources (derived from the process graph).
 *
 * The data origin flag is provided as a single attribute applying to all date time related attributes of IfcEventTime.
 */
 class IfcEventTime extends IfcSchedulingTime {
    constructor(Name:IfcLabel, DataOrigin:IfcDataOriginEnum, UserDefinedDataOrigin:IfcLabel, ActualDate:IfcDateTime, EarlyDate:IfcDateTime, LateDate:IfcDateTime, ScheduleDate:IfcDateTime) {
        super(Name, DataOrigin, UserDefinedDataOrigin)
        this.ActualDate = ActualDate
        this.EarlyDate = EarlyDate
        this.LateDate = LateDate
        this.ScheduleDate = ScheduleDate
    }
    /** The date on which an event actually occurs.
     * It is a measured value.
    */
    ActualDate?: IfcDateTime
    /** The earliest date on which an event can occur.
     * It is a calculated value.
    */
    EarlyDate?: IfcDateTime
    /** The latest date on which an event can occur.
     * It is a calculated value.
    */
    LateDate?: IfcDateTime
    /** The date on which an event is scheduled to occur.
     * The value might be measured or somehow calculated, which is defined by ScheduleDataOrigin.
    */
    ScheduleDate?: IfcDateTime
}

export default IfcEventTime
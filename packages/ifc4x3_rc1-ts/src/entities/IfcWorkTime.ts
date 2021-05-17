// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcWorkTime

import { IfcRecurrencePattern, IfcSchedulingTime } from './'
import { IfcDate, IfcLabel, IfcDataOriginEnum } from '../types'

/** IfcWorkTime defines time periods that are used by IfcWorkCalendar for either describing working times or non-working exception times.
 *
 * Besides start and finish dates, a set of time periods can be given by various types of recurrence patterns
 *
 * A work time should have a meaningful name that describes the time periods (for example, working week, holiday name).
 *
 * Non-recurring time periods should have a start date (IfcWorkTime
 *
 * Start) and a finish date (IfcWorkTime.Finish).
 *
 * In that case it is assumed that the time period begins at 0:00 on the start date and ends at 24:00 on the finish date
 *
 * The start and finish date is optional if a recurrence pattern is given (IfcWorkTime.RecurrencePattern).
 *
 * They then restrict never-ending recurrence patterns.
 */
 class IfcWorkTime extends IfcSchedulingTime {
    constructor(Name:IfcLabel, DataOrigin:IfcDataOriginEnum, UserDefinedDataOrigin:IfcLabel, RecurrencePattern:IfcRecurrencePattern, Start:IfcDate, Finish:IfcDate) {
        super(Name, DataOrigin, UserDefinedDataOrigin)
        this.RecurrencePattern = RecurrencePattern
        this.Start = Start
        this.Finish = Finish
    }
    /** Recurrence pattern that defines a time period, which, if given, is valid within the time period defined by IfcWorkTime
     * Start and IfcWorkTime.Finish.
    */
    RecurrencePattern?: IfcRecurrencePattern
    /** Start date of the work time (0:00), that might be further restricted by a recurrence pattern.
    */
    Start?: IfcDate
    /** End date of the work time (24:00), that might be further restricted by a recurrence pattern.
    */
    Finish?: IfcDate
}

export default IfcWorkTime
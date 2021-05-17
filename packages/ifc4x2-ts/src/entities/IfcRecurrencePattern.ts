// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRecurrencePattern

import { IfcRecurrenceTypeEnum, IfcDayInMonthNumber, IfcDayInWeekNumber, IfcMonthInYearNumber, IfcInteger } from '../types'
import { IfcTimePeriod } from './'

/** IfcRecurrencePattern defines repetitive time periods on the basis of regular recurrences such as each Monday in a week, or every third Tuesday in a month.
 *
 * The population of the remaining attributes such as DayComponent, Position, and Interval depend on the specified recurrence type
 *
 * IfcRecurrencePattern supports various recurrence patterns that are differentiated by a type definition (IfcRecurrencePattern
 *
 * RecurrenceType), which is required to provide the meaning of the given values.
 *
 * It can be further constrained by applicable times through specified IfcTimePeriod instances, thus enabling time periods such as between 7:00 and 12:00 and between 13:00 and 17:00 for each of the applicable days, weeks or months.
 */
 class IfcRecurrencePattern  {
    constructor(RecurrenceType:IfcRecurrenceTypeEnum, DayComponent:Array<IfcDayInMonthNumber>, WeekdayComponent:Array<IfcDayInWeekNumber>, MonthComponent:Array<IfcMonthInYearNumber>, Position:IfcInteger, Interval:IfcInteger, Occurrences:IfcInteger, TimePeriods:Array<IfcTimePeriod>) {

        this.RecurrenceType = RecurrenceType
        this.DayComponent = DayComponent
        this.WeekdayComponent = WeekdayComponent
        this.MonthComponent = MonthComponent
        this.Position = Position
        this.Interval = Interval
        this.Occurrences = Occurrences
        this.TimePeriods = TimePeriods
    }
    /** Defines the recurrence type that gives meaning to the used attributes and decides about possible attribute combinations, i.e. what attributes are needed to fully describe the pattern type.
    */
    RecurrenceType: IfcRecurrenceTypeEnum
    /** The position of the specified day in a month.
    */
    DayComponent?: Array<IfcDayInMonthNumber>
    /** The weekday name of the specified day in a week.
    */
    WeekdayComponent?: Array<IfcDayInWeekNumber>
    /** The position of the specified month in a year.
    */
    MonthComponent?: Array<IfcMonthInYearNumber>
    /** The position of the specified component, e.g. the 3rd (position=3) Tuesday (weekday component) in a month.
     * A negative position value is used to define the last position of the component (-1), the next to last position (-2) etc.
    */
    Position?: IfcInteger
    /** An interval can be given according to the pattern type.
     * An interval value of 2 can for instance every two days, weeks, months, years.
     * An empty interval value is regarded as 1.
     * The used interval values should be in a reasonable range, e.g. not 0 or <0.
    */
    Interval?: IfcInteger
    /** Defines the number of occurrences of this pattern, e.g. a weekly event might be defined to occur 5 times before it stops.
    */
    Occurrences?: IfcInteger
    /** List of time periods that are defined by a start and end time of the recurring element (day).
     * The order of the list should reflect the sequence of the time periods.
    */
    TimePeriods?: Array<IfcTimePeriod>
}

export default IfcRecurrencePattern
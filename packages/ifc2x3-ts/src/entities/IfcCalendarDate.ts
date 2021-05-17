// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCalendarDate

import { IfcDayInMonthNumber, IfcMonthInYearNumber, IfcYearNumber } from '../types'

/**  */
 class IfcCalendarDate  {
    constructor(DayComponent:IfcDayInMonthNumber, MonthComponent:IfcMonthInYearNumber, YearComponent:IfcYearNumber) {

        this.DayComponent = DayComponent
        this.MonthComponent = MonthComponent
        this.YearComponent = YearComponent
    }

    DayComponent: IfcDayInMonthNumber

    MonthComponent: IfcMonthInYearNumber

    YearComponent: IfcYearNumber
}

export default IfcCalendarDate
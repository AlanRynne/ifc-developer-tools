// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcDateAndTime

import { IfcCalendarDate, IfcLocalTime } from './'

/**  */
 class IfcDateAndTime  {
    constructor(DateComponent:IfcCalendarDate, TimeComponent:IfcLocalTime) {

        this.DateComponent = DateComponent
        this.TimeComponent = TimeComponent
    }

    DateComponent: IfcCalendarDate

    TimeComponent: IfcLocalTime
}

export default IfcDateAndTime
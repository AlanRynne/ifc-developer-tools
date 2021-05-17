// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcLocalTime

import { IfcHourInDay, IfcMinuteInHour, IfcSecondInMinute, IfcDaylightSavingHour } from '../types'
import { IfcCoordinatedUniversalTimeOffset } from './'

/**  */
 class IfcLocalTime  {
    constructor(HourComponent:IfcHourInDay, MinuteComponent:IfcMinuteInHour, SecondComponent:IfcSecondInMinute, Zone:IfcCoordinatedUniversalTimeOffset, DaylightSavingOffset:IfcDaylightSavingHour) {

        this.HourComponent = HourComponent
        this.MinuteComponent = MinuteComponent
        this.SecondComponent = SecondComponent
        this.Zone = Zone
        this.DaylightSavingOffset = DaylightSavingOffset
    }

    HourComponent: IfcHourInDay

    MinuteComponent?: IfcMinuteInHour

    SecondComponent?: IfcSecondInMinute

    Zone?: IfcCoordinatedUniversalTimeOffset

    DaylightSavingOffset?: IfcDaylightSavingHour
}

export default IfcLocalTime
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCoordinatedUniversalTimeOffset

import { IfcHourInDay, IfcMinuteInHour, IfcAheadOrBehind } from '../types'

/**  */
 class IfcCoordinatedUniversalTimeOffset  {
    constructor(HourOffset:IfcHourInDay, MinuteOffset:IfcMinuteInHour, Sense:IfcAheadOrBehind) {

        this.HourOffset = HourOffset
        this.MinuteOffset = MinuteOffset
        this.Sense = Sense
    }

    HourOffset: IfcHourInDay

    MinuteOffset?: IfcMinuteInHour

    Sense: IfcAheadOrBehind
}

export default IfcCoordinatedUniversalTimeOffset
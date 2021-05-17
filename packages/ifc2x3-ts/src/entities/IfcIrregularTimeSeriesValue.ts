// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcIrregularTimeSeriesValue

import { IfcDateTimeSelect, IfcValue } from '../types'

/** The IfcIrregularTimeSeriesValue describes a value (or set of values) at a particular time point.
 */
 class IfcIrregularTimeSeriesValue  {
    constructor(TimeStamp:IfcDateTimeSelect, ListValues:Array<IfcValue>) {

        this.TimeStamp = TimeStamp
        this.ListValues = ListValues
    }
    /** The specification of the time point.
    */
    TimeStamp: IfcDateTimeSelect
    /** A list of time-series values.
     * At least one value is required.
    */
    ListValues: Array<IfcValue>
}

export default IfcIrregularTimeSeriesValue
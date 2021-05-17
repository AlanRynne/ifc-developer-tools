// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTimeSeriesValue

import { IfcValue } from '../types'

/** A time series value is a list of values that comprise the time series.
 *
 * At least one value must be supplied.
 *
 * Applications are expected to normalize values by applying the following three rules:
 */
 class IfcTimeSeriesValue  {
    constructor(ListValues:Array<IfcValue>) {

        this.ListValues = ListValues
    }
    /** A list of time-series values.
     * At least one value is required.
    */
    ListValues: Array<IfcValue>
}

export default IfcTimeSeriesValue
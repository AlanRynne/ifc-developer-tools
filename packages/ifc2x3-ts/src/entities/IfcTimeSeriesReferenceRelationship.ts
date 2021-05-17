// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTimeSeriesReferenceRelationship

import { IfcTimeSeries } from './'
import { IfcDocumentSelect } from '../types'

/**  */
 class IfcTimeSeriesReferenceRelationship  {
    constructor(ReferencedTimeSeries:IfcTimeSeries, TimeSeriesReferences:Array<IfcDocumentSelect>) {

        this.ReferencedTimeSeries = ReferencedTimeSeries
        this.TimeSeriesReferences = TimeSeriesReferences
    }

    ReferencedTimeSeries: IfcTimeSeries

    TimeSeriesReferences: Array<IfcDocumentSelect>
}

export default IfcTimeSeriesReferenceRelationship
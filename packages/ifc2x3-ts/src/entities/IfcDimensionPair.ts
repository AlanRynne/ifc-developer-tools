// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcDimensionPair

import { IfcLabel, IfcText } from '../types'
import { IfcDraughtingCallout, IfcDraughtingCalloutRelationship } from './'

/**  */
 class IfcDimensionPair extends IfcDraughtingCalloutRelationship {
    constructor(Name:IfcLabel, Description:IfcText, RelatingDraughtingCallout:IfcDraughtingCallout, RelatedDraughtingCallout:IfcDraughtingCallout) {
        super(Name, Description, RelatingDraughtingCallout, RelatedDraughtingCallout)

    }

}

export default IfcDimensionPair
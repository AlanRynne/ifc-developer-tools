// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcDimensionCalloutRelationship

import { IfcLabel, IfcText } from '../types'
import { IfcDraughtingCallout, IfcDraughtingCalloutRelationship } from './'

/**  */
 class IfcDimensionCalloutRelationship extends IfcDraughtingCalloutRelationship {
    constructor(Name:IfcLabel, Description:IfcText, RelatingDraughtingCallout:IfcDraughtingCallout, RelatedDraughtingCallout:IfcDraughtingCallout) {
        super(Name, Description, RelatingDraughtingCallout, RelatedDraughtingCallout)

    }

}

export default IfcDimensionCalloutRelationship
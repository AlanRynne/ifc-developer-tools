// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcDraughtingCalloutRelationship

import { IfcLabel, IfcText } from '../types'
import { IfcDraughtingCallout } from './'

/**  */
 class IfcDraughtingCalloutRelationship  {
    constructor(Name:IfcLabel, Description:IfcText, RelatingDraughtingCallout:IfcDraughtingCallout, RelatedDraughtingCallout:IfcDraughtingCallout) {

        this.Name = Name
        this.Description = Description
        this.RelatingDraughtingCallout = RelatingDraughtingCallout
        this.RelatedDraughtingCallout = RelatedDraughtingCallout
    }

    Name?: IfcLabel

    Description?: IfcText

    RelatingDraughtingCallout: IfcDraughtingCallout

    RelatedDraughtingCallout: IfcDraughtingCallout
}

export default IfcDraughtingCalloutRelationship
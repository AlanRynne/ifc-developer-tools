// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcDraughtingCallout

import { IfcDraughtingCalloutElement } from '../types'
import { IfcGeometricRepresentationItem } from './'

/**  */
 class IfcDraughtingCallout extends IfcGeometricRepresentationItem {
    constructor(Contents:Array<IfcDraughtingCalloutElement>) {
        super()
        this.Contents = Contents
    }

    Contents: Array<IfcDraughtingCalloutElement>
}

export default IfcDraughtingCallout
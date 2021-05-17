// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcExternallyDefinedHatchStyle

import { IfcURIReference, IfcIdentifier, IfcLabel } from '../types'
import { IfcExternalReference } from './'

/** 
 */
 class IfcExternallyDefinedHatchStyle extends IfcExternalReference {
    constructor(Location:IfcURIReference, Identification:IfcIdentifier, Name:IfcLabel) {
        super(Location, Identification, Name)

    }

}

export default IfcExternallyDefinedHatchStyle
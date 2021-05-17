// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcExternallyDefinedSymbol

import { IfcLabel, IfcIdentifier } from '../types'
import { IfcExternalReference } from './'

/**  */
 class IfcExternallyDefinedSymbol extends IfcExternalReference {
    constructor(Location:IfcLabel, ItemReference:IfcIdentifier, Name:IfcLabel) {
        super(Location, ItemReference, Name)

    }

}

export default IfcExternallyDefinedSymbol
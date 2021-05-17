// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcLibraryReference

import { IfcLabel, IfcIdentifier } from '../types'
import { IfcExternalReference } from './'

/** An IfcLibraryReference is a reference into a library of information by Location (provided as a URI).
 *
 * It also provides an optional inherited Identification key to allow more specific references to library sections or tables.
 *
 * The inherited Name attribute allows for a human interpretable identification of the library item.
 *
 * Also, general information on the library from which the reference is taken, is given by the ReferencedLibrary relation which identifies the relevant occurrence of IfcLibraryInformation
 *
 * The ifcLibraryReference additionally provides the capability to handle multilingual library entries.
 *
 * The Language attribute then holds the language tag for the language used by the strings kept in the Name and the Description attribute.
 */
 class IfcLibraryReference extends IfcExternalReference {
    constructor(Location:IfcLabel, ItemReference:IfcIdentifier, Name:IfcLabel) {
        super(Location, ItemReference, Name)

    }

}

export default IfcLibraryReference
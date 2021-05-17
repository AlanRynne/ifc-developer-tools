// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcDocumentReference

import { IfcLabel, IfcIdentifier } from '../types'
import { IfcExternalReference } from './'

/** An IfcDocumentReference is a reference to the location of a document.
 *
 * The reference is given by a system interpretable Location attribute (a URL string) where the document can be found, and an optional inherited internal reference Identification, which refers to a system interpretable position within the document.
 *
 * The optional inherited Name attribute is meant to have meaning for human readers.
 *
 * Optional document metadata can also be captured through reference to IfcDocumentInformation.
 */
 class IfcDocumentReference extends IfcExternalReference {
    constructor(Location:IfcLabel, ItemReference:IfcIdentifier, Name:IfcLabel) {
        super(Location, ItemReference, Name)

    }

}

export default IfcDocumentReference
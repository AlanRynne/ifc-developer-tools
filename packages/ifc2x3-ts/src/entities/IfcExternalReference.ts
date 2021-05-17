// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcExternalReference

import { IfcLabel, IfcIdentifier } from '../types'

/** An IfcExternalReference is the identification of information that is not explicitly represented in the current model or in the project database (as an implementation of the current model).
 *
 * Such information may be contained in classifications, documents or libraries.
 *
 * The IfcExternalReference identifies a particular item, such as a dictionary entry, a classification notation, or a document reference within the external source
 *
 * Only the Location (as a URL) is given to describe the place where the information can be found.
 *
 * Also an optional Identification as a key to allow more specific references (as to sections or tables) is provided.
 *
 * The Identification defines a system interpretable method to identify the relevant part of information at the source.
 *
 * In addition a human interpretable Name can be assigned to identify the information subject, such as a classification code
 *
 * IfcExternalReference is an abstract supertype of all external reference entities.
 */
abstract class IfcExternalReference  {
    constructor(Location:IfcLabel, ItemReference:IfcIdentifier, Name:IfcLabel) {

        this.Location = Location
        this.ItemReference = ItemReference
        this.Name = Name
    }
    /** Location, where the external source (classification, document or library) can be accessed by electronic means.
     * The electronic location is provided as an URI, and would normally be given as an URL location string.
     * IFC4 CHANGE The data type has been changed from IfcLabel to IfcURIReference.
    */
    Location?: IfcLabel
    /** undefined
    */
    ItemReference?: IfcIdentifier
    /** Optional name to further specify the reference.
     * It can provide a human readable identifier (which does not necessarily need to have a counterpart in the internal structure of the document).
    */
    Name?: IfcLabel
}

export default IfcExternalReference
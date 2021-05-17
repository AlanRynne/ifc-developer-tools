// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcExternalReference

import { IfcURIReference, IfcIdentifier, IfcLabel } from '../types'

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
    constructor(Location:IfcURIReference, Identification:IfcIdentifier, Name:IfcLabel) {

        this.Location = Location
        this.Identification = Identification
        this.Name = Name
    }
    /** Location, where the external source (classification, document or library) can be accessed by electronic means.
     * The electronic location is provided as an URI, and would normally be given as an URL location string.
     * IFC4 CHANGE The data type has been changed from IfcLabel to IfcURIReference.
    */
    Location?: IfcURIReference
    /** The Identification provides a unique identifier of the referenced item within the external source (classification, document or library).
     * It may be provided as a key, e.g. a classification notation, like NF2.3 a handle a uuid or guid It may be human readable (such as a key) or not (such as a handle or uuid) depending on the context of its usage (which has to be determined by local agreement).
     * IFC4 CHANGE Attribute renamed from ItemReference for consistency.
    */
    Identification?: IfcIdentifier
    /** Optional name to further specify the reference.
     * It can provide a human readable identifier (which does not necessarily need to have a counterpart in the internal structure of the document).
    */
    Name?: IfcLabel
}

export default IfcExternalReference
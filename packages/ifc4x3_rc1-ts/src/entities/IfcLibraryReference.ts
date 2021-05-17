// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcLibraryReference

import { IfcText, IfcLanguageId, IfcURIReference, IfcIdentifier, IfcLabel } from '../types'
import { IfcLibraryInformation, IfcExternalReference } from './'

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
    constructor(Location:IfcURIReference, Identification:IfcIdentifier, Name:IfcLabel, Description:IfcText, Language:IfcLanguageId, ReferencedLibrary:IfcLibraryInformation) {
        super(Location, Identification, Name)
        this.Description = Description
        this.Language = Language
        this.ReferencedLibrary = ReferencedLibrary
    }
    /** Additional description provided for the library reference.
     * IFC4 CHANGE New attribute added at the end of the attribute list.
    */
    Description?: IfcText
    /** The language in which a library reference is expressed.
     * IFC4 CHANGE New attribute added at the end of the attribute list.
    */
    Language?: IfcLanguageId
    /** The library information that is being referenced.
    */
    ReferencedLibrary?: IfcLibraryInformation
}

export default IfcLibraryReference
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcLibraryInformation

import { IfcLabel, IfcActorSelect, IfcDateTime, IfcURIReference, IfcText } from '../types'
import { IfcExternalInformation } from './'

/** An IfcLibraryInformation describes a library where a library is a structured store of information, normally organized in a manner which allows information lookup through an index or reference value.
 *
 * IfcLibraryInformation provides the library Name and optional Description, Version, VersionDate and Publisher attributes.
 *
 * A Location may be added for electronic access to the library.
 *
 * In a broder sense, IfcLibraryInformation includes the meta data for capture the revision information when checking in library and other data into a revision control system.
 */
 class IfcLibraryInformation extends IfcExternalInformation {
    constructor(Name:IfcLabel, Version:IfcLabel, Publisher:IfcActorSelect, VersionDate:IfcDateTime, Location:IfcURIReference, Description:IfcText) {
        super()
        this.Name = Name
        this.Version = Version
        this.Publisher = Publisher
        this.VersionDate = VersionDate
        this.Location = Location
        this.Description = Description
    }
    /** The name which is used to identify the library.
    */
    Name: IfcLabel
    /** Identifier for the library version used for reference.
    */
    Version?: IfcLabel
    /** Information of the organization that acts as the library publisher.
     * IFC4 CHANGE The data type has been changed to IfcActorSelect.
    */
    Publisher?: IfcActorSelect
    /** Date of the referenced version of the library.
     * IFC4 CHANGE The data type has been changed to IfcDateTime, the date and time string according to ISO8601.
    */
    VersionDate?: IfcDateTime
    /** Resource identifier or locator, provided as URI, URN or URL, of the library information for online references.
     * IFC4 CHANGE New attribute added at the end of the attribute list.
    */
    Location?: IfcURIReference
    /** Additional description provided for the library revision information.
     * IFC4 CHANGE New attribute added at the end of the attribute list.
    */
    Description?: IfcText
}

export default IfcLibraryInformation
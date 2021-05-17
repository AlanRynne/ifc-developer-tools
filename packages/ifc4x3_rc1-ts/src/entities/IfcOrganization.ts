// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcOrganization

import { IfcIdentifier, IfcLabel, IfcText } from '../types'
import { IfcActorRole, IfcAddress } from './'

/** A named and structured grouping with a corporate identity.
 */
 class IfcOrganization  {
    constructor(Identification:IfcIdentifier, Name:IfcLabel, Description:IfcText, Roles:Array<IfcActorRole>, Addresses:Array<IfcAddress>) {

        this.Identification = Identification
        this.Name = Name
        this.Description = Description
        this.Roles = Roles
        this.Addresses = Addresses
    }
    /** Identification of the organization.
    */
    Identification?: IfcIdentifier
    /** The word, or group of words, by which the organization is referred to.
    */
    Name: IfcLabel
    /** Text that relates the nature of the organization.
    */
    Description?: IfcText
    /** Roles played by the organization.
    */
    Roles?: Array<IfcActorRole>
    /** Postal and telecom addresses of an organization.
     * There may be several addresses related to an organization.
    */
    Addresses?: Array<IfcAddress>
}

export default IfcOrganization
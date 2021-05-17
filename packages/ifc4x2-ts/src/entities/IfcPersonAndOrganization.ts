// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPersonAndOrganization

import { IfcPerson, IfcOrganization, IfcActorRole } from './'

/** This entity represents a person acting on behalf of an organization.
 */
 class IfcPersonAndOrganization  {
    constructor(ThePerson:IfcPerson, TheOrganization:IfcOrganization, Roles:Array<IfcActorRole>) {

        this.ThePerson = ThePerson
        this.TheOrganization = TheOrganization
        this.Roles = Roles
    }
    /** The person who is related to the organization.
    */
    ThePerson: IfcPerson
    /** The organization to which the person is related.
    */
    TheOrganization: IfcOrganization
    /** Roles played by the person within the context of an organization.
     * These may differ from the roles in ThePerson
     * Roles which may be asserted without organizational context.
    */
    Roles?: Array<IfcActorRole>
}

export default IfcPersonAndOrganization
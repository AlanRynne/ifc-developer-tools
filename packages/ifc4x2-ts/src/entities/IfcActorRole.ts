// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcActorRole

import { IfcRoleEnum, IfcLabel, IfcText } from '../types'

/** This entity indicates a role which is performed by an actor, either a person, an organization or a person related to an organization.
 */
 class IfcActorRole  {
    constructor(Role:IfcRoleEnum, UserDefinedRole:IfcLabel, Description:IfcText) {

        this.Role = Role
        this.UserDefinedRole = UserDefinedRole
        this.Description = Description
    }
    /** The name of the role played by an actor.
     * If the Role has value USERDEFINED, then the user defined role shall be provided as a value of the attribute UserDefinedRole.
    */
    Role: IfcRoleEnum
    /** Allows for specification of user defined roles beyond the enumeration values provided by Role attribute of type IfcRoleEnum.
     * When a value is provided for attribute UserDefinedRole in parallel the attribute Role shall have enumeration value USERDEFINED.
    */
    UserDefinedRole?: IfcLabel
    /** A textual description relating the nature of the role played by an actor.
    */
    Description?: IfcText
}

export default IfcActorRole
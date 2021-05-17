// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcApprovalActorRelationship

import { IfcActorSelect } from '../types'
import { IfcApproval, IfcActorRole } from './'

/**  */
 class IfcApprovalActorRelationship  {
    constructor(Actor:IfcActorSelect, Approval:IfcApproval, Role:IfcActorRole) {

        this.Actor = Actor
        this.Approval = Approval
        this.Role = Role
    }

    Actor: IfcActorSelect

    Approval: IfcApproval

    Role: IfcActorRole
}

export default IfcApprovalActorRelationship
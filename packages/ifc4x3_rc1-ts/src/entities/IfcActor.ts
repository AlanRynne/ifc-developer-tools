// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcActor

import { IfcActorSelect, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcObject } from './'

/** The IfcActor defines all actors or human agents involved in a project during its full life cycle.
 *
 * It facilitates the use of person and organization definitions in the resource part of the IFC object model.
 *
 * This includes name, address, telecommunication addresses, and roles.
 */
 class IfcActor extends IfcObject {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, TheActor:IfcActorSelect) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType)
        this.TheActor = TheActor
    }
    /** Information about the actor.
    */
    TheActor: IfcActorSelect
}

export default IfcActor
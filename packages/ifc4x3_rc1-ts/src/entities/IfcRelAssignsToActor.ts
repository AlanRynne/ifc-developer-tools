// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelAssignsToActor

import { IfcActor, IfcActorRole, IfcOwnerHistory, IfcObjectDefinition, IfcRelAssigns } from './'
import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcObjectTypeEnum } from '../types'

/** The objectified relationship IfcRelAssignsToActor handles the assignment of objects (subtypes of IfcObject) to an actor (subtypes of IfcActor)
 *
 * The IfcRelAssignsToActor objectified relationship defines a relationship between an IfcActor and one or many objects.
 *
 * A particular role of the actor played in that relationship can be associated.
 *
 * If specified, it takes priority over the role that may be directly assigned to the person or organization
 *
 * Reference to the objects (or single object) on which the actor acts upon in a certain role (if given) is specified in the inherited RelatedObjects attribute.
 */
 class IfcRelAssignsToActor extends IfcRelAssigns {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatedObjects:Array<IfcObjectDefinition>, RelatedObjectsType:IfcObjectTypeEnum, RelatingActor:IfcActor, ActingRole:IfcActorRole) {
        super(GlobalId, OwnerHistory, Name, Description, RelatedObjects, RelatedObjectsType)
        this.RelatingActor = RelatingActor
        this.ActingRole = ActingRole
    }
    /** Reference to the information about the actor.
     * It comprises the information about the person or organization and its addresses.
    */
    RelatingActor: IfcActor
    /** Role of the actor played within the context of the assignment to the object(s).
    */
    ActingRole?: IfcActorRole
}

export default IfcRelAssignsToActor
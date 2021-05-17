// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcOccupant

import { IfcOccupantTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcActorSelect } from '../types'
import { IfcOwnerHistory, IfcActor } from './'

/** An occupant is a type of actor that defines the form of occupancy of a property
 *
 * The principal purpose of IfcOccupant is to determine the nature of occupancy of a property for a particular actor.
 *
 * All characteristics relating to the actor (name and organization details) are inherited from the IfcActor entity.
 */
 class IfcOccupant extends IfcActor {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, TheActor:IfcActorSelect, PredefinedType:IfcOccupantTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, TheActor)
        this.PredefinedType = PredefinedType
    }
    /** Predefined occupant types from which that required may be set.
     * IFC4 CHANGE Attribute made optional.
    */
    PredefinedType?: IfcOccupantTypeEnum
}

export default IfcOccupant
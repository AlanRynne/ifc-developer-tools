// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcJunctionBox

import { IfcJunctionBoxTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcFlowFitting } from './'

/** A junction box is an enclosure within which cables are connected
 *
 * Cables may be members of an electrical circuit (for electrical power systems) or be information carriers (in a telecommunications system).
 *
 * A junction box is typically intended to conceal a cable junction from sight, eliminate tampering or provide a safe place for electrical connection.
 */
 class IfcJunctionBox extends IfcFlowFitting {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcJunctionBoxTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.PredefinedType = PredefinedType
    }
    /** 
    */
    PredefinedType?: IfcJunctionBoxTypeEnum
}

export default IfcJunctionBox
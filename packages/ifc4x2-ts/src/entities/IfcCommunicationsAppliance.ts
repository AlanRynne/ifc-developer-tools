// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCommunicationsAppliance

import { IfcCommunicationsApplianceTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcFlowTerminal } from './'

/** A communications appliance transmits and receives electronic or digital information as data or sound
 *
 * Communication appliances may be fixed in place or may be able to be moved from one space to another.
 *
 * Communication appliances require an electrical supply that may be supplied either by an electrical circuit or provided from a local battery source.
 */
 class IfcCommunicationsAppliance extends IfcFlowTerminal {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcCommunicationsApplianceTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.PredefinedType = PredefinedType
    }
    /** 
    */
    PredefinedType?: IfcCommunicationsApplianceTypeEnum
}

export default IfcCommunicationsAppliance
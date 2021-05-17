// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSwitchingDevice

import { IfcSwitchingDeviceTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcFlowController } from './'

/** A switch is used in a cable distribution system (electrical circuit) to control or modulate the flow of electricity
 *
 * Switches include those used for electrical power, communications, audio-visual, or other distribution system types as determined by the available ports.
 */
 class IfcSwitchingDevice extends IfcFlowController {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcSwitchingDeviceTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.PredefinedType = PredefinedType
    }
    /** 
    */
    PredefinedType?: IfcSwitchingDeviceTypeEnum
}

export default IfcSwitchingDevice
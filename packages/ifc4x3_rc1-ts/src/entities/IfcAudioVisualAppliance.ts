// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcAudioVisualAppliance

import { IfcAudioVisualApplianceTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcFlowTerminal } from './'

/** An audio-visual appliance is a device that displays, captures, transmits, or receives audio or video
 *
 * Audio-visual appliances may be fixed in place or may be able to be moved from one space to another.
 *
 * They may require an electrical supply that may be supplied either by an electrical circuit or provided from a local battery source.
 *
 * Audio-visual appliances may be connected to data circuits including specialist circuits for audio visual purposes only.
 */
 class IfcAudioVisualAppliance extends IfcFlowTerminal {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcAudioVisualApplianceTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.PredefinedType = PredefinedType
    }
    /** 
    */
    PredefinedType?: IfcAudioVisualApplianceTypeEnum
}

export default IfcAudioVisualAppliance
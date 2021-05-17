// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcDuctSilencer

import { IfcDuctSilencerTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcFlowTreatmentDevice } from './'

/** A duct silencer is a device that is typically installed inside a duct distribution system for the purpose of reducing the noise levels from air movement, fan noise, etc. in the adjacent space or downstream of the duct silencer device.
 */
 class IfcDuctSilencer extends IfcFlowTreatmentDevice {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcDuctSilencerTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.PredefinedType = PredefinedType
    }
    /** 
    */
    PredefinedType?: IfcDuctSilencerTypeEnum
}

export default IfcDuctSilencer
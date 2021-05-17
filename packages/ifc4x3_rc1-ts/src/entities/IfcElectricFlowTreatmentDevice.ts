// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcElectricFlowTreatmentDevice

import { IfcElectricFlowTreatmentDeviceTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcFlowTreatmentDevice } from './'

/**  */
 class IfcElectricFlowTreatmentDevice extends IfcFlowTreatmentDevice {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcElectricFlowTreatmentDeviceTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.PredefinedType = PredefinedType
    }

    PredefinedType?: IfcElectricFlowTreatmentDeviceTypeEnum
}

export default IfcElectricFlowTreatmentDevice
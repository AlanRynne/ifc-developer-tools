// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcProtectiveDeviceTrippingUnit

import { IfcProtectiveDeviceTrippingUnitTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcDistributionControlElement } from './'

/** A protective device tripping unit breaks an electrical circuit at a separate breaking unit when a stated electric current that passes through the unit is exceeded.
 */
 class IfcProtectiveDeviceTrippingUnit extends IfcDistributionControlElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcProtectiveDeviceTrippingUnitTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.PredefinedType = PredefinedType
    }
    /** 
    */
    PredefinedType?: IfcProtectiveDeviceTrippingUnitTypeEnum
}

export default IfcProtectiveDeviceTrippingUnit
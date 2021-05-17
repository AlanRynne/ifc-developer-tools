// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcProtectiveDevice

import { IfcProtectiveDeviceTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcFlowController } from './'

/** A protective device breaks an electrical circuit when a stated electric current that passes through it is exceeded
 *
 * A protective device provides protection against electrical current only (not as a general protective device).
 *
 * It may be used to represent the complete set of elements including both the tripping unit and the breaking unit that provide the protection.
 *
 * This may be particularly useful at earlier stages of design where the approach to breaking the electrical supply may be determined but the method of tripping may not.
 *
 * Alternatively, this entity may be used to specifically represent the breaking unit alone (in which case the tripping unit will also be specifically identified).
 *
 * This entity is specific to dedicated protective devices and excludes electrical outlets that may have circuit protection.
 */
 class IfcProtectiveDevice extends IfcFlowController {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcProtectiveDeviceTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.PredefinedType = PredefinedType
    }
    /** 
    */
    PredefinedType?: IfcProtectiveDeviceTypeEnum
}

export default IfcProtectiveDevice
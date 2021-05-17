// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcMedicalDevice

import { IfcMedicalDeviceTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcFlowTerminal } from './'

/** A medical device is attached to a medical piping system and operates upon medical gases to perform a specific function.
 *
 * Medical gases include medical air, medical vacuum, oxygen, carbon dioxide, nitrogen, and nitrous oxide
 *
 * Outlets for medical gasses should use IfcValve with PredefinedType equal to GASTAP, containing an IfcDistributionPort with FlowDirection=SINK and PredefinedType equal to COMPRESSEDAIR, VACUUM, or CHEMICAL, and having property sets on the port further indicating the gas type and pressure.
 *
 * Tanks for medical gasses should use IfcTank with PredefinedType equal to PRESSUREVESSEL, containing an IfcDistributionPort with FlowDirection=SOURCE and PredefinedType=CHEMICAL, and having property sets on the port further indicating the gas type and pressure range.
 */
 class IfcMedicalDevice extends IfcFlowTerminal {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcMedicalDeviceTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.PredefinedType = PredefinedType
    }
    /** 
    */
    PredefinedType?: IfcMedicalDeviceTypeEnum
}

export default IfcMedicalDevice
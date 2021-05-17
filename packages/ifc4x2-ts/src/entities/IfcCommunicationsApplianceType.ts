// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCommunicationsApplianceType

import { IfcCommunicationsApplianceTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcFlowTerminalType } from './'

/** The flow terminal type IfcCommunicationsApplianceType defines commonly shared information for occurrences of communications appliances.
 *
 * The set of shared information may include: It is used to define a communications appliance type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcCommunicationsApplianceType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcCommunicationsApplianceType are represented by instances of IfcCommunicationsAppliance.
 *
 * Refer to the documentation at IfcCommunicationsAppliance for supported property sets, materials, composition, and ports.
 */
 class IfcCommunicationsApplianceType extends IfcFlowTerminalType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcCommunicationsApplianceTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Identifies the predefined types of communications appliance from which the type required may be set.
    */
    PredefinedType: IfcCommunicationsApplianceTypeEnum
}

export default IfcCommunicationsApplianceType
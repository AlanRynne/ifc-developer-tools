// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcAudioVisualApplianceType

import { IfcAudioVisualApplianceTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcFlowTerminalType } from './'

/** The flow terminal type IfcAudioVisualApplianceType defines commonly shared information for occurrences of audio visual appliances.
 *
 * The set of shared information may include: It is used to define a audio visual appliance type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcAudioVisualApplianceType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcAudioVisualApplianceType are represented by instances of IfcAudioVisualAppliance.
 *
 * Refer to the documentation at IfcAudioVisualAppliance for supported property sets, materials, composition, and ports.
 */
 class IfcAudioVisualApplianceType extends IfcFlowTerminalType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcAudioVisualApplianceTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Identifies the predefined types of audio-visual appliance from which the type required may be set.
    */
    PredefinedType: IfcAudioVisualApplianceTypeEnum
}

export default IfcAudioVisualApplianceType
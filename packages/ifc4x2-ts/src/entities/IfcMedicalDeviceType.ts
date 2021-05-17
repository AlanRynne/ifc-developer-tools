// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcMedicalDeviceType

import { IfcMedicalDeviceTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcFlowTerminalType } from './'

/** The flow terminal type IfcMedicalDeviceType defines commonly shared information for occurrences of medical devices.
 *
 * The set of shared information may include: It is used to define a medical device type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcMedicalDeviceType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcMedicalDeviceType are represented by instances of IfcMedicalDevice.
 *
 * Refer to the documentation at IfcMedicalDevice for supported property sets, materials, composition, and ports.
 */
 class IfcMedicalDeviceType extends IfcFlowTerminalType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcMedicalDeviceTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** 
    */
    PredefinedType: IfcMedicalDeviceTypeEnum
}

export default IfcMedicalDeviceType
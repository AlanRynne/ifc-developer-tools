// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcElectricFlowStorageDeviceType

import { IfcElectricFlowStorageDeviceTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcFlowStorageDeviceType } from './'

/** The flow storage device type IfcElectricFlowStorageDeviceType defines commonly shared information for occurrences of electric flow storage devices.
 *
 * The set of shared information may include: It is used to define a electric flow storage device type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcElectricFlowStorageDeviceType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcElectricFlowStorageDeviceType are represented by instances of IfcElectricFlowStorageDevice.
 *
 * Refer to the documentation at IfcElectricFlowStorageDevice for supported property sets, materials, composition, and ports.
 */
 class IfcElectricFlowStorageDeviceType extends IfcFlowStorageDeviceType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcLabel, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcElectricFlowStorageDeviceTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Identifies the predefined types of electric flow storage devices from which the type required may be set.
    */
    PredefinedType: IfcElectricFlowStorageDeviceTypeEnum
}

export default IfcElectricFlowStorageDeviceType
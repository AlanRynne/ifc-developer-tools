// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcProtectiveDeviceType

import { IfcProtectiveDeviceTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcFlowControllerType } from './'

/** The flow controller type IfcProtectiveDeviceType defines commonly shared information for occurrences of protective devices.
 *
 * The set of shared information may include: It is used to define a protective device type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcProtectiveDeviceType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcProtectiveDeviceType are represented by instances of IfcProtectiveDevice.
 *
 * Refer to the documentation at IfcProtectiveDevice for supported property sets, materials, composition, and ports.
 */
 class IfcProtectiveDeviceType extends IfcFlowControllerType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcLabel, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcProtectiveDeviceTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Identifies the predefined types of protective device from which the type required may be set.
    */
    PredefinedType: IfcProtectiveDeviceTypeEnum
}

export default IfcProtectiveDeviceType
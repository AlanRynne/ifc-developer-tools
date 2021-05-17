// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSwitchingDeviceType

import { IfcSwitchingDeviceTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcFlowControllerType } from './'

/** The flow controller type IfcSwitchingDeviceType defines commonly shared information for occurrences of switching devices.
 *
 * The set of shared information may include: It is used to define a switching device type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcSwitchingDeviceType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcSwitchingDeviceType are represented by instances of IfcSwitchingDevice.
 *
 * Refer to the documentation at IfcSwitchingDevice for supported property sets, materials, composition, and ports.
 */
 class IfcSwitchingDeviceType extends IfcFlowControllerType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcSwitchingDeviceTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Identifies the predefined types of switch from which the type required may be set.
    */
    PredefinedType: IfcSwitchingDeviceTypeEnum
}

export default IfcSwitchingDeviceType
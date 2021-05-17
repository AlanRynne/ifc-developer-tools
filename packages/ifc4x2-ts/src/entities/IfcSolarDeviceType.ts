// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSolarDeviceType

import { IfcSolarDeviceTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcEnergyConversionDeviceType } from './'

/** The energy conversion device type IfcSolarDeviceType defines commonly shared information for occurrences of solar devices.
 *
 * The set of shared information may include: It is used to define a solar device type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcSolarDeviceType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcSolarDeviceType are represented by instances of IfcSolarDevice.
 *
 * Refer to the documentation at IfcSolarDevice for supported property sets, materials, composition, and ports.
 */
 class IfcSolarDeviceType extends IfcEnergyConversionDeviceType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcSolarDeviceTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** 
    */
    PredefinedType: IfcSolarDeviceTypeEnum
}

export default IfcSolarDeviceType
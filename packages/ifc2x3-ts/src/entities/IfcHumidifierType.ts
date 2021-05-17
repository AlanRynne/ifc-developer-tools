// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcHumidifierType

import { IfcHumidifierTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcEnergyConversionDeviceType } from './'

/** The energy conversion device type IfcHumidifierType defines commonly shared information for occurrences of humidifiers.
 *
 * The set of shared information may include: It is used to define a humidifier type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcHumidifierType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcHumidifierType are represented by instances of IfcHumidifier.
 *
 * Refer to the documentation at IfcHumidifier for supported property sets, materials, composition, and ports.
 */
 class IfcHumidifierType extends IfcEnergyConversionDeviceType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcLabel, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcHumidifierTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Defines the type of humidifier.
    */
    PredefinedType: IfcHumidifierTypeEnum
}

export default IfcHumidifierType
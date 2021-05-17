// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcAirToAirHeatRecoveryType

import { IfcAirToAirHeatRecoveryTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcEnergyConversionDeviceType } from './'

/** The energy conversion device type IfcAirToAirHeatRecoveryType defines commonly shared information for occurrences of air to air heat recoverys.
 *
 * The set of shared information may include: It is used to define an air to air heat recovery type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcAirToAirHeatRecoveryType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcAirToAirHeatRecoveryType are represented by instances of IfcAirToAirHeatRecovery.
 *
 * Refer to the documentation at IfcAirToAirHeatRecovery for supported property sets, materials, composition, and ports.
 */
 class IfcAirToAirHeatRecoveryType extends IfcEnergyConversionDeviceType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcLabel, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcAirToAirHeatRecoveryTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Defines the type of air to air heat recovery device.
    */
    PredefinedType: IfcAirToAirHeatRecoveryTypeEnum
}

export default IfcAirToAirHeatRecoveryType
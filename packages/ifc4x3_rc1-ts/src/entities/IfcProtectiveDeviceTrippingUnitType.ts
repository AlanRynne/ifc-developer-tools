// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcProtectiveDeviceTrippingUnitType

import { IfcProtectiveDeviceTrippingUnitTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcDistributionControlElementType } from './'

/** The distribution control element type IfcProtectiveDeviceTrippingUnitType defines commonly shared information for occurrences of protective device tripping units.
 *
 * The set of shared information may include: It is used to define a protective device tripping unit type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcProtectiveDeviceTrippingUnitType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcProtectiveDeviceTrippingUnitType are represented by instances of IfcProtectiveDeviceTrippingUnit.
 *
 * Refer to the documentation at IfcProtectiveDeviceTrippingUnit for supported property sets, materials, composition, and ports.
 */
 class IfcProtectiveDeviceTrippingUnitType extends IfcDistributionControlElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcProtectiveDeviceTrippingUnitTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Identifies the predefined types of protective device tripping unit types from which the type required may be set.
    */
    PredefinedType: IfcProtectiveDeviceTrippingUnitTypeEnum
}

export default IfcProtectiveDeviceTrippingUnitType
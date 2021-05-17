// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcUnitaryEquipmentType

import { IfcUnitaryEquipmentTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcEnergyConversionDeviceType } from './'

/** The energy conversion device type IfcUnitaryEquipmentType defines commonly shared information for occurrences of unitary equipments.
 *
 * The set of shared information may include: It is used to define a unitary equipment type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcUnitaryEquipmentType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcUnitaryEquipmentType are represented by instances of IfcUnitaryEquipment.
 *
 * Refer to the documentation at IfcUnitaryEquipment for supported property sets, materials, composition, and ports.
 */
 class IfcUnitaryEquipmentType extends IfcEnergyConversionDeviceType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcLabel, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcUnitaryEquipmentTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** The type of unitary equipment.
    */
    PredefinedType: IfcUnitaryEquipmentTypeEnum
}

export default IfcUnitaryEquipmentType
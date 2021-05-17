// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcEvaporativeCoolerType

import { IfcEvaporativeCoolerTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcEnergyConversionDeviceType } from './'

/** The energy conversion device type IfcEvaporativeCoolerType defines commonly shared information for occurrences of evaporative coolers.
 *
 * The set of shared information may include: It is used to define a evaporative cooler type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcEvaporativeCoolerType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcEvaporativeCoolerType are represented by instances of IfcEvaporativeCooler.
 *
 * Refer to the documentation at IfcEvaporativeCooler for supported property sets, materials, composition, and ports.
 */
 class IfcEvaporativeCoolerType extends IfcEnergyConversionDeviceType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcEvaporativeCoolerTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Defines the type of evaporative cooler.
    */
    PredefinedType: IfcEvaporativeCoolerTypeEnum
}

export default IfcEvaporativeCoolerType
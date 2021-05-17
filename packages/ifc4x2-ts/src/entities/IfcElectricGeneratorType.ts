// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcElectricGeneratorType

import { IfcElectricGeneratorTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcEnergyConversionDeviceType } from './'

/** The energy conversion device type IfcElectricGeneratorType defines commonly shared information for occurrences of electric generators.
 *
 * The set of shared information may include: It is used to define a electric generator type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcElectricGeneratorType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcElectricGeneratorType are represented by instances of IfcElectricGenerator.
 *
 * Refer to the documentation at IfcElectricGenerator for supported property sets, materials, composition, and ports.
 */
 class IfcElectricGeneratorType extends IfcEnergyConversionDeviceType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcElectricGeneratorTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Identifies the predefined types of electric generators from which the type required may be set.
    */
    PredefinedType: IfcElectricGeneratorTypeEnum
}

export default IfcElectricGeneratorType
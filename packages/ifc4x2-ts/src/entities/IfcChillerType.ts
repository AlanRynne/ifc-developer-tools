// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcChillerType

import { IfcChillerTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcEnergyConversionDeviceType } from './'

/** The energy conversion device type IfcChillerType defines commonly shared information for occurrences of chillers.
 *
 * The set of shared information may include: It is used to define a chiller type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcChillerType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcChillerType are represented by instances of IfcChiller.
 *
 * Refer to the documentation at IfcChiller for supported property sets, materials, composition, and ports.
 */
 class IfcChillerType extends IfcEnergyConversionDeviceType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcChillerTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Defines the typical types of chillers (e.g., air-cooled, water-cooled, etc.).
    */
    PredefinedType: IfcChillerTypeEnum
}

export default IfcChillerType
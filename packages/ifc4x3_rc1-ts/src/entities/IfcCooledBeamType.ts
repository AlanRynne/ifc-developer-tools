// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCooledBeamType

import { IfcCooledBeamTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcEnergyConversionDeviceType } from './'

/** The energy conversion device type IfcCooledBeamType defines commonly shared information for occurrences of cooled beams.
 *
 * The set of shared information may include: It is used to define a cooled beam type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcCooledBeamType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcCooledBeamType are represented by instances of IfcCooledBeam.
 *
 * Refer to the documentation at IfcCooledBeam for supported property sets, materials, composition, and ports.
 */
 class IfcCooledBeamType extends IfcEnergyConversionDeviceType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcCooledBeamTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Defines the type of cooled beam.
    */
    PredefinedType: IfcCooledBeamTypeEnum
}

export default IfcCooledBeamType
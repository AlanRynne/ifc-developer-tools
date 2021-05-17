// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCompressorType

import { IfcCompressorTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcFlowMovingDeviceType } from './'

/** The flow moving device type IfcCompressorType defines commonly shared information for occurrences of compressors.
 *
 * The set of shared information may include: It is used to define a compressor type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcCompressorType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcCompressorType are represented by instances of IfcCompressor.
 *
 * Refer to the documentation at IfcCompressor for supported property sets, materials, composition, and ports.
 */
 class IfcCompressorType extends IfcFlowMovingDeviceType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcCompressorTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Defines the type of compressor (e.g., hermetic, reciprocating, etc.).
    */
    PredefinedType: IfcCompressorTypeEnum
}

export default IfcCompressorType
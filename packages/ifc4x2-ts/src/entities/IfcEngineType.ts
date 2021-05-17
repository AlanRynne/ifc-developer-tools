// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcEngineType

import { IfcEngineTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcEnergyConversionDeviceType } from './'

/** The energy conversion device type IfcEngineType defines commonly shared information for occurrences of engines.
 *
 * The set of shared information may include: It is used to define a engine type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcEngineType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcEngineType are represented by instances of IfcEngine.
 *
 * Refer to the documentation at IfcEngine for supported property sets, materials, composition, and ports.
 */
 class IfcEngineType extends IfcEnergyConversionDeviceType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcEngineTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** 
    */
    PredefinedType: IfcEngineTypeEnum
}

export default IfcEngineType
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcShadingDeviceType

import { IfcShadingDeviceTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcBuildingElementType } from './'

/** The building element type IfcShadingDeviceType defines commonly shared information for occurrences of shading devices.
 *
 * The set of shared information may include: It is used to define a shading device type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcShadingDeviceType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcShadingDeviceType are represented by instances of IfcShadingDevice.
 *
 * Refer to the documentation at IfcShadingDevice for supported property sets, materials, and composition.
 */
 class IfcShadingDeviceType extends IfcBuildingElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcShadingDeviceTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Identifies the predefined types of a shading device element from which the type required may be set.
    */
    PredefinedType: IfcShadingDeviceTypeEnum
}

export default IfcShadingDeviceType
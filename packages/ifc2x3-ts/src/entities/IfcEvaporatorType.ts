// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcEvaporatorType

import { IfcEvaporatorTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcEnergyConversionDeviceType } from './'

/** The energy conversion device type IfcEvaporatorType defines commonly shared information for occurrences of evaporators.
 *
 * The set of shared information may include: It is used to define a evaporator type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcEvaporatorType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcEvaporatorType are represented by instances of IfcEvaporator.
 *
 * Refer to the documentation at IfcEvaporator for supported property sets, materials, composition, and ports.
 */
 class IfcEvaporatorType extends IfcEnergyConversionDeviceType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcLabel, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcEvaporatorTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Defines the type of evaporator.
    */
    PredefinedType: IfcEvaporatorTypeEnum
}

export default IfcEvaporatorType
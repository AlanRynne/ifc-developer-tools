// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcHeatExchangerType

import { IfcHeatExchangerTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcEnergyConversionDeviceType } from './'

/** The energy conversion device type IfcHeatExchangerType defines commonly shared information for occurrences of heat exchangers.
 *
 * The set of shared information may include: It is used to define a heat exchanger type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcHeatExchangerType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcHeatExchangerType are represented by instances of IfcHeatExchanger.
 *
 * Refer to the documentation at IfcHeatExchanger for supported property sets, materials, composition, and ports.
 */
 class IfcHeatExchangerType extends IfcEnergyConversionDeviceType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcLabel, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcHeatExchangerTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Defines the basic types of heat exchanger (e.g., plate, shell and tube, etc.).
    */
    PredefinedType: IfcHeatExchangerTypeEnum
}

export default IfcHeatExchangerType
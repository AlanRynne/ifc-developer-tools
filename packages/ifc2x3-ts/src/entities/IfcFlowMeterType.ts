// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcFlowMeterType

import { IfcFlowMeterTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcFlowControllerType } from './'

/** The flow controller type IfcFlowMeterType defines commonly shared information for occurrences of flow meters.
 *
 * The set of shared information may include: It is used to define a flow meter type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcFlowMeterType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcFlowMeterType are represented by instances of IfcFlowMeter.
 *
 * Refer to the documentation at IfcFlowMeter for supported property sets, materials, composition, and ports.
 */
 class IfcFlowMeterType extends IfcFlowControllerType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcLabel, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcFlowMeterTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Defines the type of flow meter.
    */
    PredefinedType: IfcFlowMeterTypeEnum
}

export default IfcFlowMeterType
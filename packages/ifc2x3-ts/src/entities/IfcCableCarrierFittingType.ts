// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCableCarrierFittingType

import { IfcCableCarrierFittingTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcFlowFittingType } from './'

/** The flow fitting type IfcCableCarrierFittingType defines commonly shared information for occurrences of cable carrier fittings.
 *
 * The set of shared information may include: It is used to define a cable carrier fitting type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcCableCarrierFittingType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcCableCarrierFittingType are represented by instances of IfcCableCarrierFitting.
 *
 * Refer to the documentation at IfcCableCarrierFitting for supported property sets, materials, composition, and ports.
 */
 class IfcCableCarrierFittingType extends IfcFlowFittingType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcLabel, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcCableCarrierFittingTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Identifies the predefined types of cable carrier fitting from which the type required may be set.
    */
    PredefinedType: IfcCableCarrierFittingTypeEnum
}

export default IfcCableCarrierFittingType
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCableCarrierSegmentType

import { IfcCableCarrierSegmentTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcFlowSegmentType } from './'

/** The flow segment type IfcCableCarrierSegmentType defines commonly shared information for occurrences of cable carrier segments.
 *
 * The set of shared information may include: It is used to define a cable carrier segment type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcCableCarrierSegmentType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcCableCarrierSegmentType are represented by instances of IfcCableCarrierSegment.
 *
 * Refer to the documentation at IfcCableCarrierSegment for supported property sets, materials, composition, and ports.
 */
 class IfcCableCarrierSegmentType extends IfcFlowSegmentType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcLabel, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcCableCarrierSegmentTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Identifies the predefined types of cable carrier segment from which the type required may be set.
    */
    PredefinedType: IfcCableCarrierSegmentTypeEnum
}

export default IfcCableCarrierSegmentType
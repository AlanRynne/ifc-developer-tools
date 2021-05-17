// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCableSegmentType

import { IfcCableSegmentTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcFlowSegmentType } from './'

/** The flow segment type IfcCableSegmentType defines commonly shared information for occurrences of cable segments.
 *
 * The set of shared information may include: It is used to define a cable segment type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcCableSegmentType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcCableSegmentType are represented by instances of IfcCableSegment.
 *
 * Refer to the documentation at IfcCableSegment for supported property sets, materials, composition, and ports.
 */
 class IfcCableSegmentType extends IfcFlowSegmentType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcLabel, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcCableSegmentTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Identifies the predefined types of cable segment from which the type required may be set.
    */
    PredefinedType: IfcCableSegmentTypeEnum
}

export default IfcCableSegmentType
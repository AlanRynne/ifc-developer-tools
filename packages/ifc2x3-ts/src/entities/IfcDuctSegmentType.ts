// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcDuctSegmentType

import { IfcDuctSegmentTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcFlowSegmentType } from './'

/** The flow segment type IfcDuctSegmentType defines commonly shared information for occurrences of duct segments.
 *
 * The set of shared information may include: It is used to define a duct segment type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcDuctSegmentType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcDuctSegmentType are represented by instances of IfcDuctSegment.
 *
 * Refer to the documentation at IfcDuctSegment for supported property sets, materials, composition, and ports.
 */
 class IfcDuctSegmentType extends IfcFlowSegmentType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcLabel, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcDuctSegmentTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** The type of duct segment.
    */
    PredefinedType: IfcDuctSegmentTypeEnum
}

export default IfcDuctSegmentType
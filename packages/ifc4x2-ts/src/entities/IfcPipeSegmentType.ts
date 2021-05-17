// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPipeSegmentType

import { IfcPipeSegmentTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcFlowSegmentType } from './'

/** The flow segment type IfcPipeSegmentType defines commonly shared information for occurrences of pipe segments.
 *
 * The set of shared information may include: It is used to define a pipe segment type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcPipeSegmentType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcPipeSegmentType are represented by instances of IfcPipeSegment.
 *
 * Refer to the documentation at IfcPipeSegment for supported property sets, materials, composition, and ports.
 */
 class IfcPipeSegmentType extends IfcFlowSegmentType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcPipeSegmentTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** The type of pipe segment.
    */
    PredefinedType: IfcPipeSegmentTypeEnum
}

export default IfcPipeSegmentType
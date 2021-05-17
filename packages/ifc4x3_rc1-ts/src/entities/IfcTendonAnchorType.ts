// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTendonAnchorType

import { IfcTendonAnchorTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcReinforcingElementType } from './'

/** The reinforcing element type IfcTendonAnchorType defines commonly shared information for occurrences of tendon anchors.
 *
 * The set of shared information may include: It is used to define a tendon anchor type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcTendonAnchorType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcTendonAnchorType are represented by instances of IfcTendonAnchor
 *
 * Material Use DefinitionA material or material constituent set may be associated
 *
 * Geometry Use DefinitionThe IfcTendonAnchorType may define the shared geometric representation for many tendon anchor occurrences.
 *
 * The RepresentationMaps attribute refers to a list of IfcRepresentationMap's, that allow for multiple geometric representations.
 */
 class IfcTendonAnchorType extends IfcReinforcingElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcTendonAnchorTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Subtype of tendon anchor.
    */
    PredefinedType: IfcTendonAnchorTypeEnum
}

export default IfcTendonAnchorType
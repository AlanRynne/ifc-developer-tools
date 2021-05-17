// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcChimneyType

import { IfcChimneyTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcBuildingElementType } from './'

/** The building element type IfcChimneyType defines commonly shared information for occurrences of chimneys.
 *
 * The set of shared information may include: It is used to define a chimney type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcChimneyType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcChimneyType are represented by instances of IfcChimney.
 *
 * Refer to the documentation at IfcChimney for supported property sets, materials, and composition.
 */
 class IfcChimneyType extends IfcBuildingElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcChimneyTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Identifies the predefined types of a chimney element from which the type required may be set.
    */
    PredefinedType: IfcChimneyTypeEnum
}

export default IfcChimneyType
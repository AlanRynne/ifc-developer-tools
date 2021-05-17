// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStairType

import { IfcStairTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcBuiltElementType } from './'

/** The building element type IfcStairType defines commonly shared information for occurrences of stairs.
 *
 * The set of shared information may include: It is used to define a stair type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcStairType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcStairType are represented by instances of IfcStair.
 *
 * Refer to the documentation at IfcStair for supported property sets, materials, and composition.
 */
 class IfcStairType extends IfcBuiltElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcStairTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Identifies the predefined types of a stair element from which the type required may be set.
    */
    PredefinedType: IfcStairTypeEnum
}

export default IfcStairType
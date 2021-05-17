// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPileType

import { IfcPileTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcDeepFoundationType } from './'

/** The building element type IfcPileType defines commonly shared information for occurrences of piles.
 *
 * The set of shared information may include: It is used to define a pile type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcPileType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcPileType are represented by instances of IfcPile.
 *
 * Refer to the documentation at IfcPile for supported property sets, materials, and composition.
 */
 class IfcPileType extends IfcDeepFoundationType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcPileTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Subtype of pile.
    */
    PredefinedType: IfcPileTypeEnum
}

export default IfcPileType
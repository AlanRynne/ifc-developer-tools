// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcFurnitureType

import { IfcAssemblyPlaceEnum, IfcFurnitureTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcFurnishingElementType } from './'

/** The furnishing element type IfcFurnitureType defines commonly shared information for occurrences of furnitures.
 *
 * The set of shared information may include: It is used to define a furniture type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcFurnitureType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcFurnitureType are represented by instances of IfcFurniture.
 *
 * Refer to the documentation at IfcFurniture for supported property sets, materials, and composition.
 */
 class IfcFurnitureType extends IfcFurnishingElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, AssemblyPlace:IfcAssemblyPlaceEnum, PredefinedType:IfcFurnitureTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.AssemblyPlace = AssemblyPlace
        this.PredefinedType = PredefinedType
    }
    /** A designation of where the assembly is intended to take place.
     * A selection of alternatives s provided in an enumerated list.
    */
    AssemblyPlace: IfcAssemblyPlaceEnum
    /** 
    */
    PredefinedType?: IfcFurnitureTypeEnum
}

export default IfcFurnitureType
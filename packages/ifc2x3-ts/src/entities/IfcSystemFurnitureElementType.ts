// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSystemFurnitureElementType

import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcFurnishingElementType } from './'

/** The furnishing element type IfcSystemFurnitureElementType defines commonly shared information for occurrences of system furniture elements.
 *
 * The set of shared information may include: It is used to define a system furniture element type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcSystemFurnitureElementType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcSystemFurnitureElementType are represented by instances of IfcSystemFurnitureElement.
 *
 * Refer to the documentation at IfcSystemFurnitureElement for supported property sets, materials, and composition.
 */
 class IfcSystemFurnitureElementType extends IfcFurnishingElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcLabel, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)

    }

}

export default IfcSystemFurnitureElementType
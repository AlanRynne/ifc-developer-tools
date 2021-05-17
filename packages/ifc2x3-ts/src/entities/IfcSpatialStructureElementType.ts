// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSpatialStructureElementType

import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcElementType } from './'

/** The element type (IfcSpatialStructureElementType) defines a list of commonly shared property set definitions of a spatial structure element and an optional set of product representations.
 *
 * It is used to define an element specification (i.e. the specific element information, that is common to all occurrences of that element type).
 *
 * A spatial structure element type is used to define the common properties of a certain type of a spatial structure element that may be applied to many instances of that type to assign a specific style.
 *
 * Spatial structure element types (the instantiable subtypes) may be exchanged without being already assigned to occurrences.
 *
 * The occurrences of subtypes of the abstract IfcSpatialStructureElementType are represented by instances of subtypes of IfcSpatialStructureElement.
 */
abstract class IfcSpatialStructureElementType extends IfcElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcLabel, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)

    }

}

export default IfcSpatialStructureElementType
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcBuildingElementType

import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcElementType } from './'

/** The IfcBuildingElementType provides the type information for IfcBuildingElement occurrences
 *
 * A building element type is used to define the common properties of a certain type of building element that are applied to all occurrences of that type.
 *
 * It is used to define a building element specification (i.e. the specific product information, that is common to all occurrences of that product type).
 *
 * Building element types (or the instantiable subtypes) may be exchanged without being already assigned to occurrences
 *
 * The IfcBuildingElementType is an abstract type that cannot be instantiated.
 *
 * For arbitrary building element types, that cannot be expressed by a subtype of IfcBuildingElementType , use IfcBuildingElementProxyType.
 *
 * Occurrences of subtypes of the IfcBuildingElementType are represented by instances of the appropriate subtypes of IfcBuildingElement.
 */
abstract class IfcBuildingElementType extends IfcElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcLabel, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)

    }

}

export default IfcBuildingElementType
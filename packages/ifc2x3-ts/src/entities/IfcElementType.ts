// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcElementType

import { IfcLabel, IfcGloballyUniqueId, IfcText } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcTypeProduct } from './'

/** IfcElementType defines a list of commonly shared property set definitions of an element and an optional set of product representations.
 *
 * It is used to define an element specification (i.e. the specific product information, that is common to all occurrences of that product type).
 *
 * An element type is used to define the common properties of a certain type or style of an element that may be applied to instances of that element type to assign a specific style.
 *
 * Element types (the instantiable subtypes) may be exchanged without being already assigned to occurrences.
 */
abstract class IfcElementType extends IfcTypeProduct {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcLabel, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag)
        this.ElementType = ElementType
    }
    /** The type denotes a particular type that indicates the object further.
     * The use has to be established at the level of instantiable subtypes.
     * In particular it holds the user defined type, if the enumeration of the attribute 'PredefinedType' is set to USERDEFINED.
    */
    ElementType?: IfcLabel
}

export default IfcElementType
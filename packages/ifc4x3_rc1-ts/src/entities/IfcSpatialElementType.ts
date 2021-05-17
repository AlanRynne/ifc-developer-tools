// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSpatialElementType

import { IfcLabel, IfcGloballyUniqueId, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcTypeProduct } from './'

/** IfcSpatialElementType defines a list of commonly shared property set definitions of a spatial structure element and an optional set of product representations.
 *
 * It is used to define a spatial element specification (the specific element information, that is common to all occurrences of that element type)
 *
 * A spatial element type is used to define the common properties of a certain type of a spatial structure element that may be applied to many instances of that type to assign a specific style.
 *
 * Spatial element types (i.e. the instantiable subtypes) may be exchanged without being already assigned to occurrences
 *
 * The occurrences of subtypes of the abstract IfcSpatialElementType are represented by instances of subtypes of the abstract IfcSpatialElement.
 */
abstract class IfcSpatialElementType extends IfcTypeProduct {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag)
        this.ElementType = ElementType
    }
    /** The type denotes a particular type that indicates the object further.
     * The use has to be established at the level of instantiable subtypes.
     * In particular it holds the user defined type, if the enumeration of the attribute 'PredefinedType' is set to USERDEFINED.
    */
    ElementType?: IfcLabel
}

export default IfcSpatialElementType
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcDistributionElementType

import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcElementType } from './'

/** The IfcDistributionElementType defines a list of commonly shared property set definitions of an element and an optional set of product representations.
 *
 * It is used to define an element specification (i.e. the specific product information, that is common to all occurrences of that product type).
 *
 * A distribution element type is used to define the common properties of a certain type of a distribution element that may be applied to many instances of that feature type to assign a specific style.
 *
 * Distribution element types (or the instantiable subtypes) may be exchanged without being already assigned to occurrences.
 *
 * The occurrences of the IfcDistributionElementType are represented by instances of IfcDistributionElement (or its subtypes).
 */
 class IfcDistributionElementType extends IfcElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)

    }

}

export default IfcDistributionElementType
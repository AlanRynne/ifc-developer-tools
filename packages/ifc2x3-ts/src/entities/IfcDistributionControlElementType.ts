// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcDistributionControlElementType

import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcDistributionElementType } from './'

/** The element type IfcDistributionControlElementType defines a list of commonly shared property set definitions of an element and an optional set of product representations.
 *
 * It is used to define an element specification (the specific product information that is common to all occurrences of that product type)
 *
 * Distribution control element types (or the instantiable subtypes) may be exchanged without being already assigned to occurrences
 *
 * The occurrences of the IfcDistributionControlElementType are represented by instances of IfcDistributionControlElement or its subtypes.
 */
abstract class IfcDistributionControlElementType extends IfcDistributionElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcLabel, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)

    }

}

export default IfcDistributionControlElementType
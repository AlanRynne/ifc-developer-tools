// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcDistributionFlowElementType

import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcDistributionElementType } from './'

/** The element type IfcDistributionFlowElementType defines a list of commonly shared property set definitions of an element and an optional set of product representations.
 *
 * It is used to define an element specification (the specific product information that is common to all occurrences of that product type)
 *
 * Distribution flow element types (orthe instantiable subtypes) may be exchanged without being already assigned to occurrences
 *
 * The occurrences of the IfcDistributionFlowElementType are represented by instances of IfcDistributionFlowElement or its subtypes.
 */
abstract class IfcDistributionFlowElementType extends IfcDistributionElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)

    }

}

export default IfcDistributionFlowElementType
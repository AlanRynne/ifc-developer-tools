// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcFlowSegmentType

import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcDistributionFlowElementType } from './'

/** The element type IfcFlowSegmentType defines a list of commonly shared property set definitions of a flow segment and an optional set of product representations.
 *
 * It is used to define a flow segment specification (the specific product information, that is common to all occurrences of that product type)
 *
 * A flow segment type is used to define the common properties of a flow segment that may be applied to many occurrences of that type.
 *
 * A flow segment is a section of a distribution system, such as a duct, pipe, or conduit, that typically has only two ports.
 *
 * Flow segment types (or the instantiable subtypes) may be exchanged without being already assigned to occurrences
 *
 * Occurrences of the IfcFlowSegmentType are represented by instances of IfcFlowSegment or its subtypes.
 */
abstract class IfcFlowSegmentType extends IfcDistributionFlowElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)

    }

}

export default IfcFlowSegmentType
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcFlowFittingType

import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcDistributionFlowElementType } from './'

/** The element type IfcFlowFittingType defines a list of commonly shared property set definitions of a flow fitting and an optional set of product representations.
 *
 * It is used to define a flow fitting specification (i.e. the specific product information, that is common to all occurrences of that product type)
 *
 * A flow fitting type is used to define the common properties of a flow fitting that may be applied to many occurrences of that type.
 *
 * A flow fitting is a device that is used to interconnect flow segments or other fittings within a distribution system, such as a tee in a ducted system that branches flow into two directions, or a junction box in an electrical distribution system.
 *
 * Flow fitting types (or the instantiable subtypes) may be exchanged without being already assigned to occurrences
 *
 * Occurrences of the IfcFlowFittingType are represented by instances of IfcFlowFitting or its subtypes.
 */
abstract class IfcFlowFittingType extends IfcDistributionFlowElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)

    }

}

export default IfcFlowFittingType
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcFlowControllerType

import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcDistributionFlowElementType } from './'

/** The element type IfcFlowControllerType defines a list of commonly shared property set definitions of a flow controller and an optional set of product representations.
 *
 * It is used to define a flow controller specification (i.e. the specific product information, that is common to all occurrences of that product type)
 *
 * A flow controller type is used to define the common properties of a flow controller that may be applied to many occurrences of that type.
 *
 * A flow controller is a device that regulates flow within a distribution system, such as a valve in a piping system, modulating damper in an air distribution system, or electrical switch in an electrical distribution system.
 *
 * Flow controller types (or the instantiable subtypes) may be exchanged without being already assigned to occurrences
 *
 * Occurrences of the IfcFlowControllerType are represented by instances of IfcFlowController or its subtypes.
 */
abstract class IfcFlowControllerType extends IfcDistributionFlowElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcLabel, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)

    }

}

export default IfcFlowControllerType
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcFlowTerminalType

import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcDistributionFlowElementType } from './'

/** The element type IfcFlowTerminalType defines a list of commonly shared property set definitions of a flow terminal and an optional set of product representations.
 *
 * It is used to define a flow terminal specification (the specific product information that is common to all occurrences of that product type)
 *
 * A flow terminal type is used to define the common properties of a flow terminal that may be applied to many occurrences of that type.
 *
 * A flow terminal acts as a terminus or beginning element in a distribution system such as a ceiling register in a ducted air distribution system, a sink in a waste-water system, or a light fixture in an electrical lighting system.
 *
 * Flow terminal types (or the instantiable subtypes) may be exchanged without being already assigned to occurrences
 *
 * The occurrences of the IfcFlowTerminalType are represented by instances of IfcFlowTerminal or its subtypes.
 */
abstract class IfcFlowTerminalType extends IfcDistributionFlowElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcLabel, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)

    }

}

export default IfcFlowTerminalType
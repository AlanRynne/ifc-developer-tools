// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcFlowMovingDeviceType

import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcDistributionFlowElementType } from './'

/** The element type IfcFlowMovingDeviceType defines a list of commonly shared property set definitions of a flow moving device and an optional set of product representations.
 *
 * It is used to define a flow moving device specification (i.e. the specific product information, that is common to all occurrences of that product type)
 *
 * A flow moving type is used to define the common properties of a flow moving device that may be applied to many occurrences of that type.
 *
 * A flow moving device is a device that is used to produce a pressure differential in a distribution system, such as a pump, fan, or compressor.
 *
 * Flow moving types (or the instantiable subtypes) may be exchanged without being already assigned to occurrences
 *
 * The occurrences of the IfcFlowMovingDeviceType are represented by instances of IfcFlowMovingDevice or its subtypes.
 */
abstract class IfcFlowMovingDeviceType extends IfcDistributionFlowElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcLabel, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)

    }

}

export default IfcFlowMovingDeviceType
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcFlowStorageDeviceType

import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcDistributionFlowElementType } from './'

/** The element type IfcFlowStorageDeviceType defines a list of commonly shared property set definitions of a flow storage device and an optional set of product representations.
 *
 * It is used to define a flow storage device specification (the specific product information that is common to all occurrences of that product type)
 *
 * A flow storage device is a device used for the temporary storage of a fluid (such as a tank) or the voltage potential induced by the induced electron flow (such as a battery).
 *
 * Flow storage types (or the instantiable subtypes) may be exchanged without being already assigned to occurrences
 *
 * The occurrences of the IfcFlowStorageDeviceType are represented by instances of IfcFlowStorageDevice or its subtypes.
 */
abstract class IfcFlowStorageDeviceType extends IfcDistributionFlowElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcLabel, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)

    }

}

export default IfcFlowStorageDeviceType
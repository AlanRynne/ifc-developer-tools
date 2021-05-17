// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcFlowTreatmentDeviceType

import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcDistributionFlowElementType } from './'

/** The element type IfcFlowTreatmentDeviceType defines a list of commonly shared property set definitions of a flow treatment device and an optional set of product representations.
 *
 * It is used to define a flow treatment device specification (the specific product information that is common to all occurrences of that product type)
 *
 * A flow treatment device is a device used to change the physical properties of the medium, such as an air, oil or water filter (used to remove particulates from the fluid), or a duct silencer (used to attenuate noise).
 *
 * Flow treatment types (or the instantiable subtypes) may be exchanged without being already assigned to occurrences
 *
 * The occurrences of the IfcFlowTreatmentDeviceType are represented by instances of IfcFlowTreatmentDevice or its subtypes.
 */
abstract class IfcFlowTreatmentDeviceType extends IfcDistributionFlowElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcLabel, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)

    }

}

export default IfcFlowTreatmentDeviceType
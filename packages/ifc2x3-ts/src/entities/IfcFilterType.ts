// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcFilterType

import { IfcFilterTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcFlowTreatmentDeviceType } from './'

/** The flow treatment device type IfcFilterType defines commonly shared information for occurrences of filters.
 *
 * The set of shared information may include: It is used to define a filter type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcFilterType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcFilterType are represented by instances of IfcFilter.
 *
 * Refer to the documentation at IfcFilter for supported property sets, materials, composition, and ports.
 */
 class IfcFilterType extends IfcFlowTreatmentDeviceType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcLabel, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcFilterTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** The type of air filter.
    */
    PredefinedType: IfcFilterTypeEnum
}

export default IfcFilterType
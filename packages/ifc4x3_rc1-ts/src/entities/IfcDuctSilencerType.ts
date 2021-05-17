// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcDuctSilencerType

import { IfcDuctSilencerTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcFlowTreatmentDeviceType } from './'

/** The flow treatment device type IfcDuctSilencerType defines commonly shared information for occurrences of duct silencers.
 *
 * The set of shared information may include: It is used to define a duct silencer type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcDuctSilencerType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcDuctSilencerType are represented by instances of IfcDuctSilencer.
 *
 * Refer to the documentation at IfcDuctSilencer for supported property sets, materials, composition, and ports.
 */
 class IfcDuctSilencerType extends IfcFlowTreatmentDeviceType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcDuctSilencerTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** The type of duct silencer.
    */
    PredefinedType: IfcDuctSilencerTypeEnum
}

export default IfcDuctSilencerType
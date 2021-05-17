// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcInterceptorType

import { IfcInterceptorTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcFlowTreatmentDeviceType } from './'

/** The flow treatment device type IfcInterceptorType defines commonly shared information for occurrences of interceptors.
 *
 * The set of shared information may include: It is used to define a interceptor type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcInterceptorType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcInterceptorType are represented by instances of IfcInterceptor.
 *
 * Refer to the documentation at IfcInterceptor for supported property sets, materials, composition, and ports.
 */
 class IfcInterceptorType extends IfcFlowTreatmentDeviceType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcInterceptorTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** 
    */
    PredefinedType: IfcInterceptorTypeEnum
}

export default IfcInterceptorType
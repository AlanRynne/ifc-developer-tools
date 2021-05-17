// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcDamperType

import { IfcDamperTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcFlowControllerType } from './'

/** The flow controller type IfcDamperType defines commonly shared information for occurrences of dampers.
 *
 * The set of shared information may include: It is used to define a damper type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcDamperType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcDamperType are represented by instances of IfcDamper.
 *
 * Refer to the documentation at IfcDamper for supported property sets, materials, composition, and ports.
 */
 class IfcDamperType extends IfcFlowControllerType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcLabel, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcDamperTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Type of damper.
    */
    PredefinedType: IfcDamperTypeEnum
}

export default IfcDamperType
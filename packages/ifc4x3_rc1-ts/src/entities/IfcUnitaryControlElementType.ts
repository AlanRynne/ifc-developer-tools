// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcUnitaryControlElementType

import { IfcUnitaryControlElementTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcDistributionControlElementType } from './'

/** The distribution control element type IfcUnitaryControlElementType defines commonly shared information for occurrences of unitary control elements.
 *
 * The set of shared information may include: It is used to define a unitary control element type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcUnitaryControlElementType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcUnitaryControlElementType are represented by instances of IfcUnitaryControlElement.
 *
 * Refer to the documentation at IfcUnitaryControlElement for supported property sets, materials, composition, and ports.
 */
 class IfcUnitaryControlElementType extends IfcDistributionControlElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcUnitaryControlElementTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Identifies the predefined types of unitary control element from which the type required may be set.
    */
    PredefinedType: IfcUnitaryControlElementTypeEnum
}

export default IfcUnitaryControlElementType
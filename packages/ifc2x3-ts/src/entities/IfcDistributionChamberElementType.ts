// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcDistributionChamberElementType

import { IfcDistributionChamberElementTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcDistributionFlowElementType } from './'

/** The distribution flow element type IfcDistributionChamberElementType defines commonly shared information for occurrences of distribution chamber elements.
 *
 * The set of shared information may include: It is used to define a distribution chamber element type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcDistributionChamberElementType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcDistributionChamberElementType are represented by instances of IfcDistributionChamberElement.
 *
 * Refer to the documentation at IfcDistributionChamberElement for supported property sets, materials, composition, and ports.
 */
 class IfcDistributionChamberElementType extends IfcDistributionFlowElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcLabel, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcDistributionChamberElementTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Predefined types of distribution chambers.
    */
    PredefinedType: IfcDistributionChamberElementTypeEnum
}

export default IfcDistributionChamberElementType
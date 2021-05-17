// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcJunctionBoxType

import { IfcJunctionBoxTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcFlowFittingType } from './'

/** The flow fitting type IfcJunctionBoxType defines commonly shared information for occurrences of junction boxs.
 *
 * The set of shared information may include: It is used to define a junction box type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcJunctionBoxType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcJunctionBoxType are represented by instances of IfcJunctionBox.
 *
 * Refer to the documentation at IfcJunctionBox for supported property sets, materials, composition, and ports.
 */
 class IfcJunctionBoxType extends IfcFlowFittingType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcJunctionBoxTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Identifies the predefined types of junction boxes from which the type required may be set.
    */
    PredefinedType: IfcJunctionBoxTypeEnum
}

export default IfcJunctionBoxType
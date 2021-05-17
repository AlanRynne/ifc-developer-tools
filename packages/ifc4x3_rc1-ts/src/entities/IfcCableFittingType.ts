// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCableFittingType

import { IfcCableFittingTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcFlowFittingType } from './'

/** The flow fitting type IfcCableFittingType defines commonly shared information for occurrences of cable fittings.
 *
 * The set of shared information may include: It is used to define a cable fitting type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcCableFittingType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcCableFittingType are represented by instances of IfcCableFitting.
 *
 * Refer to the documentation at IfcCableFitting for supported property sets, materials, composition, and ports.
 */
 class IfcCableFittingType extends IfcFlowFittingType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcCableFittingTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Identifies the predefined types of cable fitting from which the type required may be set.
    */
    PredefinedType: IfcCableFittingTypeEnum
}

export default IfcCableFittingType
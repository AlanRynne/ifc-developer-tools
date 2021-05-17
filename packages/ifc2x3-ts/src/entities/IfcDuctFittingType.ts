// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcDuctFittingType

import { IfcDuctFittingTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcFlowFittingType } from './'

/** The flow fitting type IfcDuctFittingType defines commonly shared information for occurrences of duct fittings.
 *
 * The set of shared information may include: It is used to define a duct fitting type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcDuctFittingType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcDuctFittingType are represented by instances of IfcDuctFitting.
 *
 * Refer to the documentation at IfcDuctFitting for supported property sets, materials, composition, and ports.
 */
 class IfcDuctFittingType extends IfcFlowFittingType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcLabel, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcDuctFittingTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** The type of duct fitting.
    */
    PredefinedType: IfcDuctFittingTypeEnum
}

export default IfcDuctFittingType
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPipeFittingType

import { IfcPipeFittingTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcFlowFittingType } from './'

/** The flow fitting type IfcPipeFittingType defines commonly shared information for occurrences of pipe fittings.
 *
 * The set of shared information may include: It is used to define a pipe fitting type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcPipeFittingType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcPipeFittingType are represented by instances of IfcPipeFitting.
 *
 * Refer to the documentation at IfcPipeFitting for supported property sets, materials, composition, and ports.
 */
 class IfcPipeFittingType extends IfcFlowFittingType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcPipeFittingTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** The type of pipe fitting.
    */
    PredefinedType: IfcPipeFittingTypeEnum
}

export default IfcPipeFittingType
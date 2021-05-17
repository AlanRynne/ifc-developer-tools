// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcElectricDistributionBoardType

import { IfcElectricDistributionBoardTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcFlowControllerType } from './'

/** The flow controller type IfcElectricDistributionBoardType defines commonly shared information for occurrences of electric distribution boards.
 *
 * The set of shared information may include: It is used to define a electric distribution board type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcElectricDistributionBoardType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcElectricDistributionBoardType are represented by instances of IfcElectricDistributionBoard.
 *
 * Refer to the documentation at IfcElectricDistributionBoard for supported property sets, materials, composition, and ports.
 */
 class IfcElectricDistributionBoardType extends IfcFlowControllerType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcElectricDistributionBoardTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Identifies the predefined types of electric distribution type from which the type required may be set.
    */
    PredefinedType: IfcElectricDistributionBoardTypeEnum
}

export default IfcElectricDistributionBoardType
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcElectricTimeControlType

import { IfcElectricTimeControlTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcFlowControllerType } from './'

/** The flow controller type IfcElectricTimeControlType defines commonly shared information for occurrences of electric time controls.
 *
 * The set of shared information may include: It is used to define a electric time control type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcElectricTimeControlType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcElectricTimeControlType are represented by instances of IfcElectricTimeControl.
 *
 * Refer to the documentation at IfcElectricTimeControl for supported property sets, materials, composition, and ports.
 */
 class IfcElectricTimeControlType extends IfcFlowControllerType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcElectricTimeControlTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Identifies the predefined types of electrical time control from which the type required may be set.
    */
    PredefinedType: IfcElectricTimeControlTypeEnum
}

export default IfcElectricTimeControlType
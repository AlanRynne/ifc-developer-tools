// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcWasteTerminalType

import { IfcWasteTerminalTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcFlowTerminalType } from './'

/** The flow terminal type IfcWasteTerminalType defines commonly shared information for occurrences of waste terminals.
 *
 * The set of shared information may include: It is used to define a waste terminal type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcWasteTerminalType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcWasteTerminalType are represented by instances of IfcWasteTerminal.
 *
 * Refer to the documentation at IfcWasteTerminal for supported property sets, materials, composition, and ports.
 */
 class IfcWasteTerminalType extends IfcFlowTerminalType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcLabel, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcWasteTerminalTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Identifies the predefined types of waste terminal from which the type required may be set.
    */
    PredefinedType: IfcWasteTerminalTypeEnum
}

export default IfcWasteTerminalType
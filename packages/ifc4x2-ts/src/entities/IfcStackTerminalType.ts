// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStackTerminalType

import { IfcStackTerminalTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcFlowTerminalType } from './'

/** The flow terminal type IfcStackTerminalType defines commonly shared information for occurrences of stack terminals.
 *
 * The set of shared information may include: It is used to define a stack terminal type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcStackTerminalType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcStackTerminalType are represented by instances of IfcStackTerminal.
 *
 * Refer to the documentation at IfcStackTerminal for supported property sets, materials, composition, and ports.
 */
 class IfcStackTerminalType extends IfcFlowTerminalType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcStackTerminalTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Identifies the predefined types of stack terminal from which the type required may be set.
    */
    PredefinedType: IfcStackTerminalTypeEnum
}

export default IfcStackTerminalType
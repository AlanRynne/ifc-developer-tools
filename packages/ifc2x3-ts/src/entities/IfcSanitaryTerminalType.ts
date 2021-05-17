// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSanitaryTerminalType

import { IfcSanitaryTerminalTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcFlowTerminalType } from './'

/** The flow terminal type IfcSanitaryTerminalType defines commonly shared information for occurrences of sanitary terminals.
 *
 * The set of shared information may include: It is used to define a sanitary terminal type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcSanitaryTerminalType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcSanitaryTerminalType are represented by instances of IfcSanitaryTerminal.
 *
 * Refer to the documentation at IfcSanitaryTerminal for supported property sets, materials, composition, and ports.
 */
 class IfcSanitaryTerminalType extends IfcFlowTerminalType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcLabel, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcSanitaryTerminalTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Identifies the predefined types of sanitary terminal from which the type required may be set.
    */
    PredefinedType: IfcSanitaryTerminalTypeEnum
}

export default IfcSanitaryTerminalType
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcFireSuppressionTerminalType

import { IfcFireSuppressionTerminalTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcFlowTerminalType } from './'

/** The flow terminal type IfcFireSuppressionTerminalType defines commonly shared information for occurrences of fire suppression terminals.
 *
 * The set of shared information may include: It is used to define a fire suppression terminal type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcFireSuppressionTerminalType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcFireSuppressionTerminalType are represented by instances of IfcFireSuppressionTerminal.
 *
 * Refer to the documentation at IfcFireSuppressionTerminal for supported property sets, materials, composition, and ports.
 */
 class IfcFireSuppressionTerminalType extends IfcFlowTerminalType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcFireSuppressionTerminalTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Identifies the predefined types of fire suppression terminal from which the type required may be set.
    */
    PredefinedType: IfcFireSuppressionTerminalTypeEnum
}

export default IfcFireSuppressionTerminalType
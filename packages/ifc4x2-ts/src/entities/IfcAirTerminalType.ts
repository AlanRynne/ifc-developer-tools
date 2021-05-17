// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcAirTerminalType

import { IfcAirTerminalTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcFlowTerminalType } from './'

/** The flow terminal type IfcAirTerminalType defines commonly shared information for occurrences of air terminals.
 *
 * The set of shared information may include: It is used to define an air terminal type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcAirTerminalType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcAirTerminalType are represented by instances of IfcAirTerminal.
 *
 * Refer to the documentation at IfcAirTerminal for supported property sets, materials, composition, and ports.
 */
 class IfcAirTerminalType extends IfcFlowTerminalType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcAirTerminalTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** 
    */
    PredefinedType: IfcAirTerminalTypeEnum
}

export default IfcAirTerminalType
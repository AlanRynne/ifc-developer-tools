// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcAirTerminalBoxType

import { IfcAirTerminalBoxTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcFlowControllerType } from './'

/** The flow controller type IfcAirTerminalBoxType defines commonly shared information for occurrences of air terminal boxes.
 *
 * The set of shared information may include: It is used to define an air terminal box type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcAirTerminalBoxType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcAirTerminalBoxType are represented by instances of IfcAirTerminalBox.
 *
 * Refer to the documentation at IfcAirTerminalBox for supported property sets, materials, composition, and ports.
 */
 class IfcAirTerminalBoxType extends IfcFlowControllerType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcAirTerminalBoxTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** The air terminal box type.
    */
    PredefinedType: IfcAirTerminalBoxTypeEnum
}

export default IfcAirTerminalBoxType
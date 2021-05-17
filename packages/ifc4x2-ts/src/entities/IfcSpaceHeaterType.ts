// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSpaceHeaterType

import { IfcSpaceHeaterTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcFlowTerminalType } from './'

/** The flow terminal type IfcSpaceHeaterType defines commonly shared information for occurrences of space heaters.
 *
 * The set of shared information may include: It is used to define a space heater type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcSpaceHeaterType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcSpaceHeaterType are represented by instances of IfcSpaceHeater.
 *
 * Refer to the documentation at IfcSpaceHeater for supported property sets, materials, composition, and ports.
 */
 class IfcSpaceHeaterType extends IfcFlowTerminalType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcSpaceHeaterTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Enumeration of possible types of space heater (e.g., baseboard heater, convector, radiator, etc.).
    */
    PredefinedType: IfcSpaceHeaterTypeEnum
}

export default IfcSpaceHeaterType
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcLightFixtureType

import { IfcLightFixtureTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcFlowTerminalType } from './'

/** The flow terminal type IfcLightFixtureType defines commonly shared information for occurrences of light fixtures.
 *
 * The set of shared information may include: It is used to define a light fixture type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcLightFixtureType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcLightFixtureType are represented by instances of IfcLightFixture.
 *
 * Refer to the documentation at IfcLightFixture for supported property sets, materials, composition, and ports.
 */
 class IfcLightFixtureType extends IfcFlowTerminalType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcLightFixtureTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Identifies the predefined types of light fixture from which the type required may be set.
    */
    PredefinedType: IfcLightFixtureTypeEnum
}

export default IfcLightFixtureType
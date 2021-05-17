// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStairFlightType

import { IfcStairFlightTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcBuildingElementType } from './'

/** The building element type IfcStairFlightType defines commonly shared information for occurrences of stair flights.
 *
 * The set of shared information may include: It is used to define a stair flight type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcStairFlightType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcStairFlightType are represented by instances of IfcStairFlight.
 *
 * Refer to the documentation at IfcStairFlight for supported property sets, materials, and composition.
 */
 class IfcStairFlightType extends IfcBuildingElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcStairFlightTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Identifies the predefined types of a stair flight element from which the type required may be set.
    */
    PredefinedType: IfcStairFlightTypeEnum
}

export default IfcStairFlightType
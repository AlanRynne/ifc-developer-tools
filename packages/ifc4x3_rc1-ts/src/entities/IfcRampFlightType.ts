// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRampFlightType

import { IfcRampFlightTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcBuiltElementType } from './'

/** The building element type IfcRampFlightType defines commonly shared information for occurrences of ramp flights.
 *
 * The set of shared information may include: It is used to define a ramp flight type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcRampFlightType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcRampFlightType are represented by instances of IfcRampFlight.
 *
 * Refer to the documentation at IfcRampFlight for supported property sets, materials, and composition.
 */
 class IfcRampFlightType extends IfcBuiltElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcRampFlightTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Identifies the predefined types of a ramp flight element from which the type required may be set.
    */
    PredefinedType: IfcRampFlightTypeEnum
}

export default IfcRampFlightType
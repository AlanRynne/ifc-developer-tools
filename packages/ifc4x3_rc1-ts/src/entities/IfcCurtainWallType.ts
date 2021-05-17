// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCurtainWallType

import { IfcCurtainWallTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcBuiltElementType } from './'

/** The building element type IfcCurtainWallType defines commonly shared information for occurrences of curtain walls.
 *
 * The set of shared information may include: It is used to define a curtain wall type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcCurtainWallType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcCurtainWallType are represented by instances of IfcCurtainWall.
 *
 * Refer to the documentation at IfcCurtainWall for supported property sets, materials, and composition.
 */
 class IfcCurtainWallType extends IfcBuiltElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcCurtainWallTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Identifies the predefined types of a curtain wall element from which the type required may be set.
    */
    PredefinedType: IfcCurtainWallTypeEnum
}

export default IfcCurtainWallType
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcFurniture

import { IfcFurnitureTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcFurnishingElement } from './'

/** Furniture defines complete furnishings such as a table, desk, chair, or cabinet, which may or may not be permanently attached to a building structure
 *
 * Occurrences of furniture that are built in (where the property Pset_FurnitureTypeCommon
 *
 * IsBuiltIn is asserted to be TRUE) should have their connection relationship with a building element occurrence defined through the IfcRelConnectsElements relationship.
 */
 class IfcFurniture extends IfcFurnishingElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcFurnitureTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.PredefinedType = PredefinedType
    }
    /** 
    */
    PredefinedType?: IfcFurnitureTypeEnum
}

export default IfcFurniture
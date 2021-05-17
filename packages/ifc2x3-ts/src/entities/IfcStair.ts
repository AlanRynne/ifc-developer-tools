// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStair

import { IfcStairTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcBuildingElement } from './'

/** A stair is a vertical passageway allowing occupants to walk (step) from one floor level to another floor level at a different elevation.
 *
 * It may include a landing as an intermediate floor slab.
 *
 * The IfcStair shall either be represented:
 */
 class IfcStair extends IfcBuildingElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, ShapeType:IfcStairTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.ShapeType = ShapeType
    }
    /** undefined
    */
    ShapeType: IfcStairTypeEnum
}

export default IfcStair
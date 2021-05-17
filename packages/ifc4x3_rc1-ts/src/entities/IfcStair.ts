// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStair

import { IfcStairTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcBuiltElement } from './'

/** A stair is a vertical passageway allowing occupants to walk (step) from one floor level to another floor level at a different elevation.
 *
 * It may include a landing as an intermediate floor slab.
 *
 * The IfcStair shall either be represented:
 */
 class IfcStair extends IfcBuiltElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcStairTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.PredefinedType = PredefinedType
    }
    /** Predefined generic type for a stair that is specified in an enumeration.
     * There may be a property set given specifically for the predefined types.
     * The PredefinedType shall only be used, if no IfcStairType is assigned, providing its own IfcStairType.PredefinedType.
     * IFC4 CHANGE The attribute has been renamed from ShapeType and changed to be OPTIONAL with upward compatibility for file based exchange.
    */
    PredefinedType?: IfcStairTypeEnum
}

export default IfcStair
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPile

import { IfcPileTypeEnum, IfcPileConstructionEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcBuildingElement } from './'

/** A pile is a slender timber, concrete, or steel structural element, driven, jetted, or otherwise embedded on end in the ground for the purpose of supporting a load.
 *
 * A pile is also characterized as deep foundation, where the loads are transfered to deeper subsurface layers.
 */
 class IfcPile extends IfcBuildingElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcPileTypeEnum, ConstructionType:IfcPileConstructionEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.PredefinedType = PredefinedType
        this.ConstructionType = ConstructionType
    }
    /** The predefined generic type of the pile according to function.
     * IFC4 CHANGE Attribute made optional.
     * Type information can be provided by IfcRelDefinesByType and IfcPileType.
    */
    PredefinedType: IfcPileTypeEnum
    /** Deprecated. IFC4 CHANGE Material profile association capability by means of IfcRelAssociatesMaterial has been added.
     * The attribute ConstructionType should not be used whenever its information can be provided by a material profile set, either associated with the IfcPile object or, if present, with a corresponding instance of IfcPileType.
    */
    ConstructionType?: IfcPileConstructionEnum
}

export default IfcPile
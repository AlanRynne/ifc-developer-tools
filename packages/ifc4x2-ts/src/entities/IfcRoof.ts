// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRoof

import { IfcRoofTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcBuildingElement } from './'

/** A roof is the covering of the top part of a building, it protects the building against the effects of wheather.
 *
 * The IfcRoof shall either be represented:
 */
 class IfcRoof extends IfcBuildingElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcRoofTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.PredefinedType = PredefinedType
    }
    /** Predefined generic types for a roof that are specified in an enumeration.
     * There may be a property set given for the predefined types.
     * The PredefinedType shall only be used, if no IfcRoofType is assigned, providing its own IfcRoofType.PredefinedType.
     * IFC4 CHANGE The attribute has been renamed from ShapeType and changed to be OPTIONAL with upward compatibility for file based exchange.
    */
    PredefinedType?: IfcRoofTypeEnum
}

export default IfcRoof
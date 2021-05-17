// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRamp

import { IfcRampTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcBuildingElement } from './'

/** A ramp is a vertical passageway which provides a human or vehicle circulation link between one floor level and another floor level at a different elevation.
 *
 * It may include a landing as an intermediate floor slab.
 *
 * A ramp normally does not include steps.
 *
 * The IfcRamp shall either be represented:
 */
 class IfcRamp extends IfcBuildingElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcRampTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.PredefinedType = PredefinedType
    }
    /** Predefined generic types for a ramp that are specified in an enumeration.
     * There may be a property set given for the predefined types.
     * The PredefinedType shall only be used, if no IfcRampType is assigned, providing its own IfcRampType.PredefinedType.
     * IFC4 CHANGE The attribute has been renamed from ShapeType and changed to be OPTIONAL with upward compatibility for file based exchange.
    */
    PredefinedType?: IfcRampTypeEnum
}

export default IfcRamp
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcBridge

import { IfcBridgeTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcElementCompositionEnum } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcFacility } from './'

/** A Bridge is civil engineering works that affords passage to pedestrians, animals, vehicles, and services above obstacles or between two points at a height above ground.
 */
 class IfcBridge extends IfcFacility {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, LongName:IfcLabel, CompositionType:IfcElementCompositionEnum, PredefinedType:IfcBridgeTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, LongName, CompositionType)
        this.PredefinedType = PredefinedType
    }
    /** 
    */
    PredefinedType?: IfcBridgeTypeEnum
}

export default IfcBridge
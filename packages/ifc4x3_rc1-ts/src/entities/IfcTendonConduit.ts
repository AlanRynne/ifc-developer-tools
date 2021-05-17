// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTendonConduit

import { IfcTendonConduitTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcReinforcingElement } from './'

/** 
 */
 class IfcTendonConduit extends IfcReinforcingElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, SteelGrade:IfcLabel, PredefinedType:IfcTendonConduitTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag, SteelGrade)
        this.PredefinedType = PredefinedType
    }
    /** The predefined generic type of the tendon conduit.
    */
    PredefinedType: IfcTendonConduitTypeEnum
}

export default IfcTendonConduit
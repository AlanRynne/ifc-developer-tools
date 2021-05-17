// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcReinforcedSoil

import { IfcReinforcedSoilTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcEarthworksElement } from './'

/**  */
 class IfcReinforcedSoil extends IfcEarthworksElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcReinforcedSoilTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.PredefinedType = PredefinedType
    }

    PredefinedType?: IfcReinforcedSoilTypeEnum
}

export default IfcReinforcedSoil
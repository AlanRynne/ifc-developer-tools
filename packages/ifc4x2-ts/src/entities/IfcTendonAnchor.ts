// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTendonAnchor

import { IfcTendonAnchorTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcReinforcingElement } from './'

/** A tendon anchor is the end connection for tendons in prestressed or posttensioned concrete.
 */
 class IfcTendonAnchor extends IfcReinforcingElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, SteelGrade:IfcLabel, PredefinedType:IfcTendonAnchorTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag, SteelGrade)
        this.PredefinedType = PredefinedType
    }
    /** Kind of tendon anchor.
    */
    PredefinedType?: IfcTendonAnchorTypeEnum
}

export default IfcTendonAnchor
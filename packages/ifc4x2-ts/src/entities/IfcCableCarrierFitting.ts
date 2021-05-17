// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCableCarrierFitting

import { IfcCableCarrierFittingTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcFlowFitting } from './'

/** A cable carrier fitting is a fitting that is placed at junction or transition in a cable carrier system.
 */
 class IfcCableCarrierFitting extends IfcFlowFitting {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcCableCarrierFittingTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.PredefinedType = PredefinedType
    }
    /** Identifies the predefined types of cable carrier fitting from which the type required may be set.
    */
    PredefinedType?: IfcCableCarrierFittingTypeEnum
}

export default IfcCableCarrierFitting
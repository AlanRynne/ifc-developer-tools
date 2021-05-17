// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCableCarrierSegment

import { IfcCableCarrierSegmentTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcFlowSegment } from './'

/** A cable carrier segment is a flow segment that is specifically used to carry and support cabling.
 */
 class IfcCableCarrierSegment extends IfcFlowSegment {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcCableCarrierSegmentTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.PredefinedType = PredefinedType
    }
    /** Identifies the predefined types of cable carrier segment from which the type required may be set.
    */
    PredefinedType?: IfcCableCarrierSegmentTypeEnum
}

export default IfcCableCarrierSegment
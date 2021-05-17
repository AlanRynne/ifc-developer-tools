// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCableSegment

import { IfcCableSegmentTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcFlowSegment } from './'

/** A cable segment is a flow segment used to carry electrical power, data, or telecommunications signals
 *
 * A cable segment is used to typically join two sections of an electrical network or a network of components carrying the electrical service.
 */
 class IfcCableSegment extends IfcFlowSegment {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcCableSegmentTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.PredefinedType = PredefinedType
    }
    /** Identifies the predefined types of cable segment from which the type required may be set.
    */
    PredefinedType?: IfcCableSegmentTypeEnum
}

export default IfcCableSegment
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcDoorStandardCase

import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier, IfcPositiveLengthMeasure, IfcDoorTypeEnum, IfcDoorTypeOperationEnum } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcDoor } from './'

/** The standard door, IfcDoorStandardCase, defines a door with certain constraints for the provision of operation types, opening directions, frame and lining parameters, and with certain constraints for the geometric representation.
 *
 * The IfcDoorStandardCase handles all cases of doors, that:Geometric RepresentationsThe geometric representation of IfcDoorStandardCase is defined using the following multiple shape representations for its definition:
 */
 class IfcDoorStandardCase extends IfcDoor {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, OverallHeight:IfcPositiveLengthMeasure, OverallWidth:IfcPositiveLengthMeasure, PredefinedType:IfcDoorTypeEnum, OperationType:IfcDoorTypeOperationEnum, UserDefinedOperationType:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag, OverallHeight, OverallWidth, PredefinedType, OperationType, UserDefinedOperationType)

    }

}

export default IfcDoorStandardCase
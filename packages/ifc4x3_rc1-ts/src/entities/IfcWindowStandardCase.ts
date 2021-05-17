// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcWindowStandardCase

import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier, IfcPositiveLengthMeasure, IfcWindowTypeEnum, IfcWindowTypePartitioningEnum } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcWindow } from './'

/** The standard window, IfcWindowStandardCase, defines a window with certain constraints for the provision of operation types, opening directions, frame and lining parameters, construction types and with certain constraints for the geometric representation.
 *
 * The IfcWindowStandardCase handles all cases of windows, that:The geometric representation of IfcWindowStandardCase is defined using the following multiple shape representations for its definition:
 */
 class IfcWindowStandardCase extends IfcWindow {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, OverallHeight:IfcPositiveLengthMeasure, OverallWidth:IfcPositiveLengthMeasure, PredefinedType:IfcWindowTypeEnum, PartitioningType:IfcWindowTypePartitioningEnum, UserDefinedPartitioningType:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag, OverallHeight, OverallWidth, PredefinedType, PartitioningType, UserDefinedPartitioningType)

    }

}

export default IfcWindowStandardCase
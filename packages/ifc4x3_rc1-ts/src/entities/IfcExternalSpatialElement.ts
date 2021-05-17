// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcExternalSpatialElement

import { IfcExternalSpatialElementTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcExternalSpatialStructureElement } from './'

/** The external spatial element defines external regions at the building site.
 *
 * Those regions can be defined:
 */
 class IfcExternalSpatialElement extends IfcExternalSpatialStructureElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, LongName:IfcLabel, PredefinedType:IfcExternalSpatialElementTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, LongName)
        this.PredefinedType = PredefinedType
    }
    /** Predefined generic types for an external spatial element that are specified in an enumeration.
     * There might be property sets defined specifically for each predefined type.
    */
    PredefinedType?: IfcExternalSpatialElementTypeEnum
}

export default IfcExternalSpatialElement
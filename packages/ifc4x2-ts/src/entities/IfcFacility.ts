// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcFacility

import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcElementCompositionEnum } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcSpatialStructureElement } from './'

/** A Facility (derived from SpatialStructureElement) may be an IfcBuilding or an IfcBridge (or any other type of built facility defined in the future, such as IfcRoad, IfcRailway and IfcTunnel).
 */
 class IfcFacility extends IfcSpatialStructureElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, LongName:IfcLabel, CompositionType:IfcElementCompositionEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, LongName, CompositionType)

    }

}

export default IfcFacility
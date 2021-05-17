// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcBuildingElementPart

import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcBuildingElementComponent } from './'

/** IfcBuildingElementPart represents major components as subordinate parts of a building element.
 *
 * Typical usage examples include precast concrete sandwich walls, where the layers may have different geometry representations.
 *
 * In this case the layered material representation does not sufficiently describe the element.
 *
 * Each layer is represented by an own instance of the IfcBuildingElementPart with its own geometry description
 *
 * The kind of building element part is further specified by a corresponding instance of IfcBuildingElementPartType, referred to by IfcRelDefinesByType.
 */
 class IfcBuildingElementPart extends IfcBuildingElementComponent {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)

    }

}

export default IfcBuildingElementPart
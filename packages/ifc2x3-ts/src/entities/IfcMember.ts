// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcMember

import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcBuildingElement } from './'

/** An IfcMember is a structural member designed to carry loads between or beyond points of support.
 *
 * It is not required to be load bearing.
 *
 * The orientation of the member (being horizontal, vertical or sloped) is not relevant to its definition (in contrary to IfcBeam and IfcColumn).
 *
 * An IfcMember represents a linear structural element from an architectural or structural modeling point of view and shall be used if it cannot be expressed more specifically as either an IfcBeam or an IfcColumn
 *
 * The IFC specification provides two entities for member occurrences:
 */
 class IfcMember extends IfcBuildingElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)

    }

}

export default IfcMember
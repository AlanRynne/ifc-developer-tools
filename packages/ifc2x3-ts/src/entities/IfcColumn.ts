// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcColumn

import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcBuildingElement } from './'

/** IfcColumn is a vertical structural member which often is aligned with a structural grid intersection.
 *
 * It represents a vertical, or nearly vertical, structural member that transmits, through compression, the weight of the structure above to other structural elements below.
 *
 * It represents such a member from an architectural point of view.
 *
 * It is not required to be load bearing
 *
 * The IFC specification provides two entities for column occurrences:
 */
 class IfcColumn extends IfcBuildingElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)

    }

}

export default IfcColumn
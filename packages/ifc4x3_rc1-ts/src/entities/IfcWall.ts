// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcWall

import { IfcWallTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcBuiltElement } from './'

/** The wall represents a vertical construction that may bound or subdivide spaces.
 *
 * Wall are usually vertical, or nearly vertical, planar elements, often designed to bear structural loads.
 *
 * A wall is however not required to be load bearing
 *
 * A wall may have openings, such as wall openings, openings used for windows or doors, or niches and recesses.
 *
 * They are defined by an IfcOpeningElement attached to the wall using the inverse relationship HasOpenings pointing to IfcRelVoidsElement
 *
 * There are three entities for wall occurrences:
 */
 class IfcWall extends IfcBuiltElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcWallTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.PredefinedType = PredefinedType
    }
    /** Predefined generic type for a wall that is specified in an enumeration.
     * There may be a property set given specifically for the predefined types.
     * The PredefinedType shall only be used, if no IfcWallType is assigned, providing its own IfcWallType.PredefinedType.
     * IFC4 CHANGE The attribute has been added at the end of the entity definition.
    */
    PredefinedType?: IfcWallTypeEnum
}

export default IfcWall
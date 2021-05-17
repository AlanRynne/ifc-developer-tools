// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStructuralPointReaction

import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcGlobalOrLocalEnum } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcStructuralLoad, IfcStructuralReaction } from './'

/** This entity defines a reaction which occurs at a point.
 *
 * A point reaction is typically connected with a point connection.
 *
 * It may also be connected with a curve member or curve connection, or surface member or surface connection
 *
 * Coordinate Systems:See definitions at IfcStructuralActivity
 *
 * Topology Use Definitions:Standard Case: If connected with a point item, instances of IfcStructuralPointReaction shall not have an ObjectPlacement nor a Representation.
 *
 * It is implied that the placement and representation of the reaction is the same as the structural item
 *
 * Special Case 1: If connected with a curve item or surface item, instances of IfcStructuralPointReaction shall have an ObjectPlacement and Representation, containing an IfcVertexPoint.
 *
 * See IfcStructuralActivity for further definitions
 *
 * Special Case 2: If not connected with a structural item (which may happen in an incomplete or conceptual model), a point action should have an ObjectPlacement and Representation, containing an IfcVertexPoint.
 *
 * See IfcStructuralActivity for further definitions.
 */
 class IfcStructuralPointReaction extends IfcStructuralReaction {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, AppliedLoad:IfcStructuralLoad, GlobalOrLocal:IfcGlobalOrLocalEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, AppliedLoad, GlobalOrLocal)

    }

}

export default IfcStructuralPointReaction
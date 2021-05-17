// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStructuralPointAction

import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcGlobalOrLocalEnum } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcStructuralLoad, IfcStructuralReaction, IfcStructuralAction } from './'

/** This entity defines an action which acts on a point.
 *
 * A point action is typically connected with a point connection.
 *
 * It may also be connected with a curve member or curve connection, or surface member or surface connection
 *
 * Coordinate Systems:See definitions at IfcStructuralActivity
 *
 * Topology Use Definitions:Standard Case: If connected with a point item, instances of IfcStructuralPointAction shall not have an ObjectPlacement nor a Representation.
 *
 * It is implied that the placement and representation of the action is the same as the structural item
 *
 * Special Case 1: If connected with a curve item or surface item, instances of IfcStructuralPointAction shall have an ObjectPlacement and Representation, containing an IfcVertexPoint.
 *
 * See IfcStructuralActivity for further definitions
 *
 * Special Case 2: If not connected with a structural item (which may happen in an incomplete or conceptual model), a point action should have an ObjectPlacement and Representation, containing an IfcVertexPoint.
 *
 * See IfcStructuralActivity for further definitions.
 */
 class IfcStructuralPointAction extends IfcStructuralAction {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, AppliedLoad:IfcStructuralLoad, GlobalOrLocal:IfcGlobalOrLocalEnum, DestabilizingLoad:boolean, CausedBy:IfcStructuralReaction) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, AppliedLoad, GlobalOrLocal, DestabilizingLoad, CausedBy)

    }

}

export default IfcStructuralPointAction
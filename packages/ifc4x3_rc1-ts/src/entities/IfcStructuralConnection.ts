// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStructuralConnection

import { IfcBoundaryCondition, IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcStructuralItem } from './'
import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'

/** An IfcStructuralConnection represents a structural connection object (node connection, edge connection, or surface connection) or supports.
 */
abstract class IfcStructuralConnection extends IfcStructuralItem {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, AppliedCondition:IfcBoundaryCondition) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation)
        this.AppliedCondition = AppliedCondition
    }
    /** Optional boundary conditions which define support conditions of this connection object, given in local coordinate directions of the connection object.
     * If left unspecified, the connection object is assumed to have no supports besides being connected with members.
    */
    AppliedCondition?: IfcBoundaryCondition
}

export default IfcStructuralConnection
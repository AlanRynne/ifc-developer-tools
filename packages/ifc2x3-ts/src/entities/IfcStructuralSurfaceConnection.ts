// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStructuralSurfaceConnection

import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcBoundaryCondition, IfcStructuralConnection } from './'

/** Instances of IfcStructuralSurfaceConnection describe face 'nodes', i.e. faces where two or more surface members are joined, or face supports.
 *
 * Face surfaces may be planar or curved
 *
 * Coordinate Systems:See definitions at IfcStructuralItem.
 *
 * The local coordinate system is established by the reference surface given by topology representation
 *
 * Topology Use Definitions:Instances of IfcStructuralSurfaceConnection shall have a topology representation which consists of one IfcFaceSurface, representing the reference surface of the surface connection.
 *
 * See definitions at IfcStructuralItem for further specifications.
 */
 class IfcStructuralSurfaceConnection extends IfcStructuralConnection {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, AppliedCondition:IfcBoundaryCondition) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, AppliedCondition)

    }

}

export default IfcStructuralSurfaceConnection
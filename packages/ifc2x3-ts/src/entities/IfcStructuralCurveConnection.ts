// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStructuralCurveConnection

import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcBoundaryCondition, IfcStructuralConnection } from './'

/** Instances of IfcStructuralCurveConnection describe edge 'nodes', i.e. edges where two or more surface members are joined, or edge supports.
 *
 * Edge curves may be straight or curved
 *
 * Coordinate Systems:See definitions at IfcStructuralItem.
 *
 * The local coordinate system is established by the reference curve given by topology representation and by the attribute Axis.
 *
 * The local x axis is parallel with the tangent on the reference curve.
 *
 * The local z axis is located in the surface which is created by sweeping Axis along the reference curve and is directed according to Axis.
 *
 * The local y axis is directed such that x,y,z form a right-handed Cartesian coordinate system.
 */
 class IfcStructuralCurveConnection extends IfcStructuralConnection {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, AppliedCondition:IfcBoundaryCondition) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, AppliedCondition)

    }

}

export default IfcStructuralCurveConnection
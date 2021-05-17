// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStructuralPointConnection

import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcBoundaryCondition, IfcStructuralConnection } from './'

/** Instances of IfcStructuralPointConnection describe structural nodes or point supports
 *
 * Coordinate Systems:See definitions at IfcStructuralItem.
 *
 * The local coordinate system is established by the reference point given by topology representation and by the attribute ConditionCoordinateSystem.
 */
 class IfcStructuralPointConnection extends IfcStructuralConnection {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, AppliedCondition:IfcBoundaryCondition) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, AppliedCondition)

    }

}

export default IfcStructuralPointConnection
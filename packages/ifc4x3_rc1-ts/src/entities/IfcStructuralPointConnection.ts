// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStructuralPointConnection

import { IfcAxis2Placement3D, IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcBoundaryCondition, IfcStructuralConnection } from './'
import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'

/** Instances of IfcStructuralPointConnection describe structural nodes or point supports
 *
 * Coordinate Systems:See definitions at IfcStructuralItem.
 *
 * The local coordinate system is established by the reference point given by topology representation and by the attribute ConditionCoordinateSystem.
 */
 class IfcStructuralPointConnection extends IfcStructuralConnection {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, AppliedCondition:IfcBoundaryCondition, ConditionCoordinateSystem:IfcAxis2Placement3D) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, AppliedCondition)
        this.ConditionCoordinateSystem = ConditionCoordinateSystem
    }
    /** Defines a coordinate system used for the description of the support condition properties in SELF\IfcStructuralConnection
     * SupportCondition, specified relative to the global coordinate system (global to the structural analysis model) established by SELF.\IfcProduct.ObjectPlacement.
     * If left unspecified, the placement IfcAxis2Placement3D((x,y,z), ?, ?) is implied with x,y,z being the coordinates of the reference point of this IfcStructuralPointConnection and the default axes directions being in parallel with the global axes.
    */
    ConditionCoordinateSystem?: IfcAxis2Placement3D
}

export default IfcStructuralPointConnection
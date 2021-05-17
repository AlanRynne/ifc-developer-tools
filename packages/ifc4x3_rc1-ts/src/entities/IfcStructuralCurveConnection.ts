// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStructuralCurveConnection

import { IfcDirection, IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcBoundaryCondition, IfcStructuralConnection } from './'
import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'

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
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, AppliedCondition:IfcBoundaryCondition, Axis:IfcDirection) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, AppliedCondition)
        this.Axis = Axis
    }
    /** Direction which is used in the definition of the local z axis.
     * Axis is specified relative to the so-called global coordinate system, i.e. the SELF\IfcProduct.ObjectPlacement.
     * It is desirable and usually possible that many instances of IfcStructuralCurveConnection and IfcStructuralCurveMember share a common instance of IfcDirection as their Axis attribute.
    */
    Axis: IfcDirection
}

export default IfcStructuralCurveConnection
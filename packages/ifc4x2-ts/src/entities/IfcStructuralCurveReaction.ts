// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStructuralCurveReaction

import { IfcStructuralCurveActivityTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcGlobalOrLocalEnum } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcStructuralLoad, IfcStructuralReaction } from './'

/** This entity defines a reaction which occurs distributed over a curve.
 *
 * A curve reaction may be connected with a curve member or curve connection, or surface member or surface connection
 *
 * Coordinate Systems:See definitions at IfcStructuralActivity
 *
 * Topology Use Definitions:Standard Case: If connected with a curve item, instances of IfcStructuralCurveRection shall not have an ObjectPlacement nor a Representation.
 *
 * It is implied that the placement and representation of the IfcStructuralActivity is the same as the ones of the member or connection
 *
 * Special Case: If connected with a surface item, instances of IfcStructuralCurveReaction shall have an ObjectPlacement and Representation, containing an IfcEdgeCurve.
 *
 * See IfcStructuralActivity for further definitions
 *
 * Informal Propositions:
 */
 class IfcStructuralCurveReaction extends IfcStructuralReaction {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, AppliedLoad:IfcStructuralLoad, GlobalOrLocal:IfcGlobalOrLocalEnum, PredefinedType:IfcStructuralCurveActivityTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, AppliedLoad, GlobalOrLocal)
        this.PredefinedType = PredefinedType
    }
    /** Type of reaction according to its distribution of load values.
    */
    PredefinedType: IfcStructuralCurveActivityTypeEnum
}

export default IfcStructuralCurveReaction
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStructuralCurveAction

import { IfcProjectedOrTrueLengthEnum, IfcStructuralCurveActivityTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcGlobalOrLocalEnum, IfcBoolean } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcStructuralLoad, IfcStructuralAction } from './'

/** A structural curve action defines an action which is distributed over a curve.
 *
 * A curve action may be connected with a curve member or curve connection, or surface member or surface connection
 *
 * Coordinate Systems:See definitions at IfcStructuralActivity
 *
 * Topology Use Definitions:Standard Case: If connected with a curve item, instances of IfcStructuralCurveAction shall not have an ObjectPlacement nor a Representation.
 *
 * It is implied that the placement and representation of the IfcStructuralActivity is the same as the ones of the member or connection
 *
 * Special Case 1: If connected with a surface item, instances of IfcStructuralCurveAction shall have an ObjectPlacement and Representation, containing an IfcEdgeCurve.
 *
 * See IfcStructuralActivity for further definitions
 *
 * Special Case 2: If not connected with a structural item (which may happen in an incomplete or conceptual model), a curve action should have an ObjectPlacement and Representation, containing an IfcEdgeCurve.
 *
 * See IfcStructuralActivity for further definitions
 *
 * Informal Propositions:
 */
 class IfcStructuralCurveAction extends IfcStructuralAction {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, AppliedLoad:IfcStructuralLoad, GlobalOrLocal:IfcGlobalOrLocalEnum, DestabilizingLoad:IfcBoolean, ProjectedOrTrue:IfcProjectedOrTrueLengthEnum, PredefinedType:IfcStructuralCurveActivityTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, AppliedLoad, GlobalOrLocal, DestabilizingLoad)
        this.ProjectedOrTrue = ProjectedOrTrue
        this.PredefinedType = PredefinedType
    }
    /** Defines whether load values are given per true length of the curve on which they act, or per length of the projection of the curve in load direction.
     * The latter is only applicable to loads which act in global coordinate directions.
    */
    ProjectedOrTrue?: IfcProjectedOrTrueLengthEnum
    /** Type of action according to its distribution of load values.
    */
    PredefinedType: IfcStructuralCurveActivityTypeEnum
}

export default IfcStructuralCurveAction
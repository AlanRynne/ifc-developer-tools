// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStructuralSurfaceAction

import { IfcProjectedOrTrueLengthEnum, IfcStructuralSurfaceActivityTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcGlobalOrLocalEnum, IfcBoolean } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcStructuralLoad, IfcStructuralAction } from './'

/** This entity defines an action which is distributed over a surface.
 *
 * A surface action may be connected with a surface member or surface connection
 *
 * Coordinate Systems:See definitions at IfcStructuralActivity
 *
 * Topology Use Definitions:Standard Case: If connected with a surface item and acting on its entirety, instances of IfcStructuralCurveAction shall not have an ObjectPlacement nor a Representation.
 *
 * It is implied that the placement and representation of the IfcStructuralActivity is the same as the ones of the member or connection
 *
 * Special Case 1: If connected with a surface item but acting only on a part of it, instances of IfcStructuralSurfaceAction shall have an ObjectPlacement and Representation, containing an IfcFaceSurface which topologically defines the loaded part of the surface.
 *
 * See IfcStructuralActivity for further definitions
 *
 * Special Case 2: If not connected with a structural item (which may happen in an incomplete or conceptual model), a surface action should have an ObjectPlacement and Representation, containing an IfcFaceSurface.
 *
 * See IfcStructuralActivity for further definitions
 *
 * Informal Propositions:
 */
 class IfcStructuralSurfaceAction extends IfcStructuralAction {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, AppliedLoad:IfcStructuralLoad, GlobalOrLocal:IfcGlobalOrLocalEnum, DestabilizingLoad:IfcBoolean, ProjectedOrTrue:IfcProjectedOrTrueLengthEnum, PredefinedType:IfcStructuralSurfaceActivityTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, AppliedLoad, GlobalOrLocal, DestabilizingLoad)
        this.ProjectedOrTrue = ProjectedOrTrue
        this.PredefinedType = PredefinedType
    }
    /** Defines whether load values are given per true lengths of the surface on which they act, or per lengths of the projection of the surface in load direction.
     * The latter is only applicable to loads which act in global coordinate directions.
    */
    ProjectedOrTrue?: IfcProjectedOrTrueLengthEnum
    /** Type of action according to its distribution of load values.
    */
    PredefinedType: IfcStructuralSurfaceActivityTypeEnum
}

export default IfcStructuralSurfaceAction
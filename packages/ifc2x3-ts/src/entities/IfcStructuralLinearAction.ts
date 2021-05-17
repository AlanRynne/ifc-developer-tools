// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStructuralLinearAction

import { IfcProjectedOrTrueLengthEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcGlobalOrLocalEnum } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcStructuralLoad, IfcStructuralReaction, IfcStructuralAction } from './'

/** This entity defines an action with constant value which is distributed over a curve.
 */
 class IfcStructuralLinearAction extends IfcStructuralAction {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, AppliedLoad:IfcStructuralLoad, GlobalOrLocal:IfcGlobalOrLocalEnum, DestabilizingLoad:boolean, CausedBy:IfcStructuralReaction, ProjectedOrTrue:IfcProjectedOrTrueLengthEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, AppliedLoad, GlobalOrLocal, DestabilizingLoad, CausedBy)
        this.ProjectedOrTrue = ProjectedOrTrue
    }
    /** undefined
    */
    ProjectedOrTrue: IfcProjectedOrTrueLengthEnum
}

export default IfcStructuralLinearAction
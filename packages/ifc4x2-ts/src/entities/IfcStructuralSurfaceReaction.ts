// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStructuralSurfaceReaction

import { IfcStructuralSurfaceActivityTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcGlobalOrLocalEnum } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcStructuralLoad, IfcStructuralReaction } from './'

/** This entity defines a reaction which occurs distributed over a surface.
 *
 * A surface reaction may be connected with a surface member or surface connection
 *
 * Coordinate Systems:See definitions at IfcStructuralActivity
 *
 * Topology Use Definitions:See definitions at IfcStructuralActivity
 *
 * Informal Propositions:
 */
 class IfcStructuralSurfaceReaction extends IfcStructuralReaction {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, AppliedLoad:IfcStructuralLoad, GlobalOrLocal:IfcGlobalOrLocalEnum, PredefinedType:IfcStructuralSurfaceActivityTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, AppliedLoad, GlobalOrLocal)
        this.PredefinedType = PredefinedType
    }
    /** Type of reaction according to its distribution of load values.
    */
    PredefinedType: IfcStructuralSurfaceActivityTypeEnum
}

export default IfcStructuralSurfaceReaction
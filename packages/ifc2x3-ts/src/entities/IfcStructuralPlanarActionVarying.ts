// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStructuralPlanarActionVarying

import { IfcShapeAspect, IfcStructuralLoad, IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcStructuralReaction, IfcStructuralPlanarAction } from './'
import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcGlobalOrLocalEnum, IfcProjectedOrTrueLengthEnum } from '../types'

/**  */
 class IfcStructuralPlanarActionVarying extends IfcStructuralPlanarAction {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, AppliedLoad:IfcStructuralLoad, GlobalOrLocal:IfcGlobalOrLocalEnum, DestabilizingLoad:boolean, CausedBy:IfcStructuralReaction, ProjectedOrTrue:IfcProjectedOrTrueLengthEnum, VaryingAppliedLoadLocation:IfcShapeAspect, SubsequentAppliedLoads:Array<IfcStructuralLoad>) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, AppliedLoad, GlobalOrLocal, DestabilizingLoad, CausedBy, ProjectedOrTrue)
        this.VaryingAppliedLoadLocation = VaryingAppliedLoadLocation
        this.SubsequentAppliedLoads = SubsequentAppliedLoads
    }

    VaryingAppliedLoadLocation: IfcShapeAspect

    SubsequentAppliedLoads: Array<IfcStructuralLoad>
}

export default IfcStructuralPlanarActionVarying
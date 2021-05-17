// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStructuralPlanarAction

import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcGlobalOrLocalEnum, IfcBoolean, IfcProjectedOrTrueLengthEnum, IfcStructuralSurfaceActivityTypeEnum } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcStructuralLoad, IfcStructuralSurfaceAction } from './'

/** This entity defines an action with constant value which is distributed over a surface.
 */
 class IfcStructuralPlanarAction extends IfcStructuralSurfaceAction {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, AppliedLoad:IfcStructuralLoad, GlobalOrLocal:IfcGlobalOrLocalEnum, DestabilizingLoad:IfcBoolean, ProjectedOrTrue:IfcProjectedOrTrueLengthEnum, PredefinedType:IfcStructuralSurfaceActivityTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, AppliedLoad, GlobalOrLocal, DestabilizingLoad, ProjectedOrTrue, PredefinedType)

    }

}

export default IfcStructuralPlanarAction
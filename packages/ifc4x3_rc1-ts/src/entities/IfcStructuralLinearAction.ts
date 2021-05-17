// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStructuralLinearAction

import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcGlobalOrLocalEnum, IfcBoolean, IfcProjectedOrTrueLengthEnum, IfcStructuralCurveActivityTypeEnum } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcStructuralLoad, IfcStructuralCurveAction } from './'

/** This entity defines an action with constant value which is distributed over a curve.
 */
 class IfcStructuralLinearAction extends IfcStructuralCurveAction {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, AppliedLoad:IfcStructuralLoad, GlobalOrLocal:IfcGlobalOrLocalEnum, DestabilizingLoad:IfcBoolean, ProjectedOrTrue:IfcProjectedOrTrueLengthEnum, PredefinedType:IfcStructuralCurveActivityTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, AppliedLoad, GlobalOrLocal, DestabilizingLoad, ProjectedOrTrue, PredefinedType)

    }

}

export default IfcStructuralLinearAction
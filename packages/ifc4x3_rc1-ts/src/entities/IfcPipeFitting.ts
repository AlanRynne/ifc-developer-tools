// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPipeFitting

import { IfcPipeFittingTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcFlowFitting } from './'

/** A pipe fitting is a junction or transition in a piping flow distribution system used to connect pipe segments, resulting in changes in flow characteristics to the fluid such as direction or flow rate
 *
 * Pipe fittings include elbows, junctions, manifolds, and plumbing boxes.
 */
 class IfcPipeFitting extends IfcFlowFitting {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcPipeFittingTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.PredefinedType = PredefinedType
    }
    /** 
    */
    PredefinedType?: IfcPipeFittingTypeEnum
}

export default IfcPipeFitting
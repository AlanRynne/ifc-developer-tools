// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcFlowController

import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcDistributionFlowElement } from './'

/** The distribution flow element IfcFlowController defines the occurrence of elements of a distribution system that are used to regulate flow through a distribution system.
 *
 * Examples include dampers, valves, switches, and relays.
 *
 * Its type is defined by IfcFlowControllerType or subtypes.
 */
 class IfcFlowController extends IfcDistributionFlowElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)

    }

}

export default IfcFlowController
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcFlowMovingDevice

import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcDistributionFlowElement } from './'

/** The distribution flow element IfcFlowMovingDevice defines the occurrence of an apparatus used to distribute, circulate or perform conveyance of fluids, including liquids and gases (such as a pump or fan), and typically participates in a flow distribution system.
 *
 * Its type is defined by IfcFlowMovingDeviceType or its subtypes.
 */
 class IfcFlowMovingDevice extends IfcDistributionFlowElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)

    }

}

export default IfcFlowMovingDevice
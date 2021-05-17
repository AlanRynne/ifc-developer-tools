// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcDistributionChamberElement

import { IfcDistributionChamberElementTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcDistributionFlowElement } from './'

/** A distribution chamber element defines a place at which distribution systems and their constituent elements may be inspected or through which they may travel
 *
 * An IfcDistributionChamberElement is a formed volume used in a distribution system, such as a sump, trench or manhole.
 *
 * Instances of IfcDistributionSystem or IfcDistributionFlowElement may be related to the IfcDistributionChamberElement enabling their location in or at the chamber to be determined.
 */
 class IfcDistributionChamberElement extends IfcDistributionFlowElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcDistributionChamberElementTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.PredefinedType = PredefinedType
    }
    /** 
    */
    PredefinedType?: IfcDistributionChamberElementTypeEnum
}

export default IfcDistributionChamberElement
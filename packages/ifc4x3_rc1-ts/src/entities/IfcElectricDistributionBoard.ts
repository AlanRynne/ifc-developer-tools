// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcElectricDistributionBoard

import { IfcElectricDistributionBoardTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcFlowController } from './'

/** A distribution board is a flow controller in which instances of electrical devices are brought together at a single place for a particular purpose
 *
 * A distribution provides a housing for connected electrical distribution elements so that they can be viewed, operated or acted upon from a single place.
 *
 * Each connected item may have its own geometric representation and location.
 */
 class IfcElectricDistributionBoard extends IfcFlowController {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcElectricDistributionBoardTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.PredefinedType = PredefinedType
    }
    /** 
    */
    PredefinedType?: IfcElectricDistributionBoardTypeEnum
}

export default IfcElectricDistributionBoard
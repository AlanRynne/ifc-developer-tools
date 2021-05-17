// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcElectricDistributionPoint

import { IfcElectricDistributionPointFunctionEnum, IfcLabel, IfcGloballyUniqueId, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcFlowController } from './'

/**  */
 class IfcElectricDistributionPoint extends IfcFlowController {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, DistributionPointFunction:IfcElectricDistributionPointFunctionEnum, UserDefinedFunction:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.DistributionPointFunction = DistributionPointFunction
        this.UserDefinedFunction = UserDefinedFunction
    }

    DistributionPointFunction: IfcElectricDistributionPointFunctionEnum

    UserDefinedFunction?: IfcLabel
}

export default IfcElectricDistributionPoint
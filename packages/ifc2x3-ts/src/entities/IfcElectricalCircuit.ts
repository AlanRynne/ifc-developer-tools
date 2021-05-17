// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcElectricalCircuit

import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcSystem } from './'

/**  */
 class IfcElectricalCircuit extends IfcSystem {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType)

    }

}

export default IfcElectricalCircuit
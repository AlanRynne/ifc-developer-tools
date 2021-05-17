// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcEnergyProperties

import { IfcEnergySequenceEnum, IfcLabel, IfcGloballyUniqueId, IfcText } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition } from './'

/**  */
 class IfcEnergyProperties extends IfcPropertySetDefinition {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, EnergySequence:IfcEnergySequenceEnum, UserDefinedEnergySequence:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.EnergySequence = EnergySequence
        this.UserDefinedEnergySequence = UserDefinedEnergySequence
    }

    EnergySequence?: IfcEnergySequenceEnum

    UserDefinedEnergySequence?: IfcLabel
}

export default IfcEnergyProperties
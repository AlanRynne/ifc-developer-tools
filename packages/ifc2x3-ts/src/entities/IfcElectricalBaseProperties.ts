// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcElectricalBaseProperties

import { IfcElectricCurrentEnum, IfcElectricVoltageMeasure, IfcFrequencyMeasure, IfcElectricCurrentMeasure, IfcPowerMeasure, IfcGloballyUniqueId, IfcLabel, IfcText, IfcEnergySequenceEnum } from '../types'
import { IfcOwnerHistory, IfcEnergyProperties } from './'

/**  */
 class IfcElectricalBaseProperties extends IfcEnergyProperties {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, EnergySequence:IfcEnergySequenceEnum, UserDefinedEnergySequence:IfcLabel, ElectricCurrentType:IfcElectricCurrentEnum, InputVoltage:IfcElectricVoltageMeasure, InputFrequency:IfcFrequencyMeasure, FullLoadCurrent:IfcElectricCurrentMeasure, MinimumCircuitCurrent:IfcElectricCurrentMeasure, MaximumPowerInput:IfcPowerMeasure, RatedPowerInput:IfcPowerMeasure, InputPhase:number) {
        super(GlobalId, OwnerHistory, Name, Description, EnergySequence, UserDefinedEnergySequence)
        this.ElectricCurrentType = ElectricCurrentType
        this.InputVoltage = InputVoltage
        this.InputFrequency = InputFrequency
        this.FullLoadCurrent = FullLoadCurrent
        this.MinimumCircuitCurrent = MinimumCircuitCurrent
        this.MaximumPowerInput = MaximumPowerInput
        this.RatedPowerInput = RatedPowerInput
        this.InputPhase = InputPhase
    }

    ElectricCurrentType?: IfcElectricCurrentEnum

    InputVoltage: IfcElectricVoltageMeasure

    InputFrequency: IfcFrequencyMeasure

    FullLoadCurrent?: IfcElectricCurrentMeasure

    MinimumCircuitCurrent?: IfcElectricCurrentMeasure

    MaximumPowerInput?: IfcPowerMeasure

    RatedPowerInput?: IfcPowerMeasure

    InputPhase: number
}

export default IfcElectricalBaseProperties
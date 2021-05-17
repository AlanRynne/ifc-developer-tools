// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSoundValue

import { IfcTimeSeries, IfcOwnerHistory, IfcPropertySetDefinition } from './'
import { IfcFrequencyMeasure, IfcDerivedMeasureValue, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'

/**  */
 class IfcSoundValue extends IfcPropertySetDefinition {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, SoundLevelTimeSeries:IfcTimeSeries, Frequency:IfcFrequencyMeasure, SoundLevelSingleValue:IfcDerivedMeasureValue) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.SoundLevelTimeSeries = SoundLevelTimeSeries
        this.Frequency = Frequency
        this.SoundLevelSingleValue = SoundLevelSingleValue
    }

    SoundLevelTimeSeries?: IfcTimeSeries

    Frequency: IfcFrequencyMeasure

    SoundLevelSingleValue?: IfcDerivedMeasureValue
}

export default IfcSoundValue
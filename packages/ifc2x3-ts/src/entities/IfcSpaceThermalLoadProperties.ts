// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSpaceThermalLoadProperties

import { IfcPositiveRatioMeasure, IfcThermalLoadSourceEnum, IfcPropertySourceEnum, IfcText, IfcPowerMeasure, IfcLabel, IfcThermalLoadTypeEnum, IfcGloballyUniqueId } from '../types'
import { IfcTimeSeries, IfcOwnerHistory, IfcPropertySetDefinition } from './'

/**  */
 class IfcSpaceThermalLoadProperties extends IfcPropertySetDefinition {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableValueRatio:IfcPositiveRatioMeasure, ThermalLoadSource:IfcThermalLoadSourceEnum, PropertySource:IfcPropertySourceEnum, SourceDescription:IfcText, MaximumValue:IfcPowerMeasure, MinimumValue:IfcPowerMeasure, ThermalLoadTimeSeriesValues:IfcTimeSeries, UserDefinedThermalLoadSource:IfcLabel, UserDefinedPropertySource:IfcLabel, ThermalLoadType:IfcThermalLoadTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.ApplicableValueRatio = ApplicableValueRatio
        this.ThermalLoadSource = ThermalLoadSource
        this.PropertySource = PropertySource
        this.SourceDescription = SourceDescription
        this.MaximumValue = MaximumValue
        this.MinimumValue = MinimumValue
        this.ThermalLoadTimeSeriesValues = ThermalLoadTimeSeriesValues
        this.UserDefinedThermalLoadSource = UserDefinedThermalLoadSource
        this.UserDefinedPropertySource = UserDefinedPropertySource
        this.ThermalLoadType = ThermalLoadType
    }

    ApplicableValueRatio?: IfcPositiveRatioMeasure

    ThermalLoadSource: IfcThermalLoadSourceEnum

    PropertySource: IfcPropertySourceEnum

    SourceDescription?: IfcText

    MaximumValue: IfcPowerMeasure

    MinimumValue?: IfcPowerMeasure

    ThermalLoadTimeSeriesValues?: IfcTimeSeries

    UserDefinedThermalLoadSource?: IfcLabel

    UserDefinedPropertySource?: IfcLabel

    ThermalLoadType: IfcThermalLoadTypeEnum
}

export default IfcSpaceThermalLoadProperties
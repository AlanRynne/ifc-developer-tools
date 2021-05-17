// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcFluidFlowProperties

import { IfcPropertySourceEnum, IfcLabel, IfcThermodynamicTemperatureMeasure, IfcDerivedMeasureValue, IfcPositiveRatioMeasure, IfcLinearVelocityMeasure, IfcPressureMeasure, IfcGloballyUniqueId, IfcText } from '../types'
import { IfcTimeSeries, IfcMaterial, IfcOwnerHistory, IfcPropertySetDefinition } from './'

/**  */
 class IfcFluidFlowProperties extends IfcPropertySetDefinition {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, PropertySource:IfcPropertySourceEnum, FlowConditionTimeSeries:IfcTimeSeries, VelocityTimeSeries:IfcTimeSeries, FlowrateTimeSeries:IfcTimeSeries, Fluid:IfcMaterial, PressureTimeSeries:IfcTimeSeries, UserDefinedPropertySource:IfcLabel, TemperatureSingleValue:IfcThermodynamicTemperatureMeasure, WetBulbTemperatureSingleValue:IfcThermodynamicTemperatureMeasure, WetBulbTemperatureTimeSeries:IfcTimeSeries, TemperatureTimeSeries:IfcTimeSeries, FlowrateSingleValue:IfcDerivedMeasureValue, FlowConditionSingleValue:IfcPositiveRatioMeasure, VelocitySingleValue:IfcLinearVelocityMeasure, PressureSingleValue:IfcPressureMeasure) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.PropertySource = PropertySource
        this.FlowConditionTimeSeries = FlowConditionTimeSeries
        this.VelocityTimeSeries = VelocityTimeSeries
        this.FlowrateTimeSeries = FlowrateTimeSeries
        this.Fluid = Fluid
        this.PressureTimeSeries = PressureTimeSeries
        this.UserDefinedPropertySource = UserDefinedPropertySource
        this.TemperatureSingleValue = TemperatureSingleValue
        this.WetBulbTemperatureSingleValue = WetBulbTemperatureSingleValue
        this.WetBulbTemperatureTimeSeries = WetBulbTemperatureTimeSeries
        this.TemperatureTimeSeries = TemperatureTimeSeries
        this.FlowrateSingleValue = FlowrateSingleValue
        this.FlowConditionSingleValue = FlowConditionSingleValue
        this.VelocitySingleValue = VelocitySingleValue
        this.PressureSingleValue = PressureSingleValue
    }

    PropertySource: IfcPropertySourceEnum

    FlowConditionTimeSeries?: IfcTimeSeries

    VelocityTimeSeries?: IfcTimeSeries

    FlowrateTimeSeries?: IfcTimeSeries

    Fluid: IfcMaterial

    PressureTimeSeries?: IfcTimeSeries

    UserDefinedPropertySource?: IfcLabel

    TemperatureSingleValue?: IfcThermodynamicTemperatureMeasure

    WetBulbTemperatureSingleValue?: IfcThermodynamicTemperatureMeasure

    WetBulbTemperatureTimeSeries?: IfcTimeSeries

    TemperatureTimeSeries?: IfcTimeSeries

    FlowrateSingleValue?: IfcDerivedMeasureValue

    FlowConditionSingleValue?: IfcPositiveRatioMeasure

    VelocitySingleValue?: IfcLinearVelocityMeasure

    PressureSingleValue?: IfcPressureMeasure
}

export default IfcFluidFlowProperties
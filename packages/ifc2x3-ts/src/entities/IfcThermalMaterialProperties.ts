// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcThermalMaterialProperties

import { IfcSpecificHeatCapacityMeasure, IfcThermodynamicTemperatureMeasure, IfcThermalConductivityMeasure } from '../types'
import { IfcMaterial, IfcMaterialProperties } from './'

/**  */
 class IfcThermalMaterialProperties extends IfcMaterialProperties {
    constructor(Material:IfcMaterial, SpecificHeatCapacity:IfcSpecificHeatCapacityMeasure, BoilingPoint:IfcThermodynamicTemperatureMeasure, FreezingPoint:IfcThermodynamicTemperatureMeasure, ThermalConductivity:IfcThermalConductivityMeasure) {
        super(Material)
        this.SpecificHeatCapacity = SpecificHeatCapacity
        this.BoilingPoint = BoilingPoint
        this.FreezingPoint = FreezingPoint
        this.ThermalConductivity = ThermalConductivity
    }

    SpecificHeatCapacity?: IfcSpecificHeatCapacityMeasure

    BoilingPoint?: IfcThermodynamicTemperatureMeasure

    FreezingPoint?: IfcThermodynamicTemperatureMeasure

    ThermalConductivity?: IfcThermalConductivityMeasure
}

export default IfcThermalMaterialProperties
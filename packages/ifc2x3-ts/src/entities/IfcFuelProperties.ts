// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcFuelProperties

import { IfcThermodynamicTemperatureMeasure, IfcPositiveRatioMeasure, IfcHeatingValueMeasure } from '../types'
import { IfcMaterial, IfcMaterialProperties } from './'

/**  */
 class IfcFuelProperties extends IfcMaterialProperties {
    constructor(Material:IfcMaterial, CombustionTemperature:IfcThermodynamicTemperatureMeasure, CarbonContent:IfcPositiveRatioMeasure, LowerHeatingValue:IfcHeatingValueMeasure, HigherHeatingValue:IfcHeatingValueMeasure) {
        super(Material)
        this.CombustionTemperature = CombustionTemperature
        this.CarbonContent = CarbonContent
        this.LowerHeatingValue = LowerHeatingValue
        this.HigherHeatingValue = HigherHeatingValue
    }

    CombustionTemperature?: IfcThermodynamicTemperatureMeasure

    CarbonContent?: IfcPositiveRatioMeasure

    LowerHeatingValue?: IfcHeatingValueMeasure

    HigherHeatingValue?: IfcHeatingValueMeasure
}

export default IfcFuelProperties
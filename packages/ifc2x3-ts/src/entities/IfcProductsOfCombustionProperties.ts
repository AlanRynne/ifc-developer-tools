// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcProductsOfCombustionProperties

import { IfcSpecificHeatCapacityMeasure, IfcPositiveRatioMeasure } from '../types'
import { IfcMaterial, IfcMaterialProperties } from './'

/**  */
 class IfcProductsOfCombustionProperties extends IfcMaterialProperties {
    constructor(Material:IfcMaterial, SpecificHeatCapacity:IfcSpecificHeatCapacityMeasure, N20Content:IfcPositiveRatioMeasure, COContent:IfcPositiveRatioMeasure, CO2Content:IfcPositiveRatioMeasure) {
        super(Material)
        this.SpecificHeatCapacity = SpecificHeatCapacity
        this.N20Content = N20Content
        this.COContent = COContent
        this.CO2Content = CO2Content
    }

    SpecificHeatCapacity?: IfcSpecificHeatCapacityMeasure

    N20Content?: IfcPositiveRatioMeasure

    COContent?: IfcPositiveRatioMeasure

    CO2Content?: IfcPositiveRatioMeasure
}

export default IfcProductsOfCombustionProperties
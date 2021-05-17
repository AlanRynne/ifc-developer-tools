// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcHygroscopicMaterialProperties

import { IfcPositiveRatioMeasure, IfcIsothermalMoistureCapacityMeasure, IfcVaporPermeabilityMeasure, IfcMoistureDiffusivityMeasure } from '../types'
import { IfcMaterial, IfcMaterialProperties } from './'

/**  */
 class IfcHygroscopicMaterialProperties extends IfcMaterialProperties {
    constructor(Material:IfcMaterial, UpperVaporResistanceFactor:IfcPositiveRatioMeasure, LowerVaporResistanceFactor:IfcPositiveRatioMeasure, IsothermalMoistureCapacity:IfcIsothermalMoistureCapacityMeasure, VaporPermeability:IfcVaporPermeabilityMeasure, MoistureDiffusivity:IfcMoistureDiffusivityMeasure) {
        super(Material)
        this.UpperVaporResistanceFactor = UpperVaporResistanceFactor
        this.LowerVaporResistanceFactor = LowerVaporResistanceFactor
        this.IsothermalMoistureCapacity = IsothermalMoistureCapacity
        this.VaporPermeability = VaporPermeability
        this.MoistureDiffusivity = MoistureDiffusivity
    }

    UpperVaporResistanceFactor?: IfcPositiveRatioMeasure

    LowerVaporResistanceFactor?: IfcPositiveRatioMeasure

    IsothermalMoistureCapacity?: IfcIsothermalMoistureCapacityMeasure

    VaporPermeability?: IfcVaporPermeabilityMeasure

    MoistureDiffusivity?: IfcMoistureDiffusivityMeasure
}

export default IfcHygroscopicMaterialProperties
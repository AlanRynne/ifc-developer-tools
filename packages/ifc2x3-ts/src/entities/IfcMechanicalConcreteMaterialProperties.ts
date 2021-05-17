// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcMechanicalConcreteMaterialProperties

import { IfcPressureMeasure, IfcPositiveLengthMeasure, IfcText, IfcNormalisedRatioMeasure, IfcDynamicViscosityMeasure, IfcModulusOfElasticityMeasure, IfcPositiveRatioMeasure, IfcThermalExpansionCoefficientMeasure } from '../types'
import { IfcMaterial, IfcMechanicalMaterialProperties } from './'

/**  */
 class IfcMechanicalConcreteMaterialProperties extends IfcMechanicalMaterialProperties {
    constructor(Material:IfcMaterial, DynamicViscosity:IfcDynamicViscosityMeasure, YoungModulus:IfcModulusOfElasticityMeasure, ShearModulus:IfcModulusOfElasticityMeasure, PoissonRatio:IfcPositiveRatioMeasure, ThermalExpansionCoefficient:IfcThermalExpansionCoefficientMeasure, CompressiveStrength:IfcPressureMeasure, MaxAggregateSize:IfcPositiveLengthMeasure, AdmixturesDescription:IfcText, Workability:IfcText, ProtectivePoreRatio:IfcNormalisedRatioMeasure, WaterImpermeability:IfcText) {
        super(Material, DynamicViscosity, YoungModulus, ShearModulus, PoissonRatio, ThermalExpansionCoefficient)
        this.CompressiveStrength = CompressiveStrength
        this.MaxAggregateSize = MaxAggregateSize
        this.AdmixturesDescription = AdmixturesDescription
        this.Workability = Workability
        this.ProtectivePoreRatio = ProtectivePoreRatio
        this.WaterImpermeability = WaterImpermeability
    }

    CompressiveStrength?: IfcPressureMeasure

    MaxAggregateSize?: IfcPositiveLengthMeasure

    AdmixturesDescription?: IfcText

    Workability?: IfcText

    ProtectivePoreRatio?: IfcNormalisedRatioMeasure

    WaterImpermeability?: IfcText
}

export default IfcMechanicalConcreteMaterialProperties
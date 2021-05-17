// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcMechanicalSteelMaterialProperties

import { IfcPressureMeasure, IfcPositiveRatioMeasure, IfcModulusOfElasticityMeasure, IfcDynamicViscosityMeasure, IfcThermalExpansionCoefficientMeasure } from '../types'
import { IfcRelaxation, IfcMaterial, IfcMechanicalMaterialProperties } from './'

/**  */
 class IfcMechanicalSteelMaterialProperties extends IfcMechanicalMaterialProperties {
    constructor(Material:IfcMaterial, DynamicViscosity:IfcDynamicViscosityMeasure, YoungModulus:IfcModulusOfElasticityMeasure, ShearModulus:IfcModulusOfElasticityMeasure, PoissonRatio:IfcPositiveRatioMeasure, ThermalExpansionCoefficient:IfcThermalExpansionCoefficientMeasure, YieldStress:IfcPressureMeasure, UltimateStress:IfcPressureMeasure, UltimateStrain:IfcPositiveRatioMeasure, HardeningModule:IfcModulusOfElasticityMeasure, ProportionalStress:IfcPressureMeasure, PlasticStrain:IfcPositiveRatioMeasure, Relaxations:Array<IfcRelaxation>) {
        super(Material, DynamicViscosity, YoungModulus, ShearModulus, PoissonRatio, ThermalExpansionCoefficient)
        this.YieldStress = YieldStress
        this.UltimateStress = UltimateStress
        this.UltimateStrain = UltimateStrain
        this.HardeningModule = HardeningModule
        this.ProportionalStress = ProportionalStress
        this.PlasticStrain = PlasticStrain
        this.Relaxations = Relaxations
    }

    YieldStress?: IfcPressureMeasure

    UltimateStress?: IfcPressureMeasure

    UltimateStrain?: IfcPositiveRatioMeasure

    HardeningModule?: IfcModulusOfElasticityMeasure

    ProportionalStress?: IfcPressureMeasure

    PlasticStrain?: IfcPositiveRatioMeasure

    Relaxations?: Array<IfcRelaxation>
}

export default IfcMechanicalSteelMaterialProperties
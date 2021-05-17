// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcMechanicalMaterialProperties

import { IfcDynamicViscosityMeasure, IfcModulusOfElasticityMeasure, IfcPositiveRatioMeasure, IfcThermalExpansionCoefficientMeasure } from '../types'
import { IfcMaterial, IfcMaterialProperties } from './'

/**  */
 class IfcMechanicalMaterialProperties extends IfcMaterialProperties {
    constructor(Material:IfcMaterial, DynamicViscosity:IfcDynamicViscosityMeasure, YoungModulus:IfcModulusOfElasticityMeasure, ShearModulus:IfcModulusOfElasticityMeasure, PoissonRatio:IfcPositiveRatioMeasure, ThermalExpansionCoefficient:IfcThermalExpansionCoefficientMeasure) {
        super(Material)
        this.DynamicViscosity = DynamicViscosity
        this.YoungModulus = YoungModulus
        this.ShearModulus = ShearModulus
        this.PoissonRatio = PoissonRatio
        this.ThermalExpansionCoefficient = ThermalExpansionCoefficient
    }

    DynamicViscosity?: IfcDynamicViscosityMeasure

    YoungModulus?: IfcModulusOfElasticityMeasure

    ShearModulus?: IfcModulusOfElasticityMeasure

    PoissonRatio?: IfcPositiveRatioMeasure

    ThermalExpansionCoefficient?: IfcThermalExpansionCoefficientMeasure
}

export default IfcMechanicalMaterialProperties
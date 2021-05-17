// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcWaterProperties

import { IfcIonConcentrationMeasure, IfcNormalisedRatioMeasure, IfcPHMeasure } from '../types'
import { IfcMaterial, IfcMaterialProperties } from './'

/**  */
 class IfcWaterProperties extends IfcMaterialProperties {
    constructor(Material:IfcMaterial, IsPotable:boolean, Hardness:IfcIonConcentrationMeasure, AlkalinityConcentration:IfcIonConcentrationMeasure, AcidityConcentration:IfcIonConcentrationMeasure, ImpuritiesContent:IfcNormalisedRatioMeasure, PHLevel:IfcPHMeasure, DissolvedSolidsContent:IfcNormalisedRatioMeasure) {
        super(Material)
        this.IsPotable = IsPotable
        this.Hardness = Hardness
        this.AlkalinityConcentration = AlkalinityConcentration
        this.AcidityConcentration = AcidityConcentration
        this.ImpuritiesContent = ImpuritiesContent
        this.PHLevel = PHLevel
        this.DissolvedSolidsContent = DissolvedSolidsContent
    }

    IsPotable?: boolean

    Hardness?: IfcIonConcentrationMeasure

    AlkalinityConcentration?: IfcIonConcentrationMeasure

    AcidityConcentration?: IfcIonConcentrationMeasure

    ImpuritiesContent?: IfcNormalisedRatioMeasure

    PHLevel?: IfcPHMeasure

    DissolvedSolidsContent?: IfcNormalisedRatioMeasure
}

export default IfcWaterProperties
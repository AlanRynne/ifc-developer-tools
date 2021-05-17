// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcGeneralMaterialProperties

import { IfcMolecularWeightMeasure, IfcNormalisedRatioMeasure, IfcMassDensityMeasure } from '../types'
import { IfcMaterial, IfcMaterialProperties } from './'

/**  */
 class IfcGeneralMaterialProperties extends IfcMaterialProperties {
    constructor(Material:IfcMaterial, MolecularWeight:IfcMolecularWeightMeasure, Porosity:IfcNormalisedRatioMeasure, MassDensity:IfcMassDensityMeasure) {
        super(Material)
        this.MolecularWeight = MolecularWeight
        this.Porosity = Porosity
        this.MassDensity = MassDensity
    }

    MolecularWeight?: IfcMolecularWeightMeasure

    Porosity?: IfcNormalisedRatioMeasure

    MassDensity?: IfcMassDensityMeasure
}

export default IfcGeneralMaterialProperties
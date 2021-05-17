// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelaxation

import { IfcNormalisedRatioMeasure } from '../types'

/**  */
 class IfcRelaxation  {
    constructor(RelaxationValue:IfcNormalisedRatioMeasure, InitialStress:IfcNormalisedRatioMeasure) {

        this.RelaxationValue = RelaxationValue
        this.InitialStress = InitialStress
    }

    RelaxationValue: IfcNormalisedRatioMeasure

    InitialStress: IfcNormalisedRatioMeasure
}

export default IfcRelaxation
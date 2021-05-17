// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcOpticalMaterialProperties

import { IfcPositiveRatioMeasure } from '../types'
import { IfcMaterial, IfcMaterialProperties } from './'

/**  */
 class IfcOpticalMaterialProperties extends IfcMaterialProperties {
    constructor(Material:IfcMaterial, VisibleTransmittance:IfcPositiveRatioMeasure, SolarTransmittance:IfcPositiveRatioMeasure, ThermalIrTransmittance:IfcPositiveRatioMeasure, ThermalIrEmissivityBack:IfcPositiveRatioMeasure, ThermalIrEmissivityFront:IfcPositiveRatioMeasure, VisibleReflectanceBack:IfcPositiveRatioMeasure, VisibleReflectanceFront:IfcPositiveRatioMeasure, SolarReflectanceFront:IfcPositiveRatioMeasure, SolarReflectanceBack:IfcPositiveRatioMeasure) {
        super(Material)
        this.VisibleTransmittance = VisibleTransmittance
        this.SolarTransmittance = SolarTransmittance
        this.ThermalIrTransmittance = ThermalIrTransmittance
        this.ThermalIrEmissivityBack = ThermalIrEmissivityBack
        this.ThermalIrEmissivityFront = ThermalIrEmissivityFront
        this.VisibleReflectanceBack = VisibleReflectanceBack
        this.VisibleReflectanceFront = VisibleReflectanceFront
        this.SolarReflectanceFront = SolarReflectanceFront
        this.SolarReflectanceBack = SolarReflectanceBack
    }

    VisibleTransmittance?: IfcPositiveRatioMeasure

    SolarTransmittance?: IfcPositiveRatioMeasure

    ThermalIrTransmittance?: IfcPositiveRatioMeasure

    ThermalIrEmissivityBack?: IfcPositiveRatioMeasure

    ThermalIrEmissivityFront?: IfcPositiveRatioMeasure

    VisibleReflectanceBack?: IfcPositiveRatioMeasure

    VisibleReflectanceFront?: IfcPositiveRatioMeasure

    SolarReflectanceFront?: IfcPositiveRatioMeasure

    SolarReflectanceBack?: IfcPositiveRatioMeasure
}

export default IfcOpticalMaterialProperties
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcLightSourceAmbient

import { IfcLabel, IfcNormalisedRatioMeasure } from '../types'
import { IfcColourRgb, IfcLightSource } from './'

/** 
 */
 class IfcLightSourceAmbient extends IfcLightSource {
    constructor(Name:IfcLabel, LightColour:IfcColourRgb, AmbientIntensity:IfcNormalisedRatioMeasure, Intensity:IfcNormalisedRatioMeasure) {
        super(Name, LightColour, AmbientIntensity, Intensity)

    }

}

export default IfcLightSourceAmbient
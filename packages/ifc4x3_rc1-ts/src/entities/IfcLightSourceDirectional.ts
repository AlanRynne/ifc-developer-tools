// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcLightSourceDirectional

import { IfcDirection, IfcColourRgb, IfcLightSource } from './'
import { IfcLabel, IfcNormalisedRatioMeasure } from '../types'

/** 
 */
 class IfcLightSourceDirectional extends IfcLightSource {
    constructor(Name:IfcLabel, LightColour:IfcColourRgb, AmbientIntensity:IfcNormalisedRatioMeasure, Intensity:IfcNormalisedRatioMeasure, Orientation:IfcDirection) {
        super(Name, LightColour, AmbientIntensity, Intensity)
        this.Orientation = Orientation
    }
    /** Definition from ISO/CD 10303-46:1992: This direction is the direction of the light source.
     * Definition from VRML97 - ISO/IEC 14772-1:1997: The direction field specifies the direction vector of the illumination emanating from the light source in the local coordinate system.
     * Light is emitted along parallel rays from an infinite distance away.
    */
    Orientation: IfcDirection
}

export default IfcLightSourceDirectional
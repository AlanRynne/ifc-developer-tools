// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcLightSource

import { IfcLabel, IfcNormalisedRatioMeasure } from '../types'
import { IfcColourRgb, IfcGeometricRepresentationItem } from './'

/** 
 */
abstract class IfcLightSource extends IfcGeometricRepresentationItem {
    constructor(Name:IfcLabel, LightColour:IfcColourRgb, AmbientIntensity:IfcNormalisedRatioMeasure, Intensity:IfcNormalisedRatioMeasure) {
        super()
        this.Name = Name
        this.LightColour = LightColour
        this.AmbientIntensity = AmbientIntensity
        this.Intensity = Intensity
    }
    /** The name given to the light source in presentation.
    */
    Name?: IfcLabel
    /** Definition from ISO/CD 10303-46:1992: Based on the current lighting model, the colour of the light to be used for shading.
     * Definition from VRML97 - ISO/IEC 14772-1:1997: The color field specifies the spectral color properties of both the direct and ambient light emission as an RGB value.
    */
    LightColour: IfcColourRgb
    /** Definition from VRML97 - ISO/IEC 14772-1:1997: The ambientIntensity specifies the intensity of the ambient emission from the light.
     * Light intensity may range from 0.0 (no light emission) to 1.0 (full intensity).
    */
    AmbientIntensity?: IfcNormalisedRatioMeasure
    /** Definition from VRML97 - ISO/IEC 14772-1:1997: The intensity field specifies the brightness of the direct emission from the ligth.
     * Light intensity may range from 0.0 (no light emission) to 1.0 (full intensity).
    */
    Intensity?: IfcNormalisedRatioMeasure
}

export default IfcLightSource
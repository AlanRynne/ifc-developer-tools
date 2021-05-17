// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcLightSourceGoniometric

import { IfcAxis2Placement3D, IfcColourRgb, IfcLightSource } from './'
import { IfcThermodynamicTemperatureMeasure, IfcLuminousFluxMeasure, IfcLightEmissionSourceEnum, IfcLightDistributionDataSourceSelect, IfcLabel, IfcNormalisedRatioMeasure } from '../types'

/** IfcLightSourceGoniometric defines a light source for which exact lighting data is available.
 *
 * It specifies the type of a light emitter, defines the position and orientation of a light distribution curve and the data concerning lamp and photometric information
 *
 * Figure 408 shows an example of a light emitter having two light sources (of type IfcLightSourceGoniometric).
 */
 class IfcLightSourceGoniometric extends IfcLightSource {
    constructor(Name:IfcLabel, LightColour:IfcColourRgb, AmbientIntensity:IfcNormalisedRatioMeasure, Intensity:IfcNormalisedRatioMeasure, Position:IfcAxis2Placement3D, ColourAppearance:IfcColourRgb, ColourTemperature:IfcThermodynamicTemperatureMeasure, LuminousFlux:IfcLuminousFluxMeasure, LightEmissionSource:IfcLightEmissionSourceEnum, LightDistributionDataSource:IfcLightDistributionDataSourceSelect) {
        super(Name, LightColour, AmbientIntensity, Intensity)
        this.Position = Position
        this.ColourAppearance = ColourAppearance
        this.ColourTemperature = ColourTemperature
        this.LuminousFlux = LuminousFlux
        this.LightEmissionSource = LightEmissionSource
        this.LightDistributionDataSource = LightDistributionDataSource
    }
    /** The position of the light source.
     * It is used to orientate the light distribution curves.
    */
    Position: IfcAxis2Placement3D
    /** Artificial light sources are classified in terms of their color appearance.
     * To the human eye they all appear to be white; the difference can only be detected by direct comparison.
     * Visual performance is not directly affected by differences in color appearance.
    */
    ColourAppearance?: IfcColourRgb
    /** The color temperature of any source of radiation is defined as the temperature (in Kelvin) of a black-body or Planckian radiator whose radiation has the same chromaticity as the source of radiation.
     * Often the values are only approximate color temperatures as the black-body radiator cannot emit radiation of every chromaticity value.
     * The color temperatures of the commonest artificial light sources range from less than 3000K (warm white) to 4000K (intermediate) and over 5000K (daylight).
    */
    ColourTemperature: IfcThermodynamicTemperatureMeasure
    /** Luminous flux is a photometric measure of radiant flux, i.e. the volume of light emitted from a light source.
     * Luminous flux is measured either for the interior as a whole or for a part of the interior (partial luminous flux for a solid angle).
     * All other photometric parameters are derivatives of luminous flux.
     * Luminous flux is measured in lumens (lm).
     * The luminous flux is given as a nominal value for each lamp.
    */
    LuminousFlux: IfcLuminousFluxMeasure
    /** Identifies the types of light emitter from which the type required may be set.
    */
    LightEmissionSource: IfcLightEmissionSourceEnum
    /** The data source from which light distribution data is obtained.
    */
    LightDistributionDataSource: IfcLightDistributionDataSourceSelect
}

export default IfcLightSourceGoniometric
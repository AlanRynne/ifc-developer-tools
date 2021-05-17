// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcLightSourcePositional

import { IfcCartesianPoint, IfcColourRgb, IfcLightSource } from './'
import { IfcPositiveLengthMeasure, IfcReal, IfcLabel, IfcNormalisedRatioMeasure } from '../types'

/** 
 */
 class IfcLightSourcePositional extends IfcLightSource {
    constructor(Name:IfcLabel, LightColour:IfcColourRgb, AmbientIntensity:IfcNormalisedRatioMeasure, Intensity:IfcNormalisedRatioMeasure, Position:IfcCartesianPoint, Radius:IfcPositiveLengthMeasure, ConstantAttenuation:IfcReal, DistanceAttenuation:IfcReal, QuadricAttenuation:IfcReal) {
        super(Name, LightColour, AmbientIntensity, Intensity)
        this.Position = Position
        this.Radius = Radius
        this.ConstantAttenuation = ConstantAttenuation
        this.DistanceAttenuation = DistanceAttenuation
        this.QuadricAttenuation = QuadricAttenuation
    }
    /** Definition from ISO/CD 10303-46:1992: The Cartesian point indicates the position of the light source.
     * Definition from VRML97 - ISO/IEC 14772-1:1997: A Point light node illuminates geometry within radius of its location.
    */
    Position: IfcCartesianPoint
    /** The maximum distance from the light source for a surface still to be illuminated.
     * Definition from VRML97 - ISO/IEC 14772-1:1997: A Point light node illuminates geometry within radius of its location.
    */
    Radius: IfcPositiveLengthMeasure
    /** Definition from ISO/CD 10303-46:1992: This real indicates the value of the attenuation in the lighting equation that is constant.
    */
    ConstantAttenuation: IfcReal
    /** Definition from ISO/CD 10303-46:1992: This real indicates the value of the attenuation in the lighting equation that proportional to the distance from the light source.
    */
    DistanceAttenuation: IfcReal
    /** This real indicates the value of the attenuation in the lighting equation that proportional to the square value of the distance from the light source.
    */
    QuadricAttenuation: IfcReal
}

export default IfcLightSourcePositional
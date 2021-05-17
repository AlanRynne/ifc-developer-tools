// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcLightSourceSpot

import { IfcDirection, IfcColourRgb, IfcCartesianPoint, IfcLightSourcePositional } from './'
import { IfcReal, IfcPositivePlaneAngleMeasure, IfcLabel, IfcNormalisedRatioMeasure, IfcPositiveLengthMeasure } from '../types'

/** 
 */
 class IfcLightSourceSpot extends IfcLightSourcePositional {
    constructor(Name:IfcLabel, LightColour:IfcColourRgb, AmbientIntensity:IfcNormalisedRatioMeasure, Intensity:IfcNormalisedRatioMeasure, Position:IfcCartesianPoint, Radius:IfcPositiveLengthMeasure, ConstantAttenuation:IfcReal, DistanceAttenuation:IfcReal, QuadricAttenuation:IfcReal, Orientation:IfcDirection, ConcentrationExponent:IfcReal, SpreadAngle:IfcPositivePlaneAngleMeasure, BeamWidthAngle:IfcPositivePlaneAngleMeasure) {
        super(Name, LightColour, AmbientIntensity, Intensity, Position, Radius, ConstantAttenuation, DistanceAttenuation, QuadricAttenuation)
        this.Orientation = Orientation
        this.ConcentrationExponent = ConcentrationExponent
        this.SpreadAngle = SpreadAngle
        this.BeamWidthAngle = BeamWidthAngle
    }
    /** Definition from ISO/CD 10303-46:1992: This is the direction of the axis of the cone of the light source specified in the coordinate space of the representation being projected..
     * Definition from VRML97 - ISO/IEC 14772-1:1997: The direction field specifies the direction vector of the light's central axis defined in the local coordinate system.
    */
    Orientation: IfcDirection
    /** Definition from ISO/CD 10303-46:1992: This real is the exponent on the cosine of the angle between the line that starts at the position of the spot light source and is in the direction of the orientation of the spot light source and a line that starts at the position of the spot light source and goes through a point on the surface being shaded.
     * This attribute does not exists in ISO/IEC 14772-1:1997.
    */
    ConcentrationExponent?: IfcReal
    /** Definition from ISO/CD 10303-46:1992: This planar angle measure is the angle between the line that starts at the position of the spot light source and is in the direction of the spot light source and any line on the boundary of the cone of influence.
     * Definition from VRML97 - ISO/IEC 14772-1:1997: The cutOffAngle (name of spread angle in VRML) field specifies the outer bound of the solid angle.
     * The light source does not emit light outside of this solid angle.
    */
    SpreadAngle: IfcPositivePlaneAngleMeasure
    /** Definition from VRML97 - ISO/IEC 14772-1:1997: The beamWidth field specifies an inner solid angle in which the light source emits light at uniform full intensity.
     * The light source's emission intensity drops off from the inner solid angle (beamWidthAngle) to the outer solid angle (spreadAngle).
    */
    BeamWidthAngle: IfcPositivePlaneAngleMeasure
}

export default IfcLightSourceSpot
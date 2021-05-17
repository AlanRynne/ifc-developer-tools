// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcLightDistributionData

import { IfcPlaneAngleMeasure, IfcLuminousIntensityDistributionMeasure } from '../types'

/** IfcLightDistributionData defines the luminous intensity of a light source given at a particular main plane angle.
 *
 * It is based on some standardized light distribution curves; the MainPlaneAngle is either theFor each MainPlaneAngle (considered as being the row of a table) a list of SecondaryPlaneAngle's are given (considered to be the columns of a table).
 *
 * They are either the:For each pair of MainPlaneAngle and SecondaryPlaneAngle the LuminousIntensity is provided (the unit is given by the IfcUnitAssignment referring to the LuminousIntensityDistributionUnit, normally cd/klm).
 */
 class IfcLightDistributionData  {
    constructor(MainPlaneAngle:IfcPlaneAngleMeasure, SecondaryPlaneAngle:Array<IfcPlaneAngleMeasure>, LuminousIntensity:Array<IfcLuminousIntensityDistributionMeasure>) {

        this.MainPlaneAngle = MainPlaneAngle
        this.SecondaryPlaneAngle = SecondaryPlaneAngle
        this.LuminousIntensity = LuminousIntensity
    }
    /** The main plane angle (A, B or C angles, according to the light distribution curve chosen).
    */
    MainPlaneAngle: IfcPlaneAngleMeasure
    /** The list of secondary plane angles (the α, β or γ angles) according to the light distribution curve chosen.
     * The SecondaryPlaneAngle and LuminousIntensity lists are corresponding lists.
    */
    SecondaryPlaneAngle: Array<IfcPlaneAngleMeasure>
    /** The luminous intensity distribution measure for this pair of main and secondary plane angles according to the light distribution curve chosen.
    */
    LuminousIntensity: Array<IfcLuminousIntensityDistributionMeasure>
}

export default IfcLightDistributionData
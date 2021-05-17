// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcLightIntensityDistribution

import { IfcLightDistributionCurveEnum } from '../types'
import { IfcLightDistributionData } from './'

/** IfcLightIntensityDistribution defines the the luminous intensity of a light source that changes according to the direction of the ray.
 *
 * It is based on some standardized light distribution curves, which are defined by the LightDistributionCurve attribute.
 */
 class IfcLightIntensityDistribution  {
    constructor(LightDistributionCurve:IfcLightDistributionCurveEnum, DistributionData:Array<IfcLightDistributionData>) {

        this.LightDistributionCurve = LightDistributionCurve
        this.DistributionData = DistributionData
    }
    /** Standardized light distribution curve used to define the luminous intensity of the light in all directions.
    */
    LightDistributionCurve: IfcLightDistributionCurveEnum
    /** Light distribution data applied to the light source.
     * It is defined by a list of main plane angles (B or C according to the light distribution curve chosen) that includes (for each B or C angle) a second list of secondary plane angles (the β or γ angles) and the according luminous intensity distribution measures.
    */
    DistributionData: Array<IfcLightDistributionData>
}

export default IfcLightIntensityDistribution
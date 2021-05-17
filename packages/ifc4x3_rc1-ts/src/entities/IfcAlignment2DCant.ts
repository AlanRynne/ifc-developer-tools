// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcAlignment2DCant

import { IfcAlignment2DCantSegment, IfcAxisLateralInclination } from './'
import { IfcPositiveLengthMeasure } from '../types'

/**  */
 class IfcAlignment2DCant extends IfcAxisLateralInclination {
    constructor(Segments:Array<IfcAlignment2DCantSegment>, RailHeadDistance:IfcPositiveLengthMeasure) {
        super()
        this.Segments = Segments
        this.RailHeadDistance = RailHeadDistance
    }

    Segments: Array<IfcAlignment2DCantSegment>

    RailHeadDistance: IfcPositiveLengthMeasure
}

export default IfcAlignment2DCant
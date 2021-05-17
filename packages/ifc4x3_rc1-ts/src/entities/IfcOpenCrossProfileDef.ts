// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcOpenCrossProfileDef

import { IfcBoolean, IfcNonNegativeLengthMeasure, IfcPlaneAngleMeasure, IfcLabel, IfcProfileTypeEnum } from '../types'
import { IfcProfileDef } from './'

/**  */
 class IfcOpenCrossProfileDef extends IfcProfileDef {
    constructor(ProfileType:IfcProfileTypeEnum, ProfileName:IfcLabel, HorizontalWidths:IfcBoolean, Widths:Array<IfcNonNegativeLengthMeasure>, Slopes:Array<IfcPlaneAngleMeasure>, Tags:Array<IfcLabel>) {
        super(ProfileType, ProfileName)
        this.HorizontalWidths = HorizontalWidths
        this.Widths = Widths
        this.Slopes = Slopes
        this.Tags = Tags
    }

    HorizontalWidths: IfcBoolean

    Widths: Array<IfcNonNegativeLengthMeasure>

    Slopes: Array<IfcPlaneAngleMeasure>

    Tags?: Array<IfcLabel>
}

export default IfcOpenCrossProfileDef
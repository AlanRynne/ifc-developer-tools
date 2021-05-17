// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCraneRailFShapeProfileDef

import { IfcPositiveLengthMeasure, IfcProfileTypeEnum, IfcLabel } from '../types'
import { IfcAxis2Placement2D, IfcParameterizedProfileDef } from './'

/**  */
 class IfcCraneRailFShapeProfileDef extends IfcParameterizedProfileDef {
    constructor(ProfileType:IfcProfileTypeEnum, ProfileName:IfcLabel, Position:IfcAxis2Placement2D, OverallHeight:IfcPositiveLengthMeasure, HeadWidth:IfcPositiveLengthMeasure, Radius:IfcPositiveLengthMeasure, HeadDepth2:IfcPositiveLengthMeasure, HeadDepth3:IfcPositiveLengthMeasure, WebThickness:IfcPositiveLengthMeasure, BaseDepth1:IfcPositiveLengthMeasure, BaseDepth2:IfcPositiveLengthMeasure, CentreOfGravityInY:IfcPositiveLengthMeasure) {
        super(ProfileType, ProfileName, Position)
        this.OverallHeight = OverallHeight
        this.HeadWidth = HeadWidth
        this.Radius = Radius
        this.HeadDepth2 = HeadDepth2
        this.HeadDepth3 = HeadDepth3
        this.WebThickness = WebThickness
        this.BaseDepth1 = BaseDepth1
        this.BaseDepth2 = BaseDepth2
        this.CentreOfGravityInY = CentreOfGravityInY
    }

    OverallHeight: IfcPositiveLengthMeasure

    HeadWidth: IfcPositiveLengthMeasure

    Radius?: IfcPositiveLengthMeasure

    HeadDepth2: IfcPositiveLengthMeasure

    HeadDepth3: IfcPositiveLengthMeasure

    WebThickness: IfcPositiveLengthMeasure

    BaseDepth1: IfcPositiveLengthMeasure

    BaseDepth2: IfcPositiveLengthMeasure

    CentreOfGravityInY?: IfcPositiveLengthMeasure
}

export default IfcCraneRailFShapeProfileDef
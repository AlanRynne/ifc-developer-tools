// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCraneRailAShapeProfileDef

import { IfcPositiveLengthMeasure, IfcProfileTypeEnum, IfcLabel } from '../types'
import { IfcAxis2Placement2D, IfcParameterizedProfileDef } from './'

/**  */
 class IfcCraneRailAShapeProfileDef extends IfcParameterizedProfileDef {
    constructor(ProfileType:IfcProfileTypeEnum, ProfileName:IfcLabel, Position:IfcAxis2Placement2D, OverallHeight:IfcPositiveLengthMeasure, BaseWidth2:IfcPositiveLengthMeasure, Radius:IfcPositiveLengthMeasure, HeadWidth:IfcPositiveLengthMeasure, HeadDepth2:IfcPositiveLengthMeasure, HeadDepth3:IfcPositiveLengthMeasure, WebThickness:IfcPositiveLengthMeasure, BaseWidth4:IfcPositiveLengthMeasure, BaseDepth1:IfcPositiveLengthMeasure, BaseDepth2:IfcPositiveLengthMeasure, BaseDepth3:IfcPositiveLengthMeasure, CentreOfGravityInY:IfcPositiveLengthMeasure) {
        super(ProfileType, ProfileName, Position)
        this.OverallHeight = OverallHeight
        this.BaseWidth2 = BaseWidth2
        this.Radius = Radius
        this.HeadWidth = HeadWidth
        this.HeadDepth2 = HeadDepth2
        this.HeadDepth3 = HeadDepth3
        this.WebThickness = WebThickness
        this.BaseWidth4 = BaseWidth4
        this.BaseDepth1 = BaseDepth1
        this.BaseDepth2 = BaseDepth2
        this.BaseDepth3 = BaseDepth3
        this.CentreOfGravityInY = CentreOfGravityInY
    }

    OverallHeight: IfcPositiveLengthMeasure

    BaseWidth2: IfcPositiveLengthMeasure

    Radius?: IfcPositiveLengthMeasure

    HeadWidth: IfcPositiveLengthMeasure

    HeadDepth2: IfcPositiveLengthMeasure

    HeadDepth3: IfcPositiveLengthMeasure

    WebThickness: IfcPositiveLengthMeasure

    BaseWidth4: IfcPositiveLengthMeasure

    BaseDepth1: IfcPositiveLengthMeasure

    BaseDepth2: IfcPositiveLengthMeasure

    BaseDepth3: IfcPositiveLengthMeasure

    CentreOfGravityInY?: IfcPositiveLengthMeasure
}

export default IfcCraneRailAShapeProfileDef
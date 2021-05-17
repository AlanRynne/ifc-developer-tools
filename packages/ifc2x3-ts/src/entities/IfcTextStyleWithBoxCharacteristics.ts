// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTextStyleWithBoxCharacteristics

import { IfcPositiveLengthMeasure, IfcPlaneAngleMeasure, IfcSizeSelect } from '../types'

/**  */
 class IfcTextStyleWithBoxCharacteristics  {
    constructor(BoxHeight:IfcPositiveLengthMeasure, BoxWidth:IfcPositiveLengthMeasure, BoxSlantAngle:IfcPlaneAngleMeasure, BoxRotateAngle:IfcPlaneAngleMeasure, CharacterSpacing:IfcSizeSelect) {

        this.BoxHeight = BoxHeight
        this.BoxWidth = BoxWidth
        this.BoxSlantAngle = BoxSlantAngle
        this.BoxRotateAngle = BoxRotateAngle
        this.CharacterSpacing = CharacterSpacing
    }

    BoxHeight?: IfcPositiveLengthMeasure

    BoxWidth?: IfcPositiveLengthMeasure

    BoxSlantAngle?: IfcPlaneAngleMeasure

    BoxRotateAngle?: IfcPlaneAngleMeasure

    CharacterSpacing?: IfcSizeSelect
}

export default IfcTextStyleWithBoxCharacteristics
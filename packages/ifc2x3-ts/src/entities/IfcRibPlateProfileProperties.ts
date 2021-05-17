// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRibPlateProfileProperties

import { IfcPositiveLengthMeasure, IfcRibPlateDirectionEnum, IfcLabel } from '../types'
import { IfcProfileDef, IfcProfileProperties } from './'

/**  */
 class IfcRibPlateProfileProperties extends IfcProfileProperties {
    constructor(ProfileName:IfcLabel, ProfileDefinition:IfcProfileDef, Thickness:IfcPositiveLengthMeasure, RibHeight:IfcPositiveLengthMeasure, RibWidth:IfcPositiveLengthMeasure, RibSpacing:IfcPositiveLengthMeasure, Direction:IfcRibPlateDirectionEnum) {
        super(ProfileName, ProfileDefinition)
        this.Thickness = Thickness
        this.RibHeight = RibHeight
        this.RibWidth = RibWidth
        this.RibSpacing = RibSpacing
        this.Direction = Direction
    }

    Thickness?: IfcPositiveLengthMeasure

    RibHeight?: IfcPositiveLengthMeasure

    RibWidth?: IfcPositiveLengthMeasure

    RibSpacing?: IfcPositiveLengthMeasure

    Direction: IfcRibPlateDirectionEnum
}

export default IfcRibPlateProfileProperties
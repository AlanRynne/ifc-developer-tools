// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcGeneralProfileProperties

import { IfcMassPerLengthMeasure, IfcPositiveLengthMeasure, IfcAreaMeasure, IfcLabel } from '../types'
import { IfcProfileDef, IfcProfileProperties } from './'

/**  */
 class IfcGeneralProfileProperties extends IfcProfileProperties {
    constructor(ProfileName:IfcLabel, ProfileDefinition:IfcProfileDef, PhysicalWeight:IfcMassPerLengthMeasure, Perimeter:IfcPositiveLengthMeasure, MinimumPlateThickness:IfcPositiveLengthMeasure, MaximumPlateThickness:IfcPositiveLengthMeasure, CrossSectionArea:IfcAreaMeasure) {
        super(ProfileName, ProfileDefinition)
        this.PhysicalWeight = PhysicalWeight
        this.Perimeter = Perimeter
        this.MinimumPlateThickness = MinimumPlateThickness
        this.MaximumPlateThickness = MaximumPlateThickness
        this.CrossSectionArea = CrossSectionArea
    }

    PhysicalWeight?: IfcMassPerLengthMeasure

    Perimeter?: IfcPositiveLengthMeasure

    MinimumPlateThickness?: IfcPositiveLengthMeasure

    MaximumPlateThickness?: IfcPositiveLengthMeasure

    CrossSectionArea?: IfcAreaMeasure
}

export default IfcGeneralProfileProperties
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStructuralProfileProperties

import { IfcMomentOfInertiaMeasure, IfcWarpingConstantMeasure, IfcLengthMeasure, IfcAreaMeasure, IfcSectionModulusMeasure, IfcLabel, IfcMassPerLengthMeasure, IfcPositiveLengthMeasure } from '../types'
import { IfcProfileDef, IfcGeneralProfileProperties } from './'

/**  */
 class IfcStructuralProfileProperties extends IfcGeneralProfileProperties {
    constructor(ProfileName:IfcLabel, ProfileDefinition:IfcProfileDef, PhysicalWeight:IfcMassPerLengthMeasure, Perimeter:IfcPositiveLengthMeasure, MinimumPlateThickness:IfcPositiveLengthMeasure, MaximumPlateThickness:IfcPositiveLengthMeasure, CrossSectionArea:IfcAreaMeasure, TorsionalConstantX:IfcMomentOfInertiaMeasure, MomentOfInertiaYZ:IfcMomentOfInertiaMeasure, MomentOfInertiaY:IfcMomentOfInertiaMeasure, MomentOfInertiaZ:IfcMomentOfInertiaMeasure, WarpingConstant:IfcWarpingConstantMeasure, ShearCentreZ:IfcLengthMeasure, ShearCentreY:IfcLengthMeasure, ShearDeformationAreaZ:IfcAreaMeasure, ShearDeformationAreaY:IfcAreaMeasure, MaximumSectionModulusY:IfcSectionModulusMeasure, MinimumSectionModulusY:IfcSectionModulusMeasure, MaximumSectionModulusZ:IfcSectionModulusMeasure, MinimumSectionModulusZ:IfcSectionModulusMeasure, TorsionalSectionModulus:IfcSectionModulusMeasure, CentreOfGravityInX:IfcLengthMeasure, CentreOfGravityInY:IfcLengthMeasure) {
        super(ProfileName, ProfileDefinition, PhysicalWeight, Perimeter, MinimumPlateThickness, MaximumPlateThickness, CrossSectionArea)
        this.TorsionalConstantX = TorsionalConstantX
        this.MomentOfInertiaYZ = MomentOfInertiaYZ
        this.MomentOfInertiaY = MomentOfInertiaY
        this.MomentOfInertiaZ = MomentOfInertiaZ
        this.WarpingConstant = WarpingConstant
        this.ShearCentreZ = ShearCentreZ
        this.ShearCentreY = ShearCentreY
        this.ShearDeformationAreaZ = ShearDeformationAreaZ
        this.ShearDeformationAreaY = ShearDeformationAreaY
        this.MaximumSectionModulusY = MaximumSectionModulusY
        this.MinimumSectionModulusY = MinimumSectionModulusY
        this.MaximumSectionModulusZ = MaximumSectionModulusZ
        this.MinimumSectionModulusZ = MinimumSectionModulusZ
        this.TorsionalSectionModulus = TorsionalSectionModulus
        this.CentreOfGravityInX = CentreOfGravityInX
        this.CentreOfGravityInY = CentreOfGravityInY
    }

    TorsionalConstantX?: IfcMomentOfInertiaMeasure

    MomentOfInertiaYZ?: IfcMomentOfInertiaMeasure

    MomentOfInertiaY?: IfcMomentOfInertiaMeasure

    MomentOfInertiaZ?: IfcMomentOfInertiaMeasure

    WarpingConstant?: IfcWarpingConstantMeasure

    ShearCentreZ?: IfcLengthMeasure

    ShearCentreY?: IfcLengthMeasure

    ShearDeformationAreaZ?: IfcAreaMeasure

    ShearDeformationAreaY?: IfcAreaMeasure

    MaximumSectionModulusY?: IfcSectionModulusMeasure

    MinimumSectionModulusY?: IfcSectionModulusMeasure

    MaximumSectionModulusZ?: IfcSectionModulusMeasure

    MinimumSectionModulusZ?: IfcSectionModulusMeasure

    TorsionalSectionModulus?: IfcSectionModulusMeasure

    CentreOfGravityInX?: IfcLengthMeasure

    CentreOfGravityInY?: IfcLengthMeasure
}

export default IfcStructuralProfileProperties
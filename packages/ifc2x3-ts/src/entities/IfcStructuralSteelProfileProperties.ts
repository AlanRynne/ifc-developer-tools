// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStructuralSteelProfileProperties

import { IfcAreaMeasure, IfcPositiveRatioMeasure, IfcLabel, IfcMassPerLengthMeasure, IfcPositiveLengthMeasure, IfcMomentOfInertiaMeasure, IfcWarpingConstantMeasure, IfcLengthMeasure, IfcSectionModulusMeasure } from '../types'
import { IfcProfileDef, IfcStructuralProfileProperties } from './'

/**  */
 class IfcStructuralSteelProfileProperties extends IfcStructuralProfileProperties {
    constructor(ProfileName:IfcLabel, ProfileDefinition:IfcProfileDef, PhysicalWeight:IfcMassPerLengthMeasure, Perimeter:IfcPositiveLengthMeasure, MinimumPlateThickness:IfcPositiveLengthMeasure, MaximumPlateThickness:IfcPositiveLengthMeasure, CrossSectionArea:IfcAreaMeasure, TorsionalConstantX:IfcMomentOfInertiaMeasure, MomentOfInertiaYZ:IfcMomentOfInertiaMeasure, MomentOfInertiaY:IfcMomentOfInertiaMeasure, MomentOfInertiaZ:IfcMomentOfInertiaMeasure, WarpingConstant:IfcWarpingConstantMeasure, ShearCentreZ:IfcLengthMeasure, ShearCentreY:IfcLengthMeasure, ShearDeformationAreaZ:IfcAreaMeasure, ShearDeformationAreaY:IfcAreaMeasure, MaximumSectionModulusY:IfcSectionModulusMeasure, MinimumSectionModulusY:IfcSectionModulusMeasure, MaximumSectionModulusZ:IfcSectionModulusMeasure, MinimumSectionModulusZ:IfcSectionModulusMeasure, TorsionalSectionModulus:IfcSectionModulusMeasure, CentreOfGravityInX:IfcLengthMeasure, CentreOfGravityInY:IfcLengthMeasure, ShearAreaZ:IfcAreaMeasure, ShearAreaY:IfcAreaMeasure, PlasticShapeFactorY:IfcPositiveRatioMeasure, PlasticShapeFactorZ:IfcPositiveRatioMeasure) {
        super(ProfileName, ProfileDefinition, PhysicalWeight, Perimeter, MinimumPlateThickness, MaximumPlateThickness, CrossSectionArea, TorsionalConstantX, MomentOfInertiaYZ, MomentOfInertiaY, MomentOfInertiaZ, WarpingConstant, ShearCentreZ, ShearCentreY, ShearDeformationAreaZ, ShearDeformationAreaY, MaximumSectionModulusY, MinimumSectionModulusY, MaximumSectionModulusZ, MinimumSectionModulusZ, TorsionalSectionModulus, CentreOfGravityInX, CentreOfGravityInY)
        this.ShearAreaZ = ShearAreaZ
        this.ShearAreaY = ShearAreaY
        this.PlasticShapeFactorY = PlasticShapeFactorY
        this.PlasticShapeFactorZ = PlasticShapeFactorZ
    }

    ShearAreaZ?: IfcAreaMeasure

    ShearAreaY?: IfcAreaMeasure

    PlasticShapeFactorY?: IfcPositiveRatioMeasure

    PlasticShapeFactorZ?: IfcPositiveRatioMeasure
}

export default IfcStructuralSteelProfileProperties
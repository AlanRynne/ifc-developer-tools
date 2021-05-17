// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStructuralLoadSingleDisplacementDistortion

import { IfcCurvatureMeasure, IfcLabel, IfcLengthMeasure, IfcPlaneAngleMeasure } from '../types'
import { IfcStructuralLoadSingleDisplacement } from './'

/** Defines a displacement with warping.
 */
 class IfcStructuralLoadSingleDisplacementDistortion extends IfcStructuralLoadSingleDisplacement {
    constructor(Name:IfcLabel, DisplacementX:IfcLengthMeasure, DisplacementY:IfcLengthMeasure, DisplacementZ:IfcLengthMeasure, RotationalDisplacementRX:IfcPlaneAngleMeasure, RotationalDisplacementRY:IfcPlaneAngleMeasure, RotationalDisplacementRZ:IfcPlaneAngleMeasure, Distortion:IfcCurvatureMeasure) {
        super(Name, DisplacementX, DisplacementY, DisplacementZ, RotationalDisplacementRX, RotationalDisplacementRY, RotationalDisplacementRZ)
        this.Distortion = Distortion
    }
    /** The distortion curvature (warping, i.e. a cross-sectional deplanation) given to the displacement load.
    */
    Distortion?: IfcCurvatureMeasure
}

export default IfcStructuralLoadSingleDisplacementDistortion
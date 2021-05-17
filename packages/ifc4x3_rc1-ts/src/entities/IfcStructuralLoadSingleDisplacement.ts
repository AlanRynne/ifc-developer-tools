// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStructuralLoadSingleDisplacement

import { IfcLengthMeasure, IfcPlaneAngleMeasure, IfcLabel } from '../types'
import { IfcStructuralLoadStatic } from './'

/** Instances of the entity IfcStructuralLoadSingleDisplacement shall be used to define displacements.
 */
 class IfcStructuralLoadSingleDisplacement extends IfcStructuralLoadStatic {
    constructor(Name:IfcLabel, DisplacementX:IfcLengthMeasure, DisplacementY:IfcLengthMeasure, DisplacementZ:IfcLengthMeasure, RotationalDisplacementRX:IfcPlaneAngleMeasure, RotationalDisplacementRY:IfcPlaneAngleMeasure, RotationalDisplacementRZ:IfcPlaneAngleMeasure) {
        super(Name)
        this.DisplacementX = DisplacementX
        this.DisplacementY = DisplacementY
        this.DisplacementZ = DisplacementZ
        this.RotationalDisplacementRX = RotationalDisplacementRX
        this.RotationalDisplacementRY = RotationalDisplacementRY
        this.RotationalDisplacementRZ = RotationalDisplacementRZ
    }
    /** Displacement in x-direction.
    */
    DisplacementX?: IfcLengthMeasure
    /** Displacement in y-direction.
    */
    DisplacementY?: IfcLengthMeasure
    /** Displacement in z-direction.
    */
    DisplacementZ?: IfcLengthMeasure
    /** Rotation about the x-axis.
    */
    RotationalDisplacementRX?: IfcPlaneAngleMeasure
    /** Rotation about the y-axis.
    */
    RotationalDisplacementRY?: IfcPlaneAngleMeasure
    /** Rotation about the z-axis.
    */
    RotationalDisplacementRZ?: IfcPlaneAngleMeasure
}

export default IfcStructuralLoadSingleDisplacement
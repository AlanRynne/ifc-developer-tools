// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcBoundaryNodeConditionWarping

import { IfcWarpingMomentMeasure, IfcLabel, IfcLinearStiffnessMeasure, IfcRotationalStiffnessMeasure } from '../types'
import { IfcBoundaryNodeCondition } from './'

/** Describes linearly elastic support conditions or connection conditions, including linearly elastic warping restraints
 *
 * Applicability:
 */
 class IfcBoundaryNodeConditionWarping extends IfcBoundaryNodeCondition {
    constructor(Name:IfcLabel, LinearStiffnessX:IfcLinearStiffnessMeasure, LinearStiffnessY:IfcLinearStiffnessMeasure, LinearStiffnessZ:IfcLinearStiffnessMeasure, RotationalStiffnessX:IfcRotationalStiffnessMeasure, RotationalStiffnessY:IfcRotationalStiffnessMeasure, RotationalStiffnessZ:IfcRotationalStiffnessMeasure, WarpingStiffness:IfcWarpingMomentMeasure) {
        super(Name, LinearStiffnessX, LinearStiffnessY, LinearStiffnessZ, RotationalStiffnessX, RotationalStiffnessY, RotationalStiffnessZ)
        this.WarpingStiffness = WarpingStiffness
    }
    /** Defines the warping stiffness value.
    */
    WarpingStiffness?: IfcWarpingMomentMeasure
}

export default IfcBoundaryNodeConditionWarping
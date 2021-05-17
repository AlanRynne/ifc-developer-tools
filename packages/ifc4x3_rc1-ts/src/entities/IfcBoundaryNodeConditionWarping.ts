// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcBoundaryNodeConditionWarping

import { IfcWarpingStiffnessSelect, IfcLabel, IfcTranslationalStiffnessSelect, IfcRotationalStiffnessSelect } from '../types'
import { IfcBoundaryNodeCondition } from './'

/** Describes linearly elastic support conditions or connection conditions, including linearly elastic warping restraints
 *
 * Applicability:
 */
 class IfcBoundaryNodeConditionWarping extends IfcBoundaryNodeCondition {
    constructor(Name:IfcLabel, TranslationalStiffnessX:IfcTranslationalStiffnessSelect, TranslationalStiffnessY:IfcTranslationalStiffnessSelect, TranslationalStiffnessZ:IfcTranslationalStiffnessSelect, RotationalStiffnessX:IfcRotationalStiffnessSelect, RotationalStiffnessY:IfcRotationalStiffnessSelect, RotationalStiffnessZ:IfcRotationalStiffnessSelect, WarpingStiffness:IfcWarpingStiffnessSelect) {
        super(Name, TranslationalStiffnessX, TranslationalStiffnessY, TranslationalStiffnessZ, RotationalStiffnessX, RotationalStiffnessY, RotationalStiffnessZ)
        this.WarpingStiffness = WarpingStiffness
    }
    /** Defines the warping stiffness value.
    */
    WarpingStiffness?: IfcWarpingStiffnessSelect
}

export default IfcBoundaryNodeConditionWarping
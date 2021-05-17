// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcBoundaryNodeCondition

import { IfcTranslationalStiffnessSelect, IfcRotationalStiffnessSelect, IfcLabel } from '../types'
import { IfcBoundaryCondition } from './'

/** Describes linearly elastic support conditions or connection conditions
 *
 * Applicability:
 */
 class IfcBoundaryNodeCondition extends IfcBoundaryCondition {
    constructor(Name:IfcLabel, TranslationalStiffnessX:IfcTranslationalStiffnessSelect, TranslationalStiffnessY:IfcTranslationalStiffnessSelect, TranslationalStiffnessZ:IfcTranslationalStiffnessSelect, RotationalStiffnessX:IfcRotationalStiffnessSelect, RotationalStiffnessY:IfcRotationalStiffnessSelect, RotationalStiffnessZ:IfcRotationalStiffnessSelect) {
        super(Name)
        this.TranslationalStiffnessX = TranslationalStiffnessX
        this.TranslationalStiffnessY = TranslationalStiffnessY
        this.TranslationalStiffnessZ = TranslationalStiffnessZ
        this.RotationalStiffnessX = RotationalStiffnessX
        this.RotationalStiffnessY = RotationalStiffnessY
        this.RotationalStiffnessZ = RotationalStiffnessZ
    }
    /** Translational stiffness value in x-direction of the coordinate system defined by the instance which uses this resource object.
    */
    TranslationalStiffnessX?: IfcTranslationalStiffnessSelect
    /** Translational stiffness value in y-direction of the coordinate system defined by the instance which uses this resource object.
    */
    TranslationalStiffnessY?: IfcTranslationalStiffnessSelect
    /** Translational stiffness value in z-direction of the coordinate system defined by the instance which uses this resource object.
    */
    TranslationalStiffnessZ?: IfcTranslationalStiffnessSelect
    /** Rotational stiffness value about the x-axis of the coordinate system defined by the instance which uses this resource object.
    */
    RotationalStiffnessX?: IfcRotationalStiffnessSelect
    /** Rotational stiffness value about the y-axis of the coordinate system defined by the instance which uses this resource object.
    */
    RotationalStiffnessY?: IfcRotationalStiffnessSelect
    /** Rotational stiffness value about the z-axis of the coordinate system defined by the instance which uses this resource object.
    */
    RotationalStiffnessZ?: IfcRotationalStiffnessSelect
}

export default IfcBoundaryNodeCondition
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcBoundaryNodeCondition

import { IfcLinearStiffnessMeasure, IfcRotationalStiffnessMeasure, IfcLabel } from '../types'
import { IfcBoundaryCondition } from './'

/** Describes linearly elastic support conditions or connection conditions
 *
 * Applicability:
 */
 class IfcBoundaryNodeCondition extends IfcBoundaryCondition {
    constructor(Name:IfcLabel, LinearStiffnessX:IfcLinearStiffnessMeasure, LinearStiffnessY:IfcLinearStiffnessMeasure, LinearStiffnessZ:IfcLinearStiffnessMeasure, RotationalStiffnessX:IfcRotationalStiffnessMeasure, RotationalStiffnessY:IfcRotationalStiffnessMeasure, RotationalStiffnessZ:IfcRotationalStiffnessMeasure) {
        super(Name)
        this.LinearStiffnessX = LinearStiffnessX
        this.LinearStiffnessY = LinearStiffnessY
        this.LinearStiffnessZ = LinearStiffnessZ
        this.RotationalStiffnessX = RotationalStiffnessX
        this.RotationalStiffnessY = RotationalStiffnessY
        this.RotationalStiffnessZ = RotationalStiffnessZ
    }
    /** undefined
    */
    LinearStiffnessX?: IfcLinearStiffnessMeasure
    /** undefined
    */
    LinearStiffnessY?: IfcLinearStiffnessMeasure
    /** undefined
    */
    LinearStiffnessZ?: IfcLinearStiffnessMeasure
    /** Rotational stiffness value about the x-axis of the coordinate system defined by the instance which uses this resource object.
    */
    RotationalStiffnessX?: IfcRotationalStiffnessMeasure
    /** Rotational stiffness value about the y-axis of the coordinate system defined by the instance which uses this resource object.
    */
    RotationalStiffnessY?: IfcRotationalStiffnessMeasure
    /** Rotational stiffness value about the z-axis of the coordinate system defined by the instance which uses this resource object.
    */
    RotationalStiffnessZ?: IfcRotationalStiffnessMeasure
}

export default IfcBoundaryNodeCondition
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcBoundaryEdgeCondition

import { IfcModulusOfLinearSubgradeReactionMeasure, IfcModulusOfRotationalSubgradeReactionMeasure, IfcLabel } from '../types'
import { IfcBoundaryCondition } from './'

/** Describes linearly elastic support conditions or connection conditions
 *
 * Applicability:
 */
 class IfcBoundaryEdgeCondition extends IfcBoundaryCondition {
    constructor(Name:IfcLabel, LinearStiffnessByLengthX:IfcModulusOfLinearSubgradeReactionMeasure, LinearStiffnessByLengthY:IfcModulusOfLinearSubgradeReactionMeasure, LinearStiffnessByLengthZ:IfcModulusOfLinearSubgradeReactionMeasure, RotationalStiffnessByLengthX:IfcModulusOfRotationalSubgradeReactionMeasure, RotationalStiffnessByLengthY:IfcModulusOfRotationalSubgradeReactionMeasure, RotationalStiffnessByLengthZ:IfcModulusOfRotationalSubgradeReactionMeasure) {
        super(Name)
        this.LinearStiffnessByLengthX = LinearStiffnessByLengthX
        this.LinearStiffnessByLengthY = LinearStiffnessByLengthY
        this.LinearStiffnessByLengthZ = LinearStiffnessByLengthZ
        this.RotationalStiffnessByLengthX = RotationalStiffnessByLengthX
        this.RotationalStiffnessByLengthY = RotationalStiffnessByLengthY
        this.RotationalStiffnessByLengthZ = RotationalStiffnessByLengthZ
    }
    /** undefined
    */
    LinearStiffnessByLengthX?: IfcModulusOfLinearSubgradeReactionMeasure
    /** undefined
    */
    LinearStiffnessByLengthY?: IfcModulusOfLinearSubgradeReactionMeasure
    /** undefined
    */
    LinearStiffnessByLengthZ?: IfcModulusOfLinearSubgradeReactionMeasure
    /** Rotational stiffness value about the x-axis of the coordinate system defined by the instance which uses this resource object.
    */
    RotationalStiffnessByLengthX?: IfcModulusOfRotationalSubgradeReactionMeasure
    /** Rotational stiffness value about the y-axis of the coordinate system defined by the instance which uses this resource object.
    */
    RotationalStiffnessByLengthY?: IfcModulusOfRotationalSubgradeReactionMeasure
    /** Rotational stiffness value about the z-axis of the coordinate system defined by the instance which uses this resource object.
    */
    RotationalStiffnessByLengthZ?: IfcModulusOfRotationalSubgradeReactionMeasure
}

export default IfcBoundaryEdgeCondition
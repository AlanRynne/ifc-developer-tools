// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcBoundaryEdgeCondition

import { IfcModulusOfTranslationalSubgradeReactionSelect, IfcModulusOfRotationalSubgradeReactionSelect, IfcLabel } from '../types'
import { IfcBoundaryCondition } from './'

/** Describes linearly elastic support conditions or connection conditions
 *
 * Applicability:
 */
 class IfcBoundaryEdgeCondition extends IfcBoundaryCondition {
    constructor(Name:IfcLabel, TranslationalStiffnessByLengthX:IfcModulusOfTranslationalSubgradeReactionSelect, TranslationalStiffnessByLengthY:IfcModulusOfTranslationalSubgradeReactionSelect, TranslationalStiffnessByLengthZ:IfcModulusOfTranslationalSubgradeReactionSelect, RotationalStiffnessByLengthX:IfcModulusOfRotationalSubgradeReactionSelect, RotationalStiffnessByLengthY:IfcModulusOfRotationalSubgradeReactionSelect, RotationalStiffnessByLengthZ:IfcModulusOfRotationalSubgradeReactionSelect) {
        super(Name)
        this.TranslationalStiffnessByLengthX = TranslationalStiffnessByLengthX
        this.TranslationalStiffnessByLengthY = TranslationalStiffnessByLengthY
        this.TranslationalStiffnessByLengthZ = TranslationalStiffnessByLengthZ
        this.RotationalStiffnessByLengthX = RotationalStiffnessByLengthX
        this.RotationalStiffnessByLengthY = RotationalStiffnessByLengthY
        this.RotationalStiffnessByLengthZ = RotationalStiffnessByLengthZ
    }
    /** Translational stiffness value in x-direction of the coordinate system defined by the instance which uses this resource object.
    */
    TranslationalStiffnessByLengthX?: IfcModulusOfTranslationalSubgradeReactionSelect
    /** Translational stiffness value in y-direction of the coordinate system defined by the instance which uses this resource object.
    */
    TranslationalStiffnessByLengthY?: IfcModulusOfTranslationalSubgradeReactionSelect
    /** Translational stiffness value in z-direction of the coordinate system defined by the instance which uses this resource object.
    */
    TranslationalStiffnessByLengthZ?: IfcModulusOfTranslationalSubgradeReactionSelect
    /** Rotational stiffness value about the x-axis of the coordinate system defined by the instance which uses this resource object.
    */
    RotationalStiffnessByLengthX?: IfcModulusOfRotationalSubgradeReactionSelect
    /** Rotational stiffness value about the y-axis of the coordinate system defined by the instance which uses this resource object.
    */
    RotationalStiffnessByLengthY?: IfcModulusOfRotationalSubgradeReactionSelect
    /** Rotational stiffness value about the z-axis of the coordinate system defined by the instance which uses this resource object.
    */
    RotationalStiffnessByLengthZ?: IfcModulusOfRotationalSubgradeReactionSelect
}

export default IfcBoundaryEdgeCondition
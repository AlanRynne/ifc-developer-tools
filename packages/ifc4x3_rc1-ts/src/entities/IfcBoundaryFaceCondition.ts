// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcBoundaryFaceCondition

import { IfcModulusOfSubgradeReactionSelect, IfcLabel } from '../types'
import { IfcBoundaryCondition } from './'

/** Describes linearly elastic support conditions or connection conditions
 *
 * Applicability:
 */
 class IfcBoundaryFaceCondition extends IfcBoundaryCondition {
    constructor(Name:IfcLabel, TranslationalStiffnessByAreaX:IfcModulusOfSubgradeReactionSelect, TranslationalStiffnessByAreaY:IfcModulusOfSubgradeReactionSelect, TranslationalStiffnessByAreaZ:IfcModulusOfSubgradeReactionSelect) {
        super(Name)
        this.TranslationalStiffnessByAreaX = TranslationalStiffnessByAreaX
        this.TranslationalStiffnessByAreaY = TranslationalStiffnessByAreaY
        this.TranslationalStiffnessByAreaZ = TranslationalStiffnessByAreaZ
    }
    /** Translational stiffness value in x-direction of the coordinate system defined by the instance which uses this resource object.
    */
    TranslationalStiffnessByAreaX?: IfcModulusOfSubgradeReactionSelect
    /** Translational stiffness value in y-direction of the coordinate system defined by the instance which uses this resource object.
    */
    TranslationalStiffnessByAreaY?: IfcModulusOfSubgradeReactionSelect
    /** Translational stiffness value in z-direction of the coordinate system defined by the instance which uses this resource object.
    */
    TranslationalStiffnessByAreaZ?: IfcModulusOfSubgradeReactionSelect
}

export default IfcBoundaryFaceCondition
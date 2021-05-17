// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcBoundaryFaceCondition

import { IfcModulusOfSubgradeReactionMeasure, IfcLabel } from '../types'
import { IfcBoundaryCondition } from './'

/** Describes linearly elastic support conditions or connection conditions
 *
 * Applicability:
 */
 class IfcBoundaryFaceCondition extends IfcBoundaryCondition {
    constructor(Name:IfcLabel, LinearStiffnessByAreaX:IfcModulusOfSubgradeReactionMeasure, LinearStiffnessByAreaY:IfcModulusOfSubgradeReactionMeasure, LinearStiffnessByAreaZ:IfcModulusOfSubgradeReactionMeasure) {
        super(Name)
        this.LinearStiffnessByAreaX = LinearStiffnessByAreaX
        this.LinearStiffnessByAreaY = LinearStiffnessByAreaY
        this.LinearStiffnessByAreaZ = LinearStiffnessByAreaZ
    }
    /** undefined
    */
    LinearStiffnessByAreaX?: IfcModulusOfSubgradeReactionMeasure
    /** undefined
    */
    LinearStiffnessByAreaY?: IfcModulusOfSubgradeReactionMeasure
    /** undefined
    */
    LinearStiffnessByAreaZ?: IfcModulusOfSubgradeReactionMeasure
}

export default IfcBoundaryFaceCondition
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcUnitAssignment

import { IfcUnit } from '../types'

/** IfcUnitAssignment indicates a set of units which may be assigned.
 *
 * Within an IfcUnitAssigment each unit definition shall be unique; that is, there shall be no redundant unit definitions for the same unit type such as length unit or area unit.
 *
 * For currencies, there shall be only a single IfcMonetaryUnit within an IfcUnitAssignment.
 */
 class IfcUnitAssignment  {
    constructor(Units:Array<IfcUnit>) {

        this.Units = Units
    }
    /** Units to be included within a unit assignment.
    */
    Units: Array<IfcUnit>
}

export default IfcUnitAssignment
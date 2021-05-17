// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcBoundaryCondition

import { IfcLabel } from '../types'

/** The abstract entity IfcBoundaryCondition is the supertype of all boundary conditions that can be applied to structural connection definitions, either directly for the connection (e.g. the joint) or for the relation between a structural member and the connection.
 */
abstract class IfcBoundaryCondition  {
    constructor(Name:IfcLabel) {

        this.Name = Name
    }
    /** Optionally defines a name for this boundary condition.
    */
    Name?: IfcLabel
}

export default IfcBoundaryCondition
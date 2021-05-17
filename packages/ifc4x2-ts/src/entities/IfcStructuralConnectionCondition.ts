// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStructuralConnectionCondition

import { IfcLabel } from '../types'

/** Describe more rarely needed connection properties.
 */
abstract class IfcStructuralConnectionCondition  {
    constructor(Name:IfcLabel) {

        this.Name = Name
    }
    /** Optionally defines a name for this connection condition.
    */
    Name?: IfcLabel
}

export default IfcStructuralConnectionCondition
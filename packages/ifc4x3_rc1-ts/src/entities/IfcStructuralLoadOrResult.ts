// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStructuralLoadOrResult

import { IfcLabel } from '../types'
import { IfcStructuralLoad } from './'

/** Abstract superclass of simple load or result classes.
 */
abstract class IfcStructuralLoadOrResult extends IfcStructuralLoad {
    constructor(Name:IfcLabel) {
        super(Name)

    }

}

export default IfcStructuralLoadOrResult
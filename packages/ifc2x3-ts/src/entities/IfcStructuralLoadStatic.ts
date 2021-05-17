// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStructuralLoadStatic

import { IfcLabel } from '../types'
import { IfcStructuralLoad } from './'

/** The abstract entity IfcStructuralLoadStatic is the supertype of all static loads (actions or reactions) which can be defined.
 *
 * Within scope are single i.e. concentrated forces and moments, linear i.e. one-dimensionally distributed forces and moments, planar i.e. two-dimensionally distributed forces, furthermore displacements and temperature loads.
 */
abstract class IfcStructuralLoadStatic extends IfcStructuralLoad {
    constructor(Name:IfcLabel) {
        super(Name)

    }

}

export default IfcStructuralLoadStatic
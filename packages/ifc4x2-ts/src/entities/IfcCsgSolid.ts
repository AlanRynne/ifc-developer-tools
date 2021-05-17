// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCsgSolid

import { IfcCsgSelect } from '../types'
import { IfcSolidModel } from './'

/** An IfcCsgSolid is the representation of a 3D shape using constructive solid geometry model.
 *
 * It is represented by a single 3D CSG primitive, or as a result of a Boolean operation.
 *
 * The operants of a Boolean operation can be Boolean operations themselves forming a CSG tree.
 *
 * The following volumes can be parts of the CSG tree:
 */
 class IfcCsgSolid extends IfcSolidModel {
    constructor(TreeRootExpression:IfcCsgSelect) {
        super()
        this.TreeRootExpression = TreeRootExpression
    }
    /** Boolean expression of primitives and regularized operators describing the solid.
     * The root of the tree of Boolean expressions is given explicitly as an IfcBooleanResult entitiy or as a primitive (subtypes of IfcCsgPrimitive3D).
    */
    TreeRootExpression: IfcCsgSelect
}

export default IfcCsgSolid
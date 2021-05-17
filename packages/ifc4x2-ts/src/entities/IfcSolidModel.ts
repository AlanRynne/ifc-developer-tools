// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSolidModel

import { IfcGeometricRepresentationItem } from './'

/** An IfcSolidModel represents the 3D shape by different types of solid model representations.
 *
 * It is the common abstract supertype of Boundary representation, CSG representation, Sweeping representation and other suitable solid representation schemes.
 */
abstract class IfcSolidModel extends IfcGeometricRepresentationItem {
    constructor() {
        super()

    }

}

export default IfcSolidModel
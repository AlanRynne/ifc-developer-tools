// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcGeometricCurveSet

import { IfcGeometricSetSelect } from '../types'
import { IfcGeometricSet } from './'

/** The IfcGeometricCurveSet is used for the exchange of shape representation consisting of an collection of (2D or 3D) points and curves only.
 */
 class IfcGeometricCurveSet extends IfcGeometricSet {
    constructor(Elements:Array<IfcGeometricSetSelect>) {
        super(Elements)

    }

}

export default IfcGeometricCurveSet
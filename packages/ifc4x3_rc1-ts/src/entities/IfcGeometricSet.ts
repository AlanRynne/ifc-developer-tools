// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcGeometricSet

import { IfcGeometricSetSelect } from '../types'
import { IfcGeometricRepresentationItem } from './'

/** The IfcGeometricSet is used for the exchange of shape representation consisting of (2D or 3D) points, curves, and surfaces, which do not have a topological structure (such as connected face sets or shells), are not tessellated and are not solid models (such as swept solids, CSG or Brep).
 */
 class IfcGeometricSet extends IfcGeometricRepresentationItem {
    constructor(Elements:Array<IfcGeometricSetSelect>) {
        super()
        this.Elements = Elements
    }
    /** The geometric elements which make up the geometric set, these may be points, curves or surfaces; but are required to be of the same coordinate space dimensionality.
    */
    Elements: Array<IfcGeometricSetSelect>
}

export default IfcGeometricSet
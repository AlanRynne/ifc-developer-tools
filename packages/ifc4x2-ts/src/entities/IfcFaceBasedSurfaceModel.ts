// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcFaceBasedSurfaceModel

import { IfcConnectedFaceSet, IfcGeometricRepresentationItem } from './'

/** The IfcFaceBasedSurfaceModel represents the a shape by connected face sets.
 *
 * The connected faces have a dimensionality 2 and are placed in a coordinate space of dimensionality 3.Informal Propositions:
 */
 class IfcFaceBasedSurfaceModel extends IfcGeometricRepresentationItem {
    constructor(FbsmFaces:Array<IfcConnectedFaceSet>) {
        super()
        this.FbsmFaces = FbsmFaces
    }
    /** The set of connected face sets comprising the face based surface model.
    */
    FbsmFaces: Array<IfcConnectedFaceSet>
}

export default IfcFaceBasedSurfaceModel
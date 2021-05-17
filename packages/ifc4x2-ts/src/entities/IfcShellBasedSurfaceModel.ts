// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcShellBasedSurfaceModel

import { IfcShell } from '../types'
import { IfcGeometricRepresentationItem } from './'

/** An IfcShellBasedSurfaceModel represents the shape by a set of open or closed shells.
 *
 * The connected faces within the shell have a dimensionality 2 and are placed in a coordinate space of dimensionality 3.Informal Propositions:
 */
 class IfcShellBasedSurfaceModel extends IfcGeometricRepresentationItem {
    constructor(SbsmBoundary:Array<IfcShell>) {
        super()
        this.SbsmBoundary = SbsmBoundary
    }
    /** 
    */
    SbsmBoundary: Array<IfcShell>
}

export default IfcShellBasedSurfaceModel
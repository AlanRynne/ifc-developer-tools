// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcFace

import { IfcFaceBound, IfcTopologicalRepresentationItem } from './'

/** An IfcFace is topological entity used to define surface, bounded by loops, of a shell
 *
 * Informal Propositions:
 */
 class IfcFace extends IfcTopologicalRepresentationItem {
    constructor(Bounds:Array<IfcFaceBound>) {
        super()
        this.Bounds = Bounds
    }
    /** Boundaries of the face.
    */
    Bounds: Array<IfcFaceBound>
}

export default IfcFace
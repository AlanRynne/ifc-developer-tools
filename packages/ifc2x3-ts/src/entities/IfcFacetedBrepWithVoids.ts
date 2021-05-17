// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcFacetedBrepWithVoids

import { IfcClosedShell, IfcManifoldSolidBrep } from './'

/** The IfcFacetedBrepWithVoids is a specialization of a faceted B-rep which contains one or more voids in its interior.
 *
 * The voids are represented as closed shells which are defined so that the shell normal point into the void.
 *
 * Informal Propositions:
 */
 class IfcFacetedBrepWithVoids extends IfcManifoldSolidBrep {
    constructor(Outer:IfcClosedShell, Voids:Array<IfcClosedShell>) {
        super(Outer)
        this.Voids = Voids
    }
    /** Set of closed shells defining voids within the solid.
    */
    Voids: Array<IfcClosedShell>
}

export default IfcFacetedBrepWithVoids
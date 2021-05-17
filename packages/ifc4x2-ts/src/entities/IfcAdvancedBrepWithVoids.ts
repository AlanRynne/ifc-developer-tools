// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcAdvancedBrepWithVoids

import { IfcClosedShell, IfcAdvancedBrep } from './'

/** The IfcAdvancedBrepWithVoids is a specialization of an advanced B-rep which contains one or more voids in its interior.
 *
 * The voids are represented as closed shells which are defined so that the shell normal point into the void
 *
 * Informal Propositions:
 */
 class IfcAdvancedBrepWithVoids extends IfcAdvancedBrep {
    constructor(Outer:IfcClosedShell, Voids:Array<IfcClosedShell>) {
        super(Outer)
        this.Voids = Voids
    }
    /** 
    */
    Voids: Array<IfcClosedShell>
}

export default IfcAdvancedBrepWithVoids
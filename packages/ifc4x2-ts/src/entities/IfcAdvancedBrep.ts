// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcAdvancedBrep

import { IfcClosedShell, IfcManifoldSolidBrep } from './'

/** An advanced B-rep is a boundary representation model in which all faces, edges and vertices are explicitly represented.
 *
 * It is a solid with explicit topology and elementary or free-form geometry.
 *
 * The faces of the B-rep are of type IfcAdvancedFace.
 *
 * An advanced B-rep has to meet the same topological constraints as the manifold solid B-rep
 *
 * Informal Propositions:
 */
 class IfcAdvancedBrep extends IfcManifoldSolidBrep {
    constructor(Outer:IfcClosedShell) {
        super(Outer)

    }

}

export default IfcAdvancedBrep
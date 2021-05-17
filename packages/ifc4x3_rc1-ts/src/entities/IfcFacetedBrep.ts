// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcFacetedBrep

import { IfcClosedShell, IfcManifoldSolidBrep } from './'

/** The IfcFacetedBrep is a manifold solid brep with the restriction that all faces are planar and bounded polygons.
 *
 * Informal Propositions:
 */
 class IfcFacetedBrep extends IfcManifoldSolidBrep {
    constructor(Outer:IfcClosedShell) {
        super(Outer)

    }

}

export default IfcFacetedBrep
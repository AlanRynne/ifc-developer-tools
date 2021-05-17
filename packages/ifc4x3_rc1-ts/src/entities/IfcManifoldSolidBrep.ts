// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcManifoldSolidBrep

import { IfcClosedShell, IfcSolidModel } from './'

/** The IfcManifoldSolidBrep is a solid represented as a collection of connected surfaces that delimit the solid from the surrounding non-solid
 *
 * Instances of type IfcManifoldSolidBrep shall be of type IfcFacetedBrep, using only IfcPolyLoop for the bounds of IfcFaceBound, or of type IfcAdvancedBrep, using only IfcAdvancedFace for the face geometry, and IfcEdgeCurve for the edges.
 *
 * Informal proposition:
 */
abstract class IfcManifoldSolidBrep extends IfcSolidModel {
    constructor(Outer:IfcClosedShell) {
        super()
        this.Outer = Outer
    }
    /** A closed shell defining the exterior boundary of the solid.
     * The shell normal shall point away from the interior of the solid.
    */
    Outer: IfcClosedShell
}

export default IfcManifoldSolidBrep
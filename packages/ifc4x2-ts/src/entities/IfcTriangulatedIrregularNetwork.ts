// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTriangulatedIrregularNetwork

import { IfcInteger, IfcParameterValue, IfcBoolean, IfcPositiveInteger } from '../types'
import { IfcCartesianPointList3D, IfcTriangulatedFaceSet } from './'

/** The IfcTriangulatedIrregularNetwork is a triangulated face set for representing horizontal surfaces (one unique Z coordinate for all X and Y coordinates within domain) with additional flags for each face indicating breaklines between faces or designation as a hole or void.
 *
 * Triangles shall be defined with vertices in counterclockwise order as viewing from above (following right-hand rule)
 *
 * For visualization, applications should not display faces where flags are set as negative (either a hole, void, or possible future extension)
 *
 * The flag Void shall be used to indicate that faces are to be excluded without falling back on any other geometry.
 *
 * Such designation could be used for portions of a site beneath a building or other structure
 *
 * The flag Hole shall be used to indicate that faces are to be excluded but may fall back on other geometry.
 *
 * Such designation could be used for portions of a proposed site that are to remain unchanged (conforming to an existing site that may also be defined)For scenarios where multiple surfaces used as input are to be combined, any triangles marked Void shall be retained as voids, while any triangles marked as Hole shall be overridden if another surface has visible geometry defined within the same horizontal location.
 */
 class IfcTriangulatedIrregularNetwork extends IfcTriangulatedFaceSet {
    constructor(Coordinates:IfcCartesianPointList3D, Normals:Array<Array<IfcParameterValue>>, Closed:IfcBoolean, CoordIndex:Array<Array<IfcPositiveInteger>>, PnIndex:Array<IfcPositiveInteger>, Flags:Array<IfcInteger>) {
        super(Coordinates, Normals, Closed, CoordIndex, PnIndex)
        this.Flags = Flags
    }
    /** Indicates attributes of each triangle in a compact form as follows: -2 = invisible void; -1 = invisible hole; 0 = no breaklines; 1 = breakline at edge 1; 2 = breakline at edge 2; 3 = breakline at edges 1 and 2; 4 = breakline at edge 3; 5 = breakline at edges 1 and 3; 6 = breakline at edges 2 and 3; 7 = breakline at edges 1, 2, and 3.
    */
    Flags: Array<IfcInteger>
}

export default IfcTriangulatedIrregularNetwork
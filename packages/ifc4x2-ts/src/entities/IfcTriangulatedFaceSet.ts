// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTriangulatedFaceSet

import { IfcParameterValue, IfcBoolean, IfcPositiveInteger } from '../types'
import { IfcCartesianPointList3D, IfcTessellatedFaceSet } from './'

/** The IfcTriangulatedFaceSet is a tessellated face set with all faces being bound by triangles.
 *
 * The faces are constructed by implicit polylines defined by three Cartesian points.
 *
 * Depending on the value of the attribute Closed the instance of IfcTriangulatedFaceSet represents:The coordinates of each point are provided by a one-based index into an ordered list of Cartesian points provided by the two-dimensional list CoordIndex, whereDepending on the provision of PnIndex the indices point either directly into the IfcCartesianPointList3D referenced by Coordinates defined at the supertype IfcTessellatedFaceSet, or they point into the PnIndex where the integer values at that position provides the location of the coordinate values within the IfcCartesianPointList3D.
 *
 * See Figure 362 for the handling of point index
 *
 * See Figure 363 for using the IfcTriangulatedFaceSet without (as default) and with using the PnIndex
 *
 * Optionally normals can be provided.
 *
 * Only normals per vector are supported allowing for visually curved triangles when the three normals of the corresponding three vertices of a triangle are not co-linear to the normal of the triangular face.
 *
 * If they are identical, normals shall be omited
 *
 * Normals are provided by the two-dimensional list Normals, whereThe indices in the CoordIndex point into the list of Normals.
 *
 * The indices of CoordIndex are applied to both points, either directly directly, or via the PnIndex and normals.
 *
 * See Figure 364 for handling of normals
 *
 * Figure 365 shows the use of IfcTriangulatedFaceSet without annotation.
 *
 * The diagram of the IfcTriangulatedFaceSet represents the indices and the ordered list into which the indices point.
 *
 * The index starts with 1 (indexed as 1 to N), if the greatest index in CoordIndex in N, then the IfcCartesianPointList shall have N lists of 3:3 coordinates.
 *
 * Informal Propositions:
 */
 class IfcTriangulatedFaceSet extends IfcTessellatedFaceSet {
    constructor(Coordinates:IfcCartesianPointList3D, Normals:Array<Array<IfcParameterValue>>, Closed:IfcBoolean, CoordIndex:Array<Array<IfcPositiveInteger>>, PnIndex:Array<IfcPositiveInteger>) {
        super(Coordinates)
        this.Normals = Normals
        this.Closed = Closed
        this.CoordIndex = CoordIndex
        this.PnIndex = PnIndex
    }
    /** An ordered list of three directions for normals.
     * It is a two-dimensional list of directions provided by three parameter values.
     * The first dimension corresponds to the vertex indices of the Coordindex The second dimension has exactly three values, [1] the x-direction, [2] the y-direction and [3] the z-directions
    */
    Normals?: Array<Array<IfcParameterValue>>
    /** Indication whether the IfcTriangulatedFaceSet is a closed shell or not.
     * If omited no such information can be provided.
    */
    Closed?: IfcBoolean
    /** Two-dimensional list for the indexed-based triangles, where The first dimension represents the triangles (from 1 to N) The second dimension has exactly three values representing the indices to three vertex points (from 1 to 3).
     * The coordinates of the vertices are provided by the indexed list of SELF\IfcTessellatedFaceSet.Coordinates.CoordList.
    */
    CoordIndex: Array<Array<IfcPositiveInteger>>
    /** The list of integers defining the locations in the IfcCartesianPointList3D to obtain the point coordinates for the indices withint the CoordIndex.
     * If the PnIndex is not provided the indices point directly into the IfcCartesianPointList3D.
    */
    PnIndex?: Array<IfcPositiveInteger>
}

export default IfcTriangulatedFaceSet
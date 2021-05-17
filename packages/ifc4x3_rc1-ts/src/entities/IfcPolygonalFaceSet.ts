// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPolygonalFaceSet

import { IfcBoolean, IfcPositiveInteger } from '../types'
import { IfcIndexedPolygonalFace, IfcCartesianPointList3D, IfcTessellatedFaceSet } from './'

/** The IfcPolygonalFaceSet is a tessellated face set with all faces being bound by polygons.
 *
 * The planar faces are constructed by implicit polylines defined by three or more Cartesian points.
 *
 * Each planar face is defined by an instance of IfcIndexedPolygonalFace, or in case of faces with inner loops by IfcIndexedPolygonalFaceWithVoids
 *
 * Depending on the value of the attribute Closed the instance of IfcPolygonalFaceSet represents:Depending on the provision of PnIndex the indices point either directly into the IfcCartesianPointList3D referenced by Coordinates defined at the supertype IfcTessellatedFaceSet, or they point into the PnIndex where the integer values at that position provides the location of the coordinate values within the IfcCartesianPointList3D.
 *
 * See Figure 341 for the handling of point index.
 *
 * Informal Propositions:
 */
 class IfcPolygonalFaceSet extends IfcTessellatedFaceSet {
    constructor(Coordinates:IfcCartesianPointList3D, Closed:IfcBoolean, Faces:Array<IfcIndexedPolygonalFace>, PnIndex:Array<IfcPositiveInteger>) {
        super(Coordinates)
        this.Closed = Closed
        this.Faces = Faces
        this.PnIndex = PnIndex
    }
    /** Indication whether the IfcPolygonalFaceSet is a closed shell or not.
     * If omited no such information can be provided.
    */
    Closed?: IfcBoolean
    /** The list of polygonal faces, with or without inner loops, that bound the faceted face set.
    */
    Faces: Array<IfcIndexedPolygonalFace>
    /** The list of integers defining the locations in the IfcCartesianPointList3D to obtain the point coordinates for the indices at the indexed polygonal faces.
     * If the PnIndex is not provided the indices at the indexed polygonal faces point directly into the IfcCartesianPointList3D.
    */
    PnIndex?: Array<IfcPositiveInteger>
}

export default IfcPolygonalFaceSet
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcIndexedPolygonalFace

import { IfcPositiveInteger } from '../types'
import { IfcTessellatedItem } from './'

/** The IfcIndexedPolygonalFace is a compact representation of a planar face being part of a face set.
 *
 * The vertices of the polygonal planar face are provided by 3 or more Cartesian points, defined by indices that point into an IfcCartesianPointList3D, either direcly, or via the PnIndex, if provided at IfcPolygonalFaceSet
 *
 * Figure 338 shows an IfcIndexedPolygonalFace at an IfcPolygonalFaceSet not using PnIndex (the default).
 *
 * Figure 339 shows an IfcIndexedPolygonalFace at an IfcPolygonalFaceSet using PnIndex.
 */
 class IfcIndexedPolygonalFace extends IfcTessellatedItem {
    constructor(CoordIndex:Array<IfcPositiveInteger>) {
        super()
        this.CoordIndex = CoordIndex
    }
    /** One-dimensional list with the indices for the three or more points, that define the vertices of the outer loop.
     * If the tessellated face set is closed, indicated by SELF\IfcTessellatedFaceSet
     * Closed, then the points, defining the outer loop, shall connect counter clockwise, as seen from the outside of the body, so that the resulting normal will point outwards.
     * The coordinates of the vertices are provided by the indexed list of SELF\IfcTessellatedFaceSet.Coordinates.CoordList.
     * If the SELF\IfcTessellatedFaceSet
     * PnIndex is provided, the indices point into it, otherwise directly into the IfcCartesianPointList3D.
    */
    CoordIndex: Array<IfcPositiveInteger>
}

export default IfcIndexedPolygonalFace
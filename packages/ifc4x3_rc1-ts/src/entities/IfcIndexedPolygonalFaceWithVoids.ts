// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcIndexedPolygonalFaceWithVoids

import { IfcPositiveInteger } from '../types'
import { IfcIndexedPolygonalFace } from './'

/** The IfcIndexedPolygonalFaceWithVoids is a compact representation of a planar face with inner loops, being part of a face set.
 */
 class IfcIndexedPolygonalFaceWithVoids extends IfcIndexedPolygonalFace {
    constructor(CoordIndex:Array<IfcPositiveInteger>, InnerCoordIndices:Array<Array<IfcPositiveInteger>>) {
        super(CoordIndex)
        this.InnerCoordIndices = InnerCoordIndices
    }
    /** Two-dimensional list, where the first dimension represents each inner loop (from 1 to N) and the second dimension the indices to three or more points that define the vertices of each inner loop.
     * If the tessellated face set is closed, indicated by SELF\IfcTessellatedFaceSet
     * Closed, then the points, defining the inner loops, shall connect clockwise, as seen from the outside of the body.
     * The coordinates of the vertices are provided by the indexed list of SELF\IfcTessellatedFaceSet.Coordinates.CoordList.
     * If the SELF\IfcTessellatedFaceSet
     * PnIndex is provided, the indices point into it, otherwise directly into the IfcCartesianPointList3D.
    */
    InnerCoordIndices: Array<Array<IfcPositiveInteger>>
}

export default IfcIndexedPolygonalFaceWithVoids
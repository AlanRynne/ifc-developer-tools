// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcIndexedTriangleTextureMap

import { IfcPositiveInteger } from '../types'
import { IfcSurfaceTexture, IfcTessellatedFaceSet, IfcTextureVertexList, IfcIndexedTextureMap } from './'

/** The IfcIndexedTriangleTextureMap provides the mapping of the 2-dimensional texture coordinates to the surface onto which it is mapped.
 *
 * It is used for mapping the texture to triangles of the IfcTriangulatedFaceSet.
 *
 * The IfcIndexedTriangleTextureMap defines an index into an indexed list of texture coordinates.
 *
 * The TexCoordIndex is a two-dimensional list, where The TexCoords defined at supertype IfcIndexedTextureMap are a two-dimensional list of texture coordinates provided by two parameter values.
 *
 * Each index of the second dimension list of TexCoordIndex points to a texture vertex in TexCoords.
 *
 * Figure 398 shows the use of IfcTriangulatedFaceSet with textures.
 *
 * Figure 399 illustrates an IfcTriangulatedFaceSet represented by IfcTriangulatedFaceSet
 *
 * CoordIndex: ((1,6,5), (1,2,6), (6,2,7), (7,2,3), (7,8,6), (6,8,5), (5,8,1), (1,8,4), (4,2,1), (2,4,3), (4,8,7), (7,3,4)) IfcCartesianPointList
 *
 * CoordList: ((0.,0.,0.), (1.,0.,0.), (1.,1.,0.), (0.,1.,0.), (0.,0.,2.), (1.,0.,2.), (1.,1.,2.), (0.,1.,2.)) IfcIndexedTriangleTextureMap
 *
 * TexCoordsIndex: ((1 4 3), (1 2 4), (3 1 4), (4 1 2), (8 7 6), (6 7 5), (4 3 2), (2 3 1), (5 8 7), (8 5 6), (2 4 3), (3 1 2)) IfcTextureVertexList
 *
 * TexCoordsList: ((0. -0.5), (1. -0.5), (0. 1.5), (1. 1.5), (0. 0.), (0. 1.), (1. 0.), (1. 1.))
 */
 class IfcIndexedTriangleTextureMap extends IfcIndexedTextureMap {
    constructor(Maps:Array<IfcSurfaceTexture>, MappedTo:IfcTessellatedFaceSet, TexCoords:IfcTextureVertexList, TexCoordIndex:Array<Array<IfcPositiveInteger>>) {
        super(Maps, MappedTo, TexCoords)
        this.TexCoordIndex = TexCoordIndex
    }
    /** Index into the IfcTextureVertexList for each vertex of the triangles representing the IfcTriangulatedFaceSet.
    */
    TexCoordIndex?: Array<Array<IfcPositiveInteger>>
}

export default IfcIndexedTriangleTextureMap
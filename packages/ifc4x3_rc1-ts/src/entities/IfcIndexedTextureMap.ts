// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcIndexedTextureMap

import { IfcTessellatedFaceSet, IfcTextureVertexList, IfcSurfaceTexture, IfcTextureCoordinate } from './'

/** The IfcIndexedTextureMap provides the mapping of the 2-dimensional texture coordinates to the surface onto which it is mapped.
 *
 * It is used for mapping the texture to faces of tessellated face sets.
 *
 * The IfcIndexedTextureMap defines an index into an indexed list of texture coordinates.
 *
 * The TexCoords are a two-dimensional list of texture coordinates provided by two parameter values.
 *
 * Subtypes of IfcIndexedTextureMap establish the index attribute corresponding to subtypes of IfcTessellatedFaceSet defining the corresponding index lists of vertices.
 */
abstract class IfcIndexedTextureMap extends IfcTextureCoordinate {
    constructor(Maps:Array<IfcSurfaceTexture>, MappedTo:IfcTessellatedFaceSet, TexCoords:IfcTextureVertexList) {
        super(Maps)
        this.MappedTo = MappedTo
        this.TexCoords = TexCoords
    }
    /** Reference to the IfcTessellatedFaceSet to which it applies the texture map.
    */
    MappedTo: IfcTessellatedFaceSet
    /** Indexable list of texture vertices.
    */
    TexCoords: IfcTextureVertexList
}

export default IfcIndexedTextureMap
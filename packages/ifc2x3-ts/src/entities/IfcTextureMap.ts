// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTextureMap

import { IfcVertexBasedTextureMap, IfcTextureCoordinate } from './'

/** An IfcTextureMap provides the mapping of the 2-dimensional texture coordinates to the surface onto which it is mapped.
 *
 * It is used for mapping the texture to surfaces of vertex based geometry models, such as The IfcTextureMap has a list of TextureVertex, that corresponds to the points of the outer face bound of the vertex based geometry item.
 *
 * The corresponding pair of lists is: Each IfcTextureVertex (given as S, T coordinates of the 2-dimension texture coordinate system) corresponds to the geometric coordinates of the IfcCartesianPoint (given as 3-dimension X, Y, and Z coordinates within the object coordinate system of the geometric item).
 *
 * Informal Propositions:
 */
 class IfcTextureMap extends IfcTextureCoordinate {
    constructor(TextureMaps:Array<IfcVertexBasedTextureMap>) {
        super()
        this.TextureMaps = TextureMaps
    }
    /** undefined
    */
    TextureMaps: Array<IfcVertexBasedTextureMap>
}

export default IfcTextureMap
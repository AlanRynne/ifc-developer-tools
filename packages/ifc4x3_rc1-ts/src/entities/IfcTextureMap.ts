// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTextureMap

import { IfcTextureVertex, IfcFace, IfcSurfaceTexture, IfcTextureCoordinate } from './'

/** An IfcTextureMap provides the mapping of the 2-dimensional texture coordinates to the surface onto which it is mapped.
 *
 * It is used for mapping the texture to surfaces of vertex based geometry models, such as The IfcTextureMap has a list of TextureVertex, that corresponds to the points of the outer face bound of the vertex based geometry item.
 *
 * The corresponding pair of lists is: Each IfcTextureVertex (given as S, T coordinates of the 2-dimension texture coordinate system) corresponds to the geometric coordinates of the IfcCartesianPoint (given as 3-dimension X, Y, and Z coordinates within the object coordinate system of the geometric item).
 *
 * Informal Propositions:
 */
 class IfcTextureMap extends IfcTextureCoordinate {
    constructor(Maps:Array<IfcSurfaceTexture>, Vertices:Array<IfcTextureVertex>, MappedTo:IfcFace) {
        super(Maps)
        this.Vertices = Vertices
        this.MappedTo = MappedTo
    }
    /** List of texture coordinate vertices that are applied to the corresponding points of the polyloop defining a face bound.
    */
    Vertices: Array<IfcTextureVertex>
    /** The face that defines the corresponding list of points along the bounding poly loop of the face outer bound.
     * The face may have additional inner loops.
     * The IfcTextureMap and its Vertices only correspond with the coordinates of the IfcPolyloop representing the outer bound.
    */
    MappedTo: IfcFace
}

export default IfcTextureMap
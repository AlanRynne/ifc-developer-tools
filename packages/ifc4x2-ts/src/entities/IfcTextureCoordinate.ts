// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTextureCoordinate

import { IfcSurfaceTexture, IfcPresentationItem } from './'

/** The IfcTextureCoordinate is an abstract supertype of the different kinds to apply texture coordinates to geometries.
 *
 * For vertex based geometries an explicit assignment of 2D texture vertices to the 3D geometry points is supported by the subtype IfcTextureMap, in addition there can be a procedural description of how texture coordinates shall be applied to geometric items.
 *
 * If no IfcTextureCoordinate is provided for the IfcSurfaceTexture, the default mapping shall be used.
 */
abstract class IfcTextureCoordinate extends IfcPresentationItem {
    constructor(Maps:Array<IfcSurfaceTexture>) {
        super()
        this.Maps = Maps
    }
    /** Reference to the one (or many in case of multi textures with identity transformation to geometric surfaces) subtype(s) of IfcSurfaceTexture that are mapped to a geometric surface by the texture coordinate transformation.
    */
    Maps: Array<IfcSurfaceTexture>
}

export default IfcTextureCoordinate
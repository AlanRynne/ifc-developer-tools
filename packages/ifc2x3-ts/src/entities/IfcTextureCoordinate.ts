// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTextureCoordinate



/** The IfcTextureCoordinate is an abstract supertype of the different kinds to apply texture coordinates to geometries.
 *
 * For vertex based geometries an explicit assignment of 2D texture vertices to the 3D geometry points is supported by the subtype IfcTextureMap, in addition there can be a procedural description of how texture coordinates shall be applied to geometric items.
 *
 * If no IfcTextureCoordinate is provided for the IfcSurfaceTexture, the default mapping shall be used.
 */
abstract class IfcTextureCoordinate  {
    constructor() {


    }

}

export default IfcTextureCoordinate
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSurfaceStyleWithTextures

import { IfcSurfaceTexture } from './'

/** The entity IfcSurfaceStyleWithTextures allows to include image textures in surface styles.
 *
 * These image textures can be applied repeating across the surface or mapped with a particular scale upon the surface
 *
 * The entity IfcSurfaceStyleWithTextures is part of the surface style table for presentation information assigned to surfaces for shading, rendering and lighting with textures.
 *
 * The mapping of the texture onto the surface or the solid is determined by the texture coordinates, in absense of an IfcTextureCoordinate assigned to each surface texture, a default mapping of the texture to the geometric face or surface applies
 *
 * Surface textures included in the IfcSurfaceStyleWithTextures are two dimensional map formats.
 *
 * They define 2D images that contain an array of colour values describing the texture.
 *
 * Depending on the number of IfcSurfaceTextures being included in the list of Textures the IfcSurfaceStyleWithTextures either describes a single texture, or a multi texture
 *
 * Informal Propositions:
 */
 class IfcSurfaceStyleWithTextures  {
    constructor(Textures:Array<IfcSurfaceTexture>) {

        this.Textures = Textures
    }
    /** The textures applied to the surface.
     * In case of more than one surface texture is included, the IfcSurfaceStyleWithTexture defines a multi texture.
    */
    Textures: Array<IfcSurfaceTexture>
}

export default IfcSurfaceStyleWithTextures
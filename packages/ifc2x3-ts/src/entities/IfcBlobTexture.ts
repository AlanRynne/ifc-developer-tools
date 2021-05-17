// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcBlobTexture

import { IfcIdentifier, IfcSurfaceTextureEnum } from '../types'
import { IfcCartesianTransformationOperator2D, IfcSurfaceTexture } from './'

/** An IfcBlobTexture provides a 2-dimensional distribution of the lighting parameters of a surface onto which it is mapped.
 *
 * The texture itself is given as a single binary blob, representing the content of a pixel format file.
 *
 * The file format of the pixel file is given by the RasterFormat attribute and allowable formats are guided by where rule SupportedRasterFormat
 *
 * For interpretation of the texture nodes see IfcImageTexture definition.
 */
 class IfcBlobTexture extends IfcSurfaceTexture {
    constructor(RepeatS:boolean, RepeatT:boolean, TextureType:IfcSurfaceTextureEnum, TextureTransform:IfcCartesianTransformationOperator2D, RasterFormat:IfcIdentifier, RasterCode:boolean) {
        super(RepeatS, RepeatT, TextureType, TextureTransform)
        this.RasterFormat = RasterFormat
        this.RasterCode = RasterCode
    }
    /** The format of the RasterCode often using a compression.
    */
    RasterFormat: IfcIdentifier
    /** Blob, given as a single binary, to capture the texture within one popular file (compression) format.
     * The file format is provided by the RasterFormat attribute.
    */
    RasterCode: boolean
}

export default IfcBlobTexture
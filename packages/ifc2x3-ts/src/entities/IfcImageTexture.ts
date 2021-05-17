// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcImageTexture

import { IfcIdentifier, IfcSurfaceTextureEnum } from '../types'
import { IfcCartesianTransformationOperator2D, IfcSurfaceTexture } from './'

/** An IfcImageTexture provides a 2-dimensional texture that can be applied to a surface of an geometric item and that provides lighting parameters of a surface onto which it is mapped.
 *
 * The texture is provided as an image file at an external location for which an URL is provided
 *
 * The following definitions from ISO/IEC 19775-1 X3D Architecture and base components (X3D Specification) apply:The Uniform Resource Locator (URL) is a form of an URI and specified in RFC1738 by IETF.
 *
 * It supports resources located on a particular server being accessed by a particular protocol (usually http), and resources located at a local machine.
 */
 class IfcImageTexture extends IfcSurfaceTexture {
    constructor(RepeatS:boolean, RepeatT:boolean, TextureType:IfcSurfaceTextureEnum, TextureTransform:IfcCartesianTransformationOperator2D, UrlReference:IfcIdentifier) {
        super(RepeatS, RepeatT, TextureType, TextureTransform)
        this.UrlReference = UrlReference
    }
    /** undefined
    */
    UrlReference: IfcIdentifier
}

export default IfcImageTexture
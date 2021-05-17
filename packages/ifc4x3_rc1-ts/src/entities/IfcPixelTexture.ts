// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPixelTexture

import { IfcInteger, IfcBinary, IfcBoolean, IfcIdentifier } from '../types'
import { IfcCartesianTransformationOperator2D, IfcSurfaceTexture } from './'

/** An IfcPixelTexture provides a 2D image-based texture map as an explicit array of pixel values (list of Pixel binary attributes).
 *
 * In contrary to the IfcImageTexture the IfcPixelTexture holds a 2 dimensional list of pixel color (and opacity) directly, instead of referencing to an URL
 *
 * The following definitions from ISO/IEC 19775-1 X3D Architecture and base components (X3D Specification) apply:
 */
 class IfcPixelTexture extends IfcSurfaceTexture {
    constructor(RepeatS:IfcBoolean, RepeatT:IfcBoolean, Mode:IfcIdentifier, TextureTransform:IfcCartesianTransformationOperator2D, Parameter:Array<IfcIdentifier>, Width:IfcInteger, Height:IfcInteger, ColourComponents:IfcInteger, Pixel:Array<IfcBinary>) {
        super(RepeatS, RepeatT, Mode, TextureTransform, Parameter)
        this.Width = Width
        this.Height = Height
        this.ColourComponents = ColourComponents
        this.Pixel = Pixel
    }
    /** The number of pixels in width (S) direction.
    */
    Width: IfcInteger
    /** The number of pixels in height (T) direction.
    */
    Height: IfcInteger
    /** Indication whether the pixel values contain a 1, 2, 3, or 4 colour component.
    */
    ColourComponents: IfcInteger
    /** Flat list of hexadecimal values, each describing one pixel by 1, 2, 3, or 4 components.
     * IFC2x3 CHANGE The data type has been changed from STRING to BINARY.
    */
    Pixel: Array<IfcBinary>
}

export default IfcPixelTexture
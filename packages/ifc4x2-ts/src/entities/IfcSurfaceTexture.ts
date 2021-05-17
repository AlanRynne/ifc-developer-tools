// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSurfaceTexture

import { IfcBoolean, IfcIdentifier } from '../types'
import { IfcCartesianTransformationOperator2D, IfcPresentationItem } from './'

/** An IfcSurfaceTexture provides a 2-dimensional image-based texture map.
 *
 * It can either be given by referencing an external image file through an URL reference (IfcImageTexture), including the image file as a blob (long binary) into the data set (IfcBlobTexture), or by explicitly including an array of pixels (IfcPixelTexture)
 *
 * The following definitions from ISO/IEC 19775-1 X3D Architecture and base components (X3D Specification) apply:Texture are defined by 2D images that contain an array of colour values describing the texture.
 *
 * The texture values are interpreted differently depending on the number of components in the texture and the specifics of the image format.
 *
 * In general, texture may be described using one of the following forms:Figure 401 illustrates the texture coordinate system
 *
 * The following definitions from ISO/IEC 19775-1 X3D Architecture and base components (X3D Specification) on texture coordinates apply:If multiple surface textures are included in the IfcSurfaceStyleWithTextures applying them to a geometric item, a mode and optional parameters can be included that blending operations
 *
 * The RepeatS and RepeatT Boolean flags control whether the texture map is repeated outside the [0.0, 1.0] texture coordinate range, when applied to a geometric surface, or clamped to lie within the [0.0, 1.0] range.
 *
 * The TextureTransform applies a 2D non-uniform transformation to the texture before it is applied to a geometric surface
 *
 * The following definitions from ISO/IEC 19775-1 X3D Architecture and base components (X3D Specification) apply:
 */
abstract class IfcSurfaceTexture extends IfcPresentationItem {
    constructor(RepeatS:IfcBoolean, RepeatT:IfcBoolean, Mode:IfcIdentifier, TextureTransform:IfcCartesianTransformationOperator2D, Parameter:Array<IfcIdentifier>) {
        super()
        this.RepeatS = RepeatS
        this.RepeatT = RepeatT
        this.Mode = Mode
        this.TextureTransform = TextureTransform
        this.Parameter = Parameter
    }
    /** The RepeatS field specifies how the texture wraps in the S direction.
     * If RepeatS is TRUE (the default), the texture map is repeated outside the [0.0, 1.0] texture coordinate range in the S direction so that it fills the shape.
     * If RepeatS is FALSE, the texture coordinates are clamped in the S direction to lie within the [0.0, 1.0] range.
    */
    RepeatS: IfcBoolean
    /** The RepeatT field specifies how the texture wraps in the T direction.
     * If RepeatT is TRUE (the default), the texture map is repeated outside the [0.0, 1.0] texture coordinate range in the T direction so that it fills the shape.
     * If RepeatT is FALSE, the texture coordinates are clamped in the T direction to lie within the [0.0, 1.0] range.
    */
    RepeatT: IfcBoolean
    /** The Mode attribute is provided to control the appearance of a multi textures.
     * The mode then controls the type of blending operation.
     * The mode includes a MODULATE for a lit appearance, a REPLACE for a unlit appearance, and variations of the two.
     * The applicable values for the Mode attribute are determined by view definitions or implementer agreements.
     * It is recommended to use the modes described in ISO/IES 19775-1.2:2008 X3D Architecture and base components Edition 2, Part 1.
     * See 18.4.3 MultiTexture for recommended values.
     * IFC4 CHANGE New attribute replacing previous TextureType.
    */
    Mode?: IfcIdentifier
    /** The TextureTransform defines a 2D transformation that is applied to the texture coordinates.
     * It affects the way texture coordinates are applied to the surfaces of geometric representation itesm.
     * The 2D transformation supports changes to the size, orientation, and position of textures on shapes.
     * Mirroring is not allowed to be used in the IfcCartesianTransformationOperator
    */
    TextureTransform?: IfcCartesianTransformationOperator2D
    /** The Parameter attribute is provided to control the appearance of a multi textures.
     * The applicable parameters depend on the value of the Mode attribute.
     * The applicable values for the list of Parameter attributes are determined by view definitions or implementer agreements.
     * It is recommended to use the source and the function fields described in ISO/IES 19775-1.2:2008 X3D Architecture and base components Edition 2, Part 1.
     * See 18.4.3 MultiTexture for recommended values.
     * By convention, Parameter[1] shall then hold the source value, Parameter[2] the function value, Parameter[3] the base RGB color for select operations, and Parameter[4] the alpha value for select operations.
     * IFC4 CHANGE New attribute added at the end of the attribute list.
    */
    Parameter?: Array<IfcIdentifier>
}

export default IfcSurfaceTexture
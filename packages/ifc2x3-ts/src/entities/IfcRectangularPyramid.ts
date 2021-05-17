// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRectangularPyramid

import { IfcPositiveLengthMeasure } from '../types'
import { IfcAxis2Placement3D, IfcCsgPrimitive3D } from './'

/** The IfcRectangularPyramid is a Construction Solid Geometry (CSG) 3D primitive.
 *
 * It is a solid with a rectangular base and a point called apex as the top.
 *
 * The tapers from the base to the top.
 *
 * The axis from the center of the base to the apex is perpendicular to the base.
 *
 * The inherited Position attribute defines the IfcAxisPlacement3D and provides the location and orientation of the pyramid:As shown in Figure 343, the pyramid is positioned within its own placement coordinate system.
 *
 * The origin is the center of the bottom rectangle, that lies in the XY plane.
 *
 * The apex lies on the positive z axis at [0, 0, Height]
 *
 * Texture use definitionOn each triangular side face, textures are aligned facing upright.
 *
 * Textures are stretched or repeated to the extent of the base of each face according to RepeatS.
 *
 * Textures are stretched or repeated towards the top point according to Repeat T, where the top point has coordinates of (0.5,1.0) if RepeatT is False
 *
 * On the bottom face, textures are aligned facing front-to-back
 *
 * Figure 344 illustrates default texture mapping with a clamped texture (RepeatS=False and RepeatT=False).
 *
 * The image on the left shows the texture where the S axis points to the right and the T axis points up.
 *
 * The image on the right shows the texture applied to the geometry where the X axis points back to the right, the Y axis points back to the left, and the Z axis points up.
 */
 class IfcRectangularPyramid extends IfcCsgPrimitive3D {
    constructor(Position:IfcAxis2Placement3D, XLength:IfcPositiveLengthMeasure, YLength:IfcPositiveLengthMeasure, Height:IfcPositiveLengthMeasure) {
        super(Position)
        this.XLength = XLength
        this.YLength = YLength
        this.Height = Height
    }
    /** The length of the base measured along the placement X axis.
     * It is provided by the inherited axis placement through SELF\IfcCsgPrimitive3D.Position.P[1].
    */
    XLength: IfcPositiveLengthMeasure
    /** The length of the base measured along the placement Y axis.
     * It is provided by the inherited axis placement through SELF\IfcCsgPrimitive3D.Position.P[2].
    */
    YLength: IfcPositiveLengthMeasure
    /** The height of the apex above the plane of the base, measured in the direction of the placement Z axis, the SELF\IfcCsgPrimitive3D.Position.P[2].
    */
    Height: IfcPositiveLengthMeasure
}

export default IfcRectangularPyramid
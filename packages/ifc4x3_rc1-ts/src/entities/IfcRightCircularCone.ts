// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRightCircularCone

import { IfcPositiveLengthMeasure } from '../types'
import { IfcAxis2Placement3D, IfcCsgPrimitive3D } from './'

/** The IfcRightCircularCone is a Construction Solid Geometry (CSG) 3D primitive.
 *
 * It is a solid with a circular base and a point called apex as the top.
 *
 * The tapers from the base to the top.
 *
 * The axis from the center of the circular base to the apex is perpendicular to the base.
 *
 * The inherited Position attribute defines the IfcAxisPlacement3D and provides the location and orientation of the cone:Figure 348 illustrates geometric parameters of the cone.
 *
 * The cone is positioned within its own placement coordinate system.
 *
 * The origin is the center of the bottom circular disk, that lies in the XY plane.
 *
 * The apex lies on the positive z axis at [0, 0, Height]
 *
 * Texture use definitionOn the circular side, textures are aligned facing upright with origin at the back (+Y direction) revolving counter-clockwise.
 *
 * Textures are stretched or repeated to the extent of the base circumference according to RepeatS.
 *
 * Textures are compressed linearly going upwards towards the top point according to RepeatT
 *
 * On the bottom face, textures are aligned facing front-to-back, with the center of the circle aligned to the center of the texture
 *
 * Figure 349 illustrates default texture mapping with a clamped texture (RepeatS=False and RepeatT=False).
 *
 * The image on the left shows the texture where the S axis points to the right and the T axis points up.
 *
 * The image on the right shows the texture applied to the geometry where the X axis points back to the right, the Y axis points back to the left, and the Z axis points up.
 */
 class IfcRightCircularCone extends IfcCsgPrimitive3D {
    constructor(Position:IfcAxis2Placement3D, Height:IfcPositiveLengthMeasure, BottomRadius:IfcPositiveLengthMeasure) {
        super(Position)
        this.Height = Height
        this.BottomRadius = BottomRadius
    }
    /** The distance between the base of the cone and the apex.
    */
    Height: IfcPositiveLengthMeasure
    /** The radius of the cone at the base.
    */
    BottomRadius: IfcPositiveLengthMeasure
}

export default IfcRightCircularCone
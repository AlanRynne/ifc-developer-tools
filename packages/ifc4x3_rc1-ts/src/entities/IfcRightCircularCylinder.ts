// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRightCircularCylinder

import { IfcPositiveLengthMeasure } from '../types'
import { IfcAxis2Placement3D, IfcCsgPrimitive3D } from './'

/** The IfcRightCircularCylinder is a Construction Solid Geometry (CSG) 3D primitive.
 *
 * It is a solid with a circular base and top.
 *
 * The cylindrical surface between if formed by points at a fixed distance from the axis of the cylinder.
 *
 * The inherited Position attribute defines the IfcAxisPlacement3D and provides:Figure 350 illustrates geometric parameters of the cylinder.
 *
 * The cylinder is positioned within its own placement coordiante system.
 *
 * The origin is the center of the bottom circular disk, that lies in the XY plane.
 *
 * The center of the top circular disk is on the positive z axis at [0, 0, Height]
 *
 * Texture use definitionOn the circular side, textures are aligned facing upright with origin at the back (+Y direction) revolving counter-clockwise.
 *
 * Textures are stretched or repeated to the extent of the circumference according to RepeatS.
 *
 * Textures are stretched or repeated to the extent of the Height according to RepeatT
 *
 * On the top and bottom faces, textures are aligned facing front-to-back, with the center of the circle aligned to the center of the texture
 *
 * Figure 351 illustrates default texture mapping with a clamped texture (RepeatS=False and RepeatT=False).
 *
 * The image on the left shows the texture where the S axis points to the right and the T axis points up.
 *
 * The image on the right shows the texture applied to the geometry where the X axis points back to the right, the Y axis points back to the left, and the Z axis points up.
 */
 class IfcRightCircularCylinder extends IfcCsgPrimitive3D {
    constructor(Position:IfcAxis2Placement3D, Height:IfcPositiveLengthMeasure, Radius:IfcPositiveLengthMeasure) {
        super(Position)
        this.Height = Height
        this.Radius = Radius
    }
    /** The distance between the planar circular faces of the cylinder.
    */
    Height: IfcPositiveLengthMeasure
    /** The radius of the cylinder.
    */
    Radius: IfcPositiveLengthMeasure
}

export default IfcRightCircularCylinder
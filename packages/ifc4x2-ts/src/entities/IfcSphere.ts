// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSphere

import { IfcPositiveLengthMeasure } from '../types'
import { IfcAxis2Placement3D, IfcCsgPrimitive3D } from './'

/** The IfcSphere is a Construction Solid Geometry (CSG) 3D primitive.
 *
 * It is a solid where all points at the surface have the same distance from the center point.
 *
 * The inherited Position attribute defines the IfcAxisPlacement3D and provides: Texture Use DefinitionTextures are aligned facing upright with origin at the back (+Y direction) revolving counter-clockwise.
 *
 * Textures are stretched or repeated to the extent of the circumference at the equator according to RepeatS and RepeatT
 *
 * Figure 356 illustrates default texture mapping with a clamped texture (RepeatS=False and RepeatT=False).
 *
 * The image on the left shows the texture where the S axis points to the right and the T axis points up.
 *
 * The image on the right shows the texture applied to the geometry where the X axis points back to the right, the Y axis points back to the left, and the Z axis points up.
 */
 class IfcSphere extends IfcCsgPrimitive3D {
    constructor(Position:IfcAxis2Placement3D, Radius:IfcPositiveLengthMeasure) {
        super(Position)
        this.Radius = Radius
    }
    /** The radius of the sphere.
    */
    Radius: IfcPositiveLengthMeasure
}

export default IfcSphere
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcBlock

import { IfcPositiveLengthMeasure } from '../types'
import { IfcAxis2Placement3D, IfcCsgPrimitive3D } from './'

/** The IfcBlock is a Construction Solid Geometry (CSG) 3D primitive.
 *
 * It is defined by a position and a positve distance along the three orthogonal axes.
 *
 * The inherited Position attribute has the IfcAxisPlacement3D type and provides:The XLength, YLength, and ZLength attributes define the size of the IfcBlock along the three axes
 *
 * Texture definitionOn each side face, textures are aligned facing upright.
 *
 * On the top and bottom faces, textures are aligned facing front-to-back.
 *
 * Textures are stretched or repeated to the extent of each face according to RepeatS and RepeatT
 *
 * Figure 329 illustrates default texture mapping with a clamped texture (RepeatS=False and RepeatT=False).
 *
 * The image on the left shows the texture where the S axis points to the right and the T axis points up.
 *
 * The image on the right shows the texture applied to the geometry where the X axis points back to the right, the Y axis points back to the left, and the Z axis points up.
 */
 class IfcBlock extends IfcCsgPrimitive3D {
    constructor(Position:IfcAxis2Placement3D, XLength:IfcPositiveLengthMeasure, YLength:IfcPositiveLengthMeasure, ZLength:IfcPositiveLengthMeasure) {
        super(Position)
        this.XLength = XLength
        this.YLength = YLength
        this.ZLength = ZLength
    }
    /** The size of the block along the placement X axis.
     * It is provided by the inherited axis placement through SELF\IfcCsgPrimitive3D.Position.P[1].
    */
    XLength: IfcPositiveLengthMeasure
    /** The size of the block along the placement Y axis.
     * It is provided by the inherited axis placement through SELF\IfcCsgPrimitive3D.Position.P[2].
    */
    YLength: IfcPositiveLengthMeasure
    /** The size of the block along the placement Z axis.
     * It is provided by the inherited axis placement through SELF\IfcCsgPrimitive3D.Position.P[3].
    */
    ZLength: IfcPositiveLengthMeasure
}

export default IfcBlock
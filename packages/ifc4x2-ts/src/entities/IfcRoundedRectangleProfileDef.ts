// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRoundedRectangleProfileDef

import { IfcPositiveLengthMeasure, IfcProfileTypeEnum, IfcLabel } from '../types'
import { IfcAxis2Placement2D, IfcRectangleProfileDef } from './'

/** IfcRoundedRectangleProfileDef defines a rectangle with equally rounded corners as the profile definition used by the swept surface geometry or the swept area solid.
 *
 * It is given by the X extent, the Y extent, and the radius for the rounded corners, and placed within the 2D position coordinate system, established by the Position attribute.
 *
 * It is placed centric within the position coordinate system, that is, in the center of the bounding box.
 *
 * Figure 431 illustrates parameters of the rounded rectangle profile definition.
 */
 class IfcRoundedRectangleProfileDef extends IfcRectangleProfileDef {
    constructor(ProfileType:IfcProfileTypeEnum, ProfileName:IfcLabel, Position:IfcAxis2Placement2D, XDim:IfcPositiveLengthMeasure, YDim:IfcPositiveLengthMeasure, RoundingRadius:IfcPositiveLengthMeasure) {
        super(ProfileType, ProfileName, Position, XDim, YDim)
        this.RoundingRadius = RoundingRadius
    }
    /** Radius of the circular arcs by which all four corners of the rectangle are equally rounded.
    */
    RoundingRadius: IfcPositiveLengthMeasure
}

export default IfcRoundedRectangleProfileDef
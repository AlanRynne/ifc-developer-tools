// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRectangleProfileDef

import { IfcPositiveLengthMeasure, IfcProfileTypeEnum, IfcLabel } from '../types'
import { IfcAxis2Placement2D, IfcParameterizedProfileDef } from './'

/** IfcRectangleProfileDef defines a rectangle as the profile definition used by the swept surface geometry or the swept area solid.
 *
 * It is given by its X extent and its Y extent, and placed within the 2D position coordinate system, established by the Position attribute.
 *
 * It is placed centric within the position coordinate system.
 *
 * Figure 430 illustrates parameters of the rectangle profile definition.
 */
 class IfcRectangleProfileDef extends IfcParameterizedProfileDef {
    constructor(ProfileType:IfcProfileTypeEnum, ProfileName:IfcLabel, Position:IfcAxis2Placement2D, XDim:IfcPositiveLengthMeasure, YDim:IfcPositiveLengthMeasure) {
        super(ProfileType, ProfileName, Position)
        this.XDim = XDim
        this.YDim = YDim
    }
    /** The extent of the rectangle in the direction of the x-axis.
    */
    XDim: IfcPositiveLengthMeasure
    /** The extent of the rectangle in the direction of the y-axis.
    */
    YDim: IfcPositiveLengthMeasure
}

export default IfcRectangleProfileDef
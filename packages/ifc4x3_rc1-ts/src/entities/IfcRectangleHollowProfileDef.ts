// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRectangleHollowProfileDef

import { IfcPositiveLengthMeasure, IfcNonNegativeLengthMeasure, IfcProfileTypeEnum, IfcLabel } from '../types'
import { IfcAxis2Placement2D, IfcRectangleProfileDef } from './'

/** IfcRectangleHollowProfileDef defines a section profile that provides the defining parameters of a rectangular (or square) hollow section to be used by the swept surface geometry or the swept area solid.
 *
 * Its parameters and orientation relative to the position coordinate system are according to the following illustration.
 *
 * A square hollow section can be defined by equal values for h and b. The centre of the position coordinate system is in the profiles centre of the bounding box (for symmetric profiles identical with the centre of gravity).
 *
 * Normally, the longer sides are parallel to the y-axis, the shorter sides parallel to the x-axis
 *
 * Figure 429 illustrates parameters of a rectangular or square hollow profile definition.
 */
 class IfcRectangleHollowProfileDef extends IfcRectangleProfileDef {
    constructor(ProfileType:IfcProfileTypeEnum, ProfileName:IfcLabel, Position:IfcAxis2Placement2D, XDim:IfcPositiveLengthMeasure, YDim:IfcPositiveLengthMeasure, WallThickness:IfcPositiveLengthMeasure, InnerFilletRadius:IfcNonNegativeLengthMeasure, OuterFilletRadius:IfcNonNegativeLengthMeasure) {
        super(ProfileType, ProfileName, Position, XDim, YDim)
        this.WallThickness = WallThickness
        this.InnerFilletRadius = InnerFilletRadius
        this.OuterFilletRadius = OuterFilletRadius
    }
    /** Thickness of the material.
    */
    WallThickness: IfcPositiveLengthMeasure
    /** Inner corner radius.
    */
    InnerFilletRadius?: IfcNonNegativeLengthMeasure
    /** Outer corner radius.
    */
    OuterFilletRadius?: IfcNonNegativeLengthMeasure
}

export default IfcRectangleHollowProfileDef
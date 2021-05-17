// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCircleHollowProfileDef

import { IfcPositiveLengthMeasure, IfcProfileTypeEnum, IfcLabel } from '../types'
import { IfcAxis2Placement2D, IfcCircleProfileDef } from './'

/** IfcCircleHollowProfileDef defines a section profile that provides the defining parameters of a circular hollow section (tube) to be used by the swept area solid.
 *
 * Its parameters and orientation relative to the position coordinate system are according to the following illustration
 *
 * The centre of the position coordinate system is in the profile's centre of the bounding box (for symmetric profiles identical with the centre of gravity)
 *
 * Figure 417 illustrates parameters of the circular hollow profile definition.
 *
 * The parameterized profile defines its own position coordinate system.
 *
 * The underlying coordinate system is defined by the swept area solid that uses the profile definition.
 *
 * It is the xy plane of:By using offsets of the position location, the parameterized profile can be positioned centric (using x,y offsets = 0.), or at any position relative to the profile.
 *
 * Explicit coordinate offsets are used to define cardinal points (for example, upper-left bound).
 *
 * The parameterized profile is defined by a set of parameter attributes.
 */
 class IfcCircleHollowProfileDef extends IfcCircleProfileDef {
    constructor(ProfileType:IfcProfileTypeEnum, ProfileName:IfcLabel, Position:IfcAxis2Placement2D, Radius:IfcPositiveLengthMeasure, WallThickness:IfcPositiveLengthMeasure) {
        super(ProfileType, ProfileName, Position, Radius)
        this.WallThickness = WallThickness
    }
    /** Thickness of the material, it is the difference between the outer and inner radius.
    */
    WallThickness: IfcPositiveLengthMeasure
}

export default IfcCircleHollowProfileDef
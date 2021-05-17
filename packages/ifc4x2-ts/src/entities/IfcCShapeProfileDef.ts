// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCShapeProfileDef

import { IfcPositiveLengthMeasure, IfcNonNegativeLengthMeasure, IfcProfileTypeEnum, IfcLabel } from '../types'
import { IfcAxis2Placement2D, IfcParameterizedProfileDef } from './'

/** IfcCShapeProfileDef defines a section profile that provides the defining parameters of a C-shaped section to be used by the swept area solid.
 *
 * This section is typically produced by cold forming steel.
 *
 * Its parameters and orientation relative to the position coordinate system are according to the following illustration.
 *
 * The centre of the position coordinate system is in the profile's centre of the bounding box
 *
 * Figure 419 illustrates parameters of the C-shape profile definition.
 *
 * The parameterized profile defines its own position coordinate system.
 *
 * The underlying coordinate system is defined by the swept area solid that uses the profile definition.
 *
 * It is the xy plane of:By using offsets of the position location, the parameterized profile can be positioned centric (using x,y offsets = 0.), or at any position relative to the profile.
 *
 * The parameterized profile is defined by a set of parameter attributes.
 *
 * In the illustrated example, the 'CentreOfGravityInX' property in IfcExtendedProfileProperties, if provided, is negative.
 */
 class IfcCShapeProfileDef extends IfcParameterizedProfileDef {
    constructor(ProfileType:IfcProfileTypeEnum, ProfileName:IfcLabel, Position:IfcAxis2Placement2D, Depth:IfcPositiveLengthMeasure, Width:IfcPositiveLengthMeasure, WallThickness:IfcPositiveLengthMeasure, Girth:IfcPositiveLengthMeasure, InternalFilletRadius:IfcNonNegativeLengthMeasure) {
        super(ProfileType, ProfileName, Position)
        this.Depth = Depth
        this.Width = Width
        this.WallThickness = WallThickness
        this.Girth = Girth
        this.InternalFilletRadius = InternalFilletRadius
    }
    /** Profile depth, see illustration above (= h).
    */
    Depth: IfcPositiveLengthMeasure
    /** Profile width, see illustration above (= b).
    */
    Width: IfcPositiveLengthMeasure
    /** Constant wall thickness of profile (= ts).
    */
    WallThickness: IfcPositiveLengthMeasure
    /** Lengths of girth, see illustration above (= c).
    */
    Girth: IfcPositiveLengthMeasure
    /** Internal fillet radius according the above illustration (= r1).
    */
    InternalFilletRadius?: IfcNonNegativeLengthMeasure
}

export default IfcCShapeProfileDef
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcLShapeProfileDef

import { IfcPositiveLengthMeasure, IfcPlaneAngleMeasure, IfcProfileTypeEnum, IfcLabel } from '../types'
import { IfcAxis2Placement2D, IfcParameterizedProfileDef } from './'

/** IfcLShapeProfileDef defines a section profile that provides the defining parameters of an L-shaped section (equilateral L profiles are also covered by this entity) to be used by the swept area solid.
 *
 * Its parameters and orientation relative to the position coordinate system are according to the following illustration.
 *
 * The shorter leg has the same direction as the positive Position
 *
 * P[1]-axis, the longer or equal leg the same as the positive Position.P[2]-axis.
 *
 * The centre of the position coordinate system is in the profiles centre of the bounding box
 *
 * Figure 423 illustrates parameters of equal-sided and non-equal sided L-shaped section definitions.
 */
 class IfcLShapeProfileDef extends IfcParameterizedProfileDef {
    constructor(ProfileType:IfcProfileTypeEnum, ProfileName:IfcLabel, Position:IfcAxis2Placement2D, Depth:IfcPositiveLengthMeasure, Width:IfcPositiveLengthMeasure, Thickness:IfcPositiveLengthMeasure, FilletRadius:IfcPositiveLengthMeasure, EdgeRadius:IfcPositiveLengthMeasure, LegSlope:IfcPlaneAngleMeasure, CentreOfGravityInX:IfcPositiveLengthMeasure, CentreOfGravityInY:IfcPositiveLengthMeasure) {
        super(ProfileType, ProfileName, Position)
        this.Depth = Depth
        this.Width = Width
        this.Thickness = Thickness
        this.FilletRadius = FilletRadius
        this.EdgeRadius = EdgeRadius
        this.LegSlope = LegSlope
        this.CentreOfGravityInX = CentreOfGravityInX
        this.CentreOfGravityInY = CentreOfGravityInY
    }
    /** Leg length, see illustration above (= h).
     * Same as the overall depth.
    */
    Depth: IfcPositiveLengthMeasure
    /** Leg length, see illustration above (= b).
     * Same as the overall width.
     * This attribute is formally optional for historic reasons only.
     * Whenever the width is known, it shall be provided by value.
    */
    Width?: IfcPositiveLengthMeasure
    /** Constant wall thickness of profile, see illustration above (= ts).
    */
    Thickness: IfcPositiveLengthMeasure
    /** Fillet radius according the above illustration (= r1).
    */
    FilletRadius?: IfcPositiveLengthMeasure
    /** Edge radius according the above illustration (= r2).
    */
    EdgeRadius?: IfcPositiveLengthMeasure
    /** Slope of the inner face of each leg of the profile.
    */
    LegSlope?: IfcPlaneAngleMeasure
    /** undefined
    */
    CentreOfGravityInX?: IfcPositiveLengthMeasure
    /** undefined
    */
    CentreOfGravityInY?: IfcPositiveLengthMeasure
}

export default IfcLShapeProfileDef
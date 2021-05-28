// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSectionedSolidHorizontal

import { IfcDistanceExpression, IfcCurve, IfcProfileDef, IfcSectionedSolid } from './'
import { IfcBoolean } from '../types'

/** An IfcSectionedSolidHorizontal is a solid model constructed by sweeping potentially varying cross sections along a curve horizontally
 *
 * The solid is generated by sweeping the CrossSections between CrossSectionPositions with linear interpolation of profile points, where the profile normal agrees with the tangent of the Directrix, the profile X axis is oriented perpendicularly to the left of the Directrix (same direction as LateralOffset at IfcDistanceExpression) as facing forward along the directrix, and the profile Y axis is oriented upwards according to FixedAxisVertical.
 *
 * For sections having cross-section rotated according to a single super-elevation, IfcDerivedProfileDef may be used to indicate such rotation with each ParentProfile referring to the same underlying profile.
 *
 * For sections having cross-section transformed according to multiple super-elevations with points varying independently, each profile may be of a different instance but of same type (e.g. IfcArbitraryClosedProfileDef), and may optionally have cross section points associated to string lines (“guide curves”) using IfcIndexedPolyCurve with IfcCartesianPointList2DLabelled
 *
 * Figure 351 illustrates four girders of a bridge having a constant parameterized profile, two guardrails having a constant arbitrary profile (one of them mirrored), and a bridge deck having a variable arbitrary profile
 *
 * Informal Propositions:
 */
 class IfcSectionedSolidHorizontal extends IfcSectionedSolid {
    constructor(Directrix:IfcCurve, CrossSections:Array<IfcProfileDef>, CrossSectionPositions:Array<IfcDistanceExpression>, FixedAxisVertical:IfcBoolean) {
        super(Directrix, CrossSections)
        this.CrossSectionPositions = CrossSectionPositions
        this.FixedAxisVertical = FixedAxisVertical
    }
    /** List of distance expressions in sequentially increasing order paired with CrossSections, indicating the position of the corresponding section along the Directrix.
    */
    CrossSectionPositions: Array<IfcDistanceExpression>
    /** Indicates whether Sections are oriented with the Y axis of each profile facing upwards in +Z direction (True), or vertically perpendicular to the Directrix varying according to slope (False).
    */
    FixedAxisVertical: IfcBoolean
}

export default IfcSectionedSolidHorizontal
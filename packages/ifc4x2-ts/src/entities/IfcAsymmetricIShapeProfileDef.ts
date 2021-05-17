// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcAsymmetricIShapeProfileDef

import { IfcPositiveLengthMeasure, IfcNonNegativeLengthMeasure, IfcPlaneAngleMeasure, IfcProfileTypeEnum, IfcLabel } from '../types'
import { IfcAxis2Placement2D, IfcParameterizedProfileDef } from './'

/** IfcAsymmetricIShapeProfileDef defines a section profile that provides the defining parameters of a singly symmetric I-shaped section.
 *
 * Its parameters and orientation relative to the position coordinate system are according to the following illustration.
 *
 * The centre of the position coordinate system is in the profile's centre of the bounding box
 *
 * The overall width of the profile is implicitly given by the maximum of the bottom flange width and the top flange width
 *
 * IfcAsymmetricIShapeProfileDef can also be used to model rail profiles if the application scenario does not require a full explicit shape model of the rail profile.
 *
 * Alternatively, IfcArbitraryClosedProfileDef can be used to provide the exact shape of rail profiles.
 *
 * Either way, a reference to an external document or library should be provided to further define the profile as described at IfcProfileDef
 *
 * Figure 415 illustrates parameters of the asymmetric I-shaped section definition.
 *
 * The parameterized profile defines its own position coordinate system.
 *
 * The underlying coordinate system is defined by the swept area solid that uses the profile definition.
 *
 * It is the xy plane of:By using offsets of the position location, the parameterized profile can be positioned centric (using x,y offsets = 0.), or at any position relative to the profile.
 *
 * The parameterized profile is defined by a set of parameter attributes.
 *
 * In the illustrated example, the 'CentreOfGravityInY' property in IfcExtendedProfileProperties, if provided, is negative.
 */
 class IfcAsymmetricIShapeProfileDef extends IfcParameterizedProfileDef {
    constructor(ProfileType:IfcProfileTypeEnum, ProfileName:IfcLabel, Position:IfcAxis2Placement2D, BottomFlangeWidth:IfcPositiveLengthMeasure, OverallDepth:IfcPositiveLengthMeasure, WebThickness:IfcPositiveLengthMeasure, BottomFlangeThickness:IfcPositiveLengthMeasure, BottomFlangeFilletRadius:IfcNonNegativeLengthMeasure, TopFlangeWidth:IfcPositiveLengthMeasure, TopFlangeThickness:IfcPositiveLengthMeasure, TopFlangeFilletRadius:IfcNonNegativeLengthMeasure, BottomFlangeEdgeRadius:IfcNonNegativeLengthMeasure, BottomFlangeSlope:IfcPlaneAngleMeasure, TopFlangeEdgeRadius:IfcNonNegativeLengthMeasure, TopFlangeSlope:IfcPlaneAngleMeasure) {
        super(ProfileType, ProfileName, Position)
        this.BottomFlangeWidth = BottomFlangeWidth
        this.OverallDepth = OverallDepth
        this.WebThickness = WebThickness
        this.BottomFlangeThickness = BottomFlangeThickness
        this.BottomFlangeFilletRadius = BottomFlangeFilletRadius
        this.TopFlangeWidth = TopFlangeWidth
        this.TopFlangeThickness = TopFlangeThickness
        this.TopFlangeFilletRadius = TopFlangeFilletRadius
        this.BottomFlangeEdgeRadius = BottomFlangeEdgeRadius
        this.BottomFlangeSlope = BottomFlangeSlope
        this.TopFlangeEdgeRadius = TopFlangeEdgeRadius
        this.TopFlangeSlope = TopFlangeSlope
    }
    /** Extent of the bottom flange, defined parallel to the x axis of the position coordinate system.
    */
    BottomFlangeWidth: IfcPositiveLengthMeasure
    /** Total extent of the depth, defined parallel to the y axis of the position coordinate system.
    */
    OverallDepth: IfcPositiveLengthMeasure
    /** Thickness of the web of the I-shape.
     * The web is centred on the x-axis and the y-axis of the position coordinate system.
    */
    WebThickness: IfcPositiveLengthMeasure
    /** Flange thickness of the bottom flange.
    */
    BottomFlangeThickness: IfcPositiveLengthMeasure
    /** The fillet between the web and the bottom flange.
     * 0 if sharp-edged, omitted if unknown.
    */
    BottomFlangeFilletRadius?: IfcNonNegativeLengthMeasure
    /** Extent of the top flange, defined parallel to the x axis of the position coordinate system.
    */
    TopFlangeWidth: IfcPositiveLengthMeasure
    /** Flange thickness of the top flange.
     * This attribute is formally optional for historic reasons only.
     * Whenever the flange thickness is known, it shall be provided by value.
    */
    TopFlangeThickness?: IfcPositiveLengthMeasure
    /** The fillet between the web and the top flange.
     * 0 if sharp-edged, omitted if unknown.
    */
    TopFlangeFilletRadius?: IfcNonNegativeLengthMeasure
    /** Radius of the upper edges of the bottom flange.
     * 0 if sharp-edged, omitted if unknown.
    */
    BottomFlangeEdgeRadius?: IfcNonNegativeLengthMeasure
    /** Slope of the upper faces of the bottom flange.
     * Non-zero in case of of tapered bottom flange, 0 in case of parallel bottom flange, omitted if unknown.
    */
    BottomFlangeSlope?: IfcPlaneAngleMeasure
    /** Radius of the lower edges of the top flange.
     * 0 if sharp-edged, omitted if unknown.
    */
    TopFlangeEdgeRadius?: IfcNonNegativeLengthMeasure
    /** Slope of the lower faces of the top flange.
     * Non-zero in case of of tapered top flange, 0 in case of parallel top flange, omitted if unknown.
    */
    TopFlangeSlope?: IfcPlaneAngleMeasure
}

export default IfcAsymmetricIShapeProfileDef
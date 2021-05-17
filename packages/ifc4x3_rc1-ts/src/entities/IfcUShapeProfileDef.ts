// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcUShapeProfileDef

import { IfcPositiveLengthMeasure, IfcNonNegativeLengthMeasure, IfcPlaneAngleMeasure, IfcProfileTypeEnum, IfcLabel } from '../types'
import { IfcAxis2Placement2D, IfcParameterizedProfileDef } from './'

/** IfcUShapeProfileDef defines a section profile that provides the defining parameters of a U-shape (channel) section to be used by the swept area solid.
 *
 * Its parameters and orientation relative to the position coordinate system are according to the following illustration.
 *
 * The centre of the position coordinate system is in the profile's centre of the bounding box
 *
 * Figure 434 illustrates parameters of the U-shape profile definition.
 */
 class IfcUShapeProfileDef extends IfcParameterizedProfileDef {
    constructor(ProfileType:IfcProfileTypeEnum, ProfileName:IfcLabel, Position:IfcAxis2Placement2D, Depth:IfcPositiveLengthMeasure, FlangeWidth:IfcPositiveLengthMeasure, WebThickness:IfcPositiveLengthMeasure, FlangeThickness:IfcPositiveLengthMeasure, FilletRadius:IfcNonNegativeLengthMeasure, EdgeRadius:IfcNonNegativeLengthMeasure, FlangeSlope:IfcPlaneAngleMeasure) {
        super(ProfileType, ProfileName, Position)
        this.Depth = Depth
        this.FlangeWidth = FlangeWidth
        this.WebThickness = WebThickness
        this.FlangeThickness = FlangeThickness
        this.FilletRadius = FilletRadius
        this.EdgeRadius = EdgeRadius
        this.FlangeSlope = FlangeSlope
    }
    /** Web lengths, see illustration above (= h).
    */
    Depth: IfcPositiveLengthMeasure
    /** Flange lengths, see illustration above (= b).
    */
    FlangeWidth: IfcPositiveLengthMeasure
    /** Constant wall thickness of web (= ts).
    */
    WebThickness: IfcPositiveLengthMeasure
    /** Constant wall thickness of flange (= tg).
    */
    FlangeThickness: IfcPositiveLengthMeasure
    /** Fillet radius according the above illustration (= r1).
    */
    FilletRadius?: IfcNonNegativeLengthMeasure
    /** Edge radius according the above illustration (= r2).
    */
    EdgeRadius?: IfcNonNegativeLengthMeasure
    /** Slope of flange of the profile.
    */
    FlangeSlope?: IfcPlaneAngleMeasure
}

export default IfcUShapeProfileDef
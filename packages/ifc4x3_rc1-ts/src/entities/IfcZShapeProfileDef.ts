// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcZShapeProfileDef

import { IfcPositiveLengthMeasure, IfcNonNegativeLengthMeasure, IfcProfileTypeEnum, IfcLabel } from '../types'
import { IfcAxis2Placement2D, IfcParameterizedProfileDef } from './'

/** IfcZShapeProfileDef defines a section profile that provides the defining parameters of a Z-shape section to be used by the swept area solid.
 *
 * Its parameters and orientation relative to the position coordinate system are according to the following illustration.
 *
 * The centre of the position coordinate system is in the profile's centre of the bounding box
 *
 * Figure 435 illustrates parameters of the Z-shape profile definition.
 */
 class IfcZShapeProfileDef extends IfcParameterizedProfileDef {
    constructor(ProfileType:IfcProfileTypeEnum, ProfileName:IfcLabel, Position:IfcAxis2Placement2D, Depth:IfcPositiveLengthMeasure, FlangeWidth:IfcPositiveLengthMeasure, WebThickness:IfcPositiveLengthMeasure, FlangeThickness:IfcPositiveLengthMeasure, FilletRadius:IfcNonNegativeLengthMeasure, EdgeRadius:IfcNonNegativeLengthMeasure) {
        super(ProfileType, ProfileName, Position)
        this.Depth = Depth
        this.FlangeWidth = FlangeWidth
        this.WebThickness = WebThickness
        this.FlangeThickness = FlangeThickness
        this.FilletRadius = FilletRadius
        this.EdgeRadius = EdgeRadius
    }
    /** Web length, see illustration above (= h).
    */
    Depth: IfcPositiveLengthMeasure
    /** Flange length, see illustration above (= b).
    */
    FlangeWidth: IfcPositiveLengthMeasure
    /** Constant wall thickness of web, see illustration above (= ts).
    */
    WebThickness: IfcPositiveLengthMeasure
    /** Constant wall thickness of flange, see illustration above (= tg).
    */
    FlangeThickness: IfcPositiveLengthMeasure
    /** Fillet radius according the above illustration (= r1).
    */
    FilletRadius?: IfcNonNegativeLengthMeasure
    /** Edge radius according the above illustration (= r2).
    */
    EdgeRadius?: IfcNonNegativeLengthMeasure
}

export default IfcZShapeProfileDef
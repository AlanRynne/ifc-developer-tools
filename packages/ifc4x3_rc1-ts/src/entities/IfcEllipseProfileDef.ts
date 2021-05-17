// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcEllipseProfileDef

import { IfcPositiveLengthMeasure, IfcProfileTypeEnum, IfcLabel } from '../types'
import { IfcAxis2Placement2D, IfcParameterizedProfileDef } from './'

/** IfcEllipseProfileDef defines an ellipse as the profile definition used by the swept surface geometry or the swept area solid.
 *
 * It is given by its semi axis attributes and placed within the 2D position coordinate system, established by the Position attribute.
 *
 * Figure 421 illustrates parameters for the ellipse profile definition.
 *
 * The parameterized profile defines its own position coordinate system.
 *
 * The underlying coordinate system is defined by the swept surface or swept area solid that uses the profile definition.
 *
 * It is the xy plane of either: Or in case of sectioned spines it is the xy plane of each list member of IfcSectionedSpine.CrossSectionPositions.
 *
 * By using offsets of the position location, the parameterized profile can be positioned centric (using x,y offsets = 0.), or at any position relative to the profile.
 *
 * Explicit coordinate offsets are used to define cardinal points (for example, upper-left bound).
 *
 * The location of the position coordinate system defines the center of the ellipse.
 *
 * The SemiAxis1 attribute defines the first radius of the ellipse in the direction of the X axis, the SemiAxis2 attribute defines the second radius of the ellipse in the direction of the Y axis.
 */
 class IfcEllipseProfileDef extends IfcParameterizedProfileDef {
    constructor(ProfileType:IfcProfileTypeEnum, ProfileName:IfcLabel, Position:IfcAxis2Placement2D, SemiAxis1:IfcPositiveLengthMeasure, SemiAxis2:IfcPositiveLengthMeasure) {
        super(ProfileType, ProfileName, Position)
        this.SemiAxis1 = SemiAxis1
        this.SemiAxis2 = SemiAxis2
    }
    /** The first radius of the ellipse.
     * It is measured along the direction of Position.P[1].
    */
    SemiAxis1: IfcPositiveLengthMeasure
    /** The second radius of the ellipse.
     * It is measured along the direction of Position.P[2].
    */
    SemiAxis2: IfcPositiveLengthMeasure
}

export default IfcEllipseProfileDef
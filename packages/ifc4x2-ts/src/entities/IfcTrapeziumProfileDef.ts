// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTrapeziumProfileDef

import { IfcPositiveLengthMeasure, IfcLengthMeasure, IfcProfileTypeEnum, IfcLabel } from '../types'
import { IfcAxis2Placement2D, IfcParameterizedProfileDef } from './'

/** IfcTrapeziumProfileDef defines a trapezium as the profile definition used by the swept surface geometry or the swept area solid.
 *
 * It is given by its Top X and Bottom X extent and its Y extent as well as by the offset of the Top X extend, and placed within the 2D position coordinate system, established by the Position attribute.
 *
 * It is placed centric within the position coordinate system, that is, in the center of the bounding box.
 *
 * Figure 432 illustrates parameters of the trapezium profile definition.
 */
 class IfcTrapeziumProfileDef extends IfcParameterizedProfileDef {
    constructor(ProfileType:IfcProfileTypeEnum, ProfileName:IfcLabel, Position:IfcAxis2Placement2D, BottomXDim:IfcPositiveLengthMeasure, TopXDim:IfcPositiveLengthMeasure, YDim:IfcPositiveLengthMeasure, TopXOffset:IfcLengthMeasure) {
        super(ProfileType, ProfileName, Position)
        this.BottomXDim = BottomXDim
        this.TopXDim = TopXDim
        this.YDim = YDim
        this.TopXOffset = TopXOffset
    }
    /** The extent of the bottom line measured along the implicit x-axis.
    */
    BottomXDim: IfcPositiveLengthMeasure
    /** The extent of the top line measured along the implicit x-axis.
    */
    TopXDim: IfcPositiveLengthMeasure
    /** The extent of the distance between the parallel bottom and top lines measured along the implicit y-axis.
    */
    YDim: IfcPositiveLengthMeasure
    /** Offset from the beginning of the top line to the bottom line, measured along the implicit x-axis.
    */
    TopXOffset: IfcLengthMeasure
}

export default IfcTrapeziumProfileDef
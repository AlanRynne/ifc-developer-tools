// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCircleProfileDef

import { IfcPositiveLengthMeasure, IfcProfileTypeEnum, IfcLabel } from '../types'
import { IfcAxis2Placement2D, IfcParameterizedProfileDef } from './'

/** IfcCircleProfileDef defines a circle as the profile definition used by the swept surface geometry or by the swept area solid.
 *
 * It is given by its Radius attribute and placed within the 2D position coordinate system, established by the Position attribute.
 *
 * Figure 418 illustrates parameters for the circle profile definition.
 *
 * The parameterized profile defines its own position coordinate system.
 *
 * The underlying coordinate system is defined by the swept surface or swept area solid that uses the profile definition.
 *
 * It is the xy plane of either: Or in case of sectioned spines, it is the xy plane of each list member of IfcSectionedSpine.CrossSectionPositions.
 *
 * By using offsets of the position location, the parameterized profile can be positioned centric (using x,y offsets = 0.), or at any position relative to the profile.
 *
 * Explicit coordinate offsets are used to define cardinal points (e.g. upper-left bound).
 *
 * The Position attribute defines the 2D position coordinate system of the circle.
 *
 * The Radius attribute defines the radius of the circle.
 */
 class IfcCircleProfileDef extends IfcParameterizedProfileDef {
    constructor(ProfileType:IfcProfileTypeEnum, ProfileName:IfcLabel, Position:IfcAxis2Placement2D, Radius:IfcPositiveLengthMeasure) {
        super(ProfileType, ProfileName, Position)
        this.Radius = Radius
    }
    /** The radius of the circle.
    */
    Radius: IfcPositiveLengthMeasure
}

export default IfcCircleProfileDef
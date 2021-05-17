// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcArbitraryOpenProfileDef

import { IfcBoundedCurve, IfcProfileDef } from './'
import { IfcProfileTypeEnum, IfcLabel } from '../types'

/** The open profile IfcArbitraryOpenProfileDef defines an arbitrary two-dimensional open profile for the use within the swept surface geometry.
 *
 * It is given by an open boundary from which the surface can be constructed.
 *
 * Informal Propositions:Figure 413 illustrates the arbitrary open profile definition.
 *
 * The Curve is defined in the underlying coordinate system.
 *
 * The underlying coordinate system is defined by the swept surface that uses the profile definition.
 *
 * It is the xy plane of: The Curve attribute defines a two dimensional open bounded curve.
 */
 class IfcArbitraryOpenProfileDef extends IfcProfileDef {
    constructor(ProfileType:IfcProfileTypeEnum, ProfileName:IfcLabel, Curve:IfcBoundedCurve) {
        super(ProfileType, ProfileName)
        this.Curve = Curve
    }
    /** Open bounded curve defining the profile.
    */
    Curve: IfcBoundedCurve
}

export default IfcArbitraryOpenProfileDef
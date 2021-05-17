// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCenterLineProfileDef

import { IfcPositiveLengthMeasure, IfcProfileTypeEnum, IfcLabel } from '../types'
import { IfcBoundedCurve, IfcArbitraryOpenProfileDef } from './'

/** The profile IfcCenterLineProfileDef defines an arbitrary two-dimensional open, not self intersecting profile for the use within the swept solid geometry.
 *
 * It is given by an area defined by applying a constant thickness to a centerline, generating an area from which the solid can be constructed
 *
 * Among else, IfcCenterLineProfileDef is used to model cold-formed steel or aluminium sections (Sigma, Zeta, Omega, and similar sections which are not covered by subtypes of IfcParameterizedProfileDef).
 *
 * However, since IfcCenterLineProfileDef does not provide shape parameters except for the thickness, there is generally a need to further specify the profile definition by means ofor a combination of them.
 *
 * See IfcProfileDef for guidance on external references for profiles
 *
 * Informal Propositions:Figure 416 illustrates the center line profile definition.
 *
 * The Curve is defined in the underlying coordinate system.
 *
 * The underlying coordinate system is defined by the swept surface that uses the profile definition.
 *
 * It is the xy plane of: The Curve attribute defines a two dimensional open bounded curve.
 *
 * The Thickness attribute defines a constant thickness along the curve.
 */
 class IfcCenterLineProfileDef extends IfcArbitraryOpenProfileDef {
    constructor(ProfileType:IfcProfileTypeEnum, ProfileName:IfcLabel, Curve:IfcBoundedCurve, Thickness:IfcPositiveLengthMeasure) {
        super(ProfileType, ProfileName, Curve)
        this.Thickness = Thickness
    }
    /** Constant thickness applied along the center line.
    */
    Thickness: IfcPositiveLengthMeasure
}

export default IfcCenterLineProfileDef
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcArbitraryClosedProfileDef

import { IfcCurve, IfcProfileDef } from './'
import { IfcProfileTypeEnum, IfcLabel } from '../types'

/** The closed profile IfcArbitraryClosedProfileDef defines an arbitrary two-dimensional profile for the use within the swept surface geometry, the swept area solid or a sectioned spine.
 *
 * It is given by an outer boundary from which the surface or solid can be constructed.
 *
 * Informal Propositions:Figure 412 illustrates the arbitrary closed profile definition.
 *
 * The OuterCurve is defined in the underlying coordinate system.
 *
 * The underlying coordinate system is defined by the swept surface or swept area solid that uses the profile definition.
 *
 * It is the xy plane of either:or in case of sectioned spines the xy plane of each list member of IfcSectionedSpine.CrossSectionPositions.
 *
 * The OuterCurve attribute defines a two dimensional closed bounded curve.
 */
 class IfcArbitraryClosedProfileDef extends IfcProfileDef {
    constructor(ProfileType:IfcProfileTypeEnum, ProfileName:IfcLabel, OuterCurve:IfcCurve) {
        super(ProfileType, ProfileName)
        this.OuterCurve = OuterCurve
    }
    /** Bounded curve, defining the outer boundaries of the arbitrary profile.
    */
    OuterCurve: IfcCurve
}

export default IfcArbitraryClosedProfileDef
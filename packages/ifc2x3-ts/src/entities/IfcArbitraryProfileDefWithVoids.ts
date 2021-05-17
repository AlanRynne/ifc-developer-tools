// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcArbitraryProfileDefWithVoids

import { IfcCurve, IfcArbitraryClosedProfileDef } from './'
import { IfcProfileTypeEnum, IfcLabel } from '../types'

/** The IfcArbitraryProfileDefWithVoids defines an arbitrary closed two-dimensional profile with holes.
 *
 * It is given by an outer boundary and inner boundaries.
 *
 * A common usage of IfcArbitraryProfileDefWithVoids is as the cross section for the creation of swept surfaces or swept solids
 *
 * Informal Propositions:Figure 414 illustrates the arbitrary closed profile definition with voids.
 *
 * The OuterCurve, defined at the supertype IfcArbitraryClosedProfileDef and the inner curves are defined in the same underlying coordinate system.
 *
 * The common underlying coordinate system is defined by the swept area solid that uses the profile definition.
 *
 * It is the xy plane of:or in case of sectioned spines the xy plane of each list member of IfcSectionedSpine.CrossSectionPositions.
 *
 * The OuterCurve attribute defines a two dimensional closed bounded curve, the InnerCurves define a set of two dimensional closed bounded curves.
 */
 class IfcArbitraryProfileDefWithVoids extends IfcArbitraryClosedProfileDef {
    constructor(ProfileType:IfcProfileTypeEnum, ProfileName:IfcLabel, OuterCurve:IfcCurve, InnerCurves:Array<IfcCurve>) {
        super(ProfileType, ProfileName, OuterCurve)
        this.InnerCurves = InnerCurves
    }
    /** Set of bounded curves, defining the inner boundaries of the arbitrary profile.
    */
    InnerCurves: Array<IfcCurve>
}

export default IfcArbitraryProfileDefWithVoids
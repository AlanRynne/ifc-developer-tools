// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcMaterialProfileSetUsageTapering

import { IfcMaterialProfileSet, IfcMaterialProfileSetUsage } from './'
import { IfcCardinalPointReference, IfcPositiveLengthMeasure } from '../types'

/** IfcMaterialProfileSetUsageTapering specifies dual material profile sets in association with tapered prismatic (beam- or column-like) elements
 *
 * Usage with tapered building elementsThe inherited attribute ForProfileSet specifies the profile and material at the start of the member, ForProfileEndSet at its end.
 *
 * Start and end correspond to the extrusion direction in the shape model of the shape representation of the element or element type
 *
 * Both material profile sets should refer to the same material, that is, only differ with respect to their profiles
 *
 * Usage with structural analysis curve membersIfcMaterialProfileSetUsageTapering may be used with the structural analysis idealization (IfcStructuralCurveMember) of uniform members as well as of tapered members
 *
 * In case of uniform members, ForProfileSet and ForProfileEndSet refer to the same material profile set.
 *
 * In case of tapered members, ForProfileSet specifies the profile and material at the start of the member, ForProfileEndSet at its end.
 *
 * Start and end correspond to the edge direction in the topological representation of the curve member.
 */
 class IfcMaterialProfileSetUsageTapering extends IfcMaterialProfileSetUsage {
    constructor(ForProfileSet:IfcMaterialProfileSet, CardinalPoint:IfcCardinalPointReference, ReferenceExtent:IfcPositiveLengthMeasure, ForProfileEndSet:IfcMaterialProfileSet, CardinalEndPoint:IfcCardinalPointReference) {
        super(ForProfileSet, CardinalPoint, ReferenceExtent)
        this.ForProfileEndSet = ForProfileEndSet
        this.CardinalEndPoint = CardinalEndPoint
    }
    /** The second IfcMaterialProfileSet set to which the usage is applied.
    */
    ForProfileEndSet: IfcMaterialProfileSet
    /** Index reference to a significant point in the second section profile.
     * Describes how this section is aligned relative to the axis of the member it is associated with.
     * This parametric specification of profile alignment can be provided redundantly to the explicit alignment defined by ForProfileSet.MaterialProfiles[*].Profile.
    */
    CardinalEndPoint?: IfcCardinalPointReference
}

export default IfcMaterialProfileSetUsageTapering
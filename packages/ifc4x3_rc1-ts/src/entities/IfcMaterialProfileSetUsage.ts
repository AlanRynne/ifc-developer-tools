// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcMaterialProfileSetUsage

import { IfcMaterialProfileSet, IfcMaterialUsageDefinition } from './'
import { IfcCardinalPointReference, IfcPositiveLengthMeasure } from '../types'

/** IfcMaterialProfileSetUsage determines the usage of IfcMaterialProfileSet in terms of its location relative to the associated element geometry.
 *
 * The location of a material profile set shall be compatible with the building element geometry (that is, material profiles shall fit inside the element geometry).
 *
 * The rules to ensure the compatibility depend on the type of the building element.
 *
 * For building elements with shape representations which are based on extruded solids, this is accomplished by referring to the identical profile definition in the shape model as in the material profile set.
 */
 class IfcMaterialProfileSetUsage extends IfcMaterialUsageDefinition {
    constructor(ForProfileSet:IfcMaterialProfileSet, CardinalPoint:IfcCardinalPointReference, ReferenceExtent:IfcPositiveLengthMeasure) {
        super()
        this.ForProfileSet = ForProfileSet
        this.CardinalPoint = CardinalPoint
        this.ReferenceExtent = ReferenceExtent
    }
    /** The IfcMaterialProfileSet set to which the usage is applied.
    */
    ForProfileSet: IfcMaterialProfileSet
    /** Index reference to a significant point in the section profile.
     * Describes how the section is aligned relative to the (longitudinal) axis of the member it is associated with.
     * This parametric specification of profile alignment can be provided redundantly to the explicit alignment defined by ForProfileSet.MaterialProfiles[*].Profile.
    */
    CardinalPoint?: IfcCardinalPointReference
    /** Extent of the extrusion of the elements body shape representation to which the IfcMaterialProfileSetUsage applies.
     * It is used as the reference value for the upper OffsetValues[2] provided by the IfcMaterialProfileSetWithOffsets subtype for included material profiles.
     * The attribute ReferenceExtent shall be asserted if an IfcMaterialProfileSetWithOffsets is included in the ForProfileSet
     * MaterialProfiles list of material layers.
     * The ReferenceExtent for IfcBeamStandardCase, IfcColumnStandardCase, and IfcMemberStandardCase is the reference length starting at z=0 being the XY plane of the object coordinate system.
    */
    ReferenceExtent?: IfcPositiveLengthMeasure
}

export default IfcMaterialProfileSetUsage
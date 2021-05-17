// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcAlignment

import { IfcAlignmentTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcCurve, IfcLinearPositioningElement } from './'

/** An alignment is used to define a reference system to position elements mainly for linear construction works, such as roads, rails, bridges, and others.
 *
 * The relative positioning along the alignment is defined by the linear referencing methodology
 *
 * A single alignment may have:Alignments may be aggregated into referents (IfcReferent) or derivative alignments.
 *
 * Derivative alignments may be used to indicate dependent alignments, such as an alignment for a bridge that is relative to a parent alignment for a road, where the child IfcAlignment may have Axis set to IfcOffsetCurveByDistances that starts and ends at a span within the extent of the IfcAlignmentCurve defined at the Axis of the parent IfcAlignment
 *
 * Alignments may be assigned to groups using IfcRelAssignsToGroup, where IfcGroup or subtypes may capture information common to multiple alignments
 *
 * Supported representations of IfcAlignment
 *
 * Axis are:
 */
 class IfcAlignment extends IfcLinearPositioningElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Axis:IfcCurve, PredefinedType:IfcAlignmentTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Axis)
        this.PredefinedType = PredefinedType
    }
    /** Predefined generic types for an alignment that are specified in an enumeration.
     * This attribute is reserved for future use.
    */
    PredefinedType?: IfcAlignmentTypeEnum
}

export default IfcAlignment
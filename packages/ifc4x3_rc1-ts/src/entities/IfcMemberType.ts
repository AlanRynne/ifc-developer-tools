// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcMemberType

import { IfcMemberTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcBuiltElementType } from './'

/** The element type IfcMemberType defines commonly shared information for occurrences of members.
 *
 * Members are predominately linear building elements, often forming part of a structural system.
 *
 * The orientation of the member (being horizontal, vertical or sloped) is not relevant to its definition (in contrary to beam and column).
 *
 * The set of shared information may include:It is used to define a member specification, or member style (the specific product information that is common to all occurrences of that member type).
 *
 * Member types may be exchanged without being already assigned to occurrences
 *
 * Occurrences of the IfcMemberType within building models are represented by instances of IfcMemberStandardCase if the IfcMemberType has a single associated IfcMaterialProfileSet; otherwise they are represented by instances of IfcMember.
 *
 * Occurrences of the IfcMemberType within structural analysis models are represented by instances of IfcStructuralCurveMember, or its applicable subtypes.
 */
 class IfcMemberType extends IfcBuiltElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcMemberTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Identifies the predefined types of a linear structural member element from which the type required may be set.
    */
    PredefinedType: IfcMemberTypeEnum
}

export default IfcMemberType
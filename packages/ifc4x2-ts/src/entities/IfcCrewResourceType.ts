// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCrewResourceType

import { IfcCrewResourceTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcAppliedValue, IfcPhysicalQuantity, IfcConstructionResourceType } from './'

/** The resource type IfcCrewResourceType defines commonly shared information for occurrences of crew resources.
 *
 * The set of shared information may include:It is used to define a crew resource specification (the specific resource information that is common to all occurrences of that resource).
 *
 * Resource types may be exchanged without being already assigned to occurrences
 *
 * Occurrences of the IfcCrewResourceType are represented by instances of IfcCrewResource.
 */
 class IfcCrewResourceType extends IfcConstructionResourceType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, Identification:IfcIdentifier, LongDescription:IfcText, ResourceType:IfcLabel, BaseCosts:Array<IfcAppliedValue>, BaseQuantity:IfcPhysicalQuantity, PredefinedType:IfcCrewResourceTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, Identification, LongDescription, ResourceType, BaseCosts, BaseQuantity)
        this.PredefinedType = PredefinedType
    }
    /** Defines types of crew resources.
    */
    PredefinedType: IfcCrewResourceTypeEnum
}

export default IfcCrewResourceType
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSubContractResourceType

import { IfcSubContractResourceTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcAppliedValue, IfcPhysicalQuantity, IfcConstructionResourceType } from './'

/** The resource type IfcSubContractResourceType defines commonly shared information for occurrences of subcontract resources.
 *
 * The set of shared information may include:It is used to define a subcontract resource specification (the specific resource information that is common to all occurrences of that resource).
 *
 * Resource types may be exchanged without being already assigned to occurrences
 *
 * Occurrences of the IfcSubContractResourceType are represented by instances of IfcSubContractResource.
 */
 class IfcSubContractResourceType extends IfcConstructionResourceType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, Identification:IfcIdentifier, LongDescription:IfcText, ResourceType:IfcLabel, BaseCosts:Array<IfcAppliedValue>, BaseQuantity:IfcPhysicalQuantity, PredefinedType:IfcSubContractResourceTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, Identification, LongDescription, ResourceType, BaseCosts, BaseQuantity)
        this.PredefinedType = PredefinedType
    }
    /** Defines types of subcontract resources.
    */
    PredefinedType: IfcSubContractResourceTypeEnum
}

export default IfcSubContractResourceType
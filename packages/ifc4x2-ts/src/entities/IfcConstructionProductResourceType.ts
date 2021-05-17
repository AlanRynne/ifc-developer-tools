// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcConstructionProductResourceType

import { IfcConstructionProductResourceTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcAppliedValue, IfcPhysicalQuantity, IfcConstructionResourceType } from './'

/** The resource type IfcConstructionProductType defines commonly shared information for occurrences of construction product resources.
 *
 * The set of shared information may include:It is used to define a construction product resource specification (i.e. the specific resource information that is common to all occurrences of that resource).
 *
 * Resource types may be exchanged without being already assigned to occurrences
 *
 * Occurrences of the IfcConstructionProductResourceType are represented by instances of IfcConstructionProductResource
 *
 * Assignment use definitionIn addition to assignments specified at the base class IfcConstructionResourceType, a construction product resource type may have assignments of its own using IfcRelAssignsToResource where RelatingResource refers to the IfcConstructionProductResourceType and RelatedObjects contains one or more IfcTypeProduct subtypes.
 *
 * Such relationship indicates the type of product to be used as input, which is instantiated as an occurrence assigned for each resource occurrence.
 *
 * There may be multiple chains of production where such product type may have its own task and resource types assigned.
 */
 class IfcConstructionProductResourceType extends IfcConstructionResourceType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, Identification:IfcIdentifier, LongDescription:IfcText, ResourceType:IfcLabel, BaseCosts:Array<IfcAppliedValue>, BaseQuantity:IfcPhysicalQuantity, PredefinedType:IfcConstructionProductResourceTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, Identification, LongDescription, ResourceType, BaseCosts, BaseQuantity)
        this.PredefinedType = PredefinedType
    }
    /** Defines types of construction product resources.
    */
    PredefinedType: IfcConstructionProductResourceTypeEnum
}

export default IfcConstructionProductResourceType
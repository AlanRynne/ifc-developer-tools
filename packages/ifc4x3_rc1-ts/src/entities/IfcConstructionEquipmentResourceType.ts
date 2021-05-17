// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcConstructionEquipmentResourceType

import { IfcConstructionEquipmentResourceTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcAppliedValue, IfcPhysicalQuantity, IfcConstructionResourceType } from './'

/** The resource type IfcConstructionEquipmentType defines commonly shared information for occurrences of construction equipment resources.
 *
 * The set of shared information may include:It is used to define a construction equipment resource specification (the specific resource information that is common to all occurrences of that resource).
 *
 * Resource types may be exchanged without being already assigned to occurrences
 *
 * Occurrences of the IfcConstructionEquipmentResourceType are represented by instances of IfcConstructionEquipmentResource
 *
 * Assignment use definitionIn addition to assignments specified at the base class IfcConstructionResourceType, a construction equipment resource type may have assignments of its own using IfcRelAssignsToResource where RelatingResource refers to the IfcConstructionEquipmentResourceType and RelatedObjects contains one or more IfcTypeProduct subtypes.
 *
 * Such relationship indicates the type of equipment to be used as input, which is instantiated as an occurrence assigned for each resource occurrence.
 *
 * There may be multiple chains of production where such product type may have its own task and resource types assigned indicating how to assemble such equipment.
 */
 class IfcConstructionEquipmentResourceType extends IfcConstructionResourceType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, Identification:IfcIdentifier, LongDescription:IfcText, ResourceType:IfcLabel, BaseCosts:Array<IfcAppliedValue>, BaseQuantity:IfcPhysicalQuantity, PredefinedType:IfcConstructionEquipmentResourceTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, Identification, LongDescription, ResourceType, BaseCosts, BaseQuantity)
        this.PredefinedType = PredefinedType
    }
    /** Defines types of construction equipment resources.
    */
    PredefinedType: IfcConstructionEquipmentResourceTypeEnum
}

export default IfcConstructionEquipmentResourceType
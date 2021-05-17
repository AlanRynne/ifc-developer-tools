// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcConstructionMaterialResourceType

import { IfcConstructionMaterialResourceTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcAppliedValue, IfcPhysicalQuantity, IfcConstructionResourceType } from './'

/** The resource type IfcConstructionMaterialType defines commonly shared information for occurrences of construction material resources.
 *
 * The set of shared information may include:It is used to define a construction material resource specification (the specific resource information that is common to all occurrences of that resource).
 *
 * Resource types may be exchanged without being already assigned to occurrences
 *
 * Occurrences of the IfcConstructionMaterialResourceType are represented by instances of IfcConstructionMaterialResource
 *
 * Assignment Use DefinitionIn addition to assignments specified at the base class IfcConstructionResourceType, a construction material resource type may have assignments of its own using IfcRelAssignsToResource where RelatingResource refers to the IfcConstructionMaterialResourceType and RelatedObjects contains one or more IfcTypeProduct subtypes.
 *
 * Such relationship indicates material specifications to be used as input, which is instantiated as an occurrence assigned for each resource occurrence.
 *
 * The IfcGeographicElementType product type may be used to hold the material representation (via IfcRelAssociatesMaterial.
 *
 * There may be multiple chains of production where such product type may have its own task and resource types assigned indicating how to transport or extract such material.
 */
 class IfcConstructionMaterialResourceType extends IfcConstructionResourceType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, Identification:IfcIdentifier, LongDescription:IfcText, ResourceType:IfcLabel, BaseCosts:Array<IfcAppliedValue>, BaseQuantity:IfcPhysicalQuantity, PredefinedType:IfcConstructionMaterialResourceTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, Identification, LongDescription, ResourceType, BaseCosts, BaseQuantity)
        this.PredefinedType = PredefinedType
    }
    /** Defines types of construction material resources.
    */
    PredefinedType: IfcConstructionMaterialResourceTypeEnum
}

export default IfcConstructionMaterialResourceType
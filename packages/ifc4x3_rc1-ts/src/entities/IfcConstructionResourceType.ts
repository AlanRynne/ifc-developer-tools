// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcConstructionResourceType

import { IfcAppliedValue, IfcPhysicalQuantity, IfcOwnerHistory, IfcPropertySetDefinition, IfcTypeResource } from './'
import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'

/** IfcConstructionResourceType is an abstract generalization of the different resource types used in construction projects, mainly labor, material, equipment and product resource types, plus subcontracted resource types and aggregations such as a crew resource type
 *
 * A resource type represents a model of "use of something" and does not necessarily correspond to a specific type of object such as a person or vehicle, but represents possible usages of such objects such as general labor or an equipment fleet.
 *
 * A resource type can either represent usage in general (consumption attributes defined but no task type assignment) or a task-specific resource type (production attributes defined and having an IfcTask assignment)
 *
 * A construction resource type captures common productivities and cost rates for applying resources to particular task types
 *
 * Composition use definitionResource types may be decomposed into nested resource types indicating productivities when applying the resource to specific task types using the IfcRelNests relationship where IfcRelNests
 *
 * RelatingObject refers to the general resource type and IfcRelNests
 *
 * RelatedObjects refers to one or more task-specific productivities.
 *
 * For example, an IfcLaborResourceType may be defined for "Carpenter" which may have a nested IfcLaborResourceType for "Carpenter - Wall Framing" and another nested IfcLaborResourceType for "Carpenter - Drywall", each of which may have productivities based according to specific task types (IfcTaskType)
 *
 * Assignment use definitionResource types may be assigned to process types (IfcTypeProcess subtypes) using the IfcRelAssignsToProcess relationship as shown in Figure 308.
 *
 * Such relationship indicates that the resource type applies to the process type for the use indicated (e.g. IfcTaskType.PredefinedType).
 *
 * Such relationship enables a scenario of placing an IfcProduct of a particular IfcTypeProduct, querying for a set of IfcTypeProcess process types for constructing such product (e.g. IfcTaskTypeEnum
 *
 * CONSTRUCTION), querying each IfcTypeProcess for a set of IfcTypeResource resource types for carrying out the process, and finally choosing an IfcTypeProcess and IfcTypeResource combination resulting in the shortest time for instantiated IfcTask occurrence(s) and/or lowest-cost for instantiated IfcConstructionResource occurrence(s).
 */
abstract class IfcConstructionResourceType extends IfcTypeResource {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, Identification:IfcIdentifier, LongDescription:IfcText, ResourceType:IfcLabel, BaseCosts:Array<IfcAppliedValue>, BaseQuantity:IfcPhysicalQuantity) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, Identification, LongDescription, ResourceType)
        this.BaseCosts = BaseCosts
        this.BaseQuantity = BaseQuantity
    }
    /** Indicates the unit costs and environmental impacts for which accrued amounts should be calculated.
     * Such unit costs may be split into Name designations (e.g. 'Standard', 'Overtime'), and may contain a hierarchy of cost values that apply at different dates (using IfcCostValue
     * ApplicableDate and IfcCostValue.FixedUntilDate).
    */
    BaseCosts?: Array<IfcAppliedValue>
    /** Identifies the quantity for which the BaseQuantityProduced applies.
     * The Name of the IfcPhysicalQuantity identifies the quantity definition being measured, e.g. "GrossVolume".
     * For production-based resources (e.g. carpentry labor), this value refers to quantities on IfcProduct(s) to which the assigned IfcTask is assigned.
     * For duration-based resources (e.g. safety inspector, fuel for equipment), this value refers to quantities that may be assigned to occurrences of the assigned IfcTaskType.
    */
    BaseQuantity?: IfcPhysicalQuantity
}

export default IfcConstructionResourceType
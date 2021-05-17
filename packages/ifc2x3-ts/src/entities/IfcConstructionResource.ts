// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcConstructionResource

import { IfcIdentifier, IfcLabel, IfcResourceConsumptionEnum, IfcGloballyUniqueId, IfcText } from '../types'
import { IfcMeasureWithUnit, IfcOwnerHistory, IfcResource } from './'

/** IfcConstructionResource is an abstract generalization of the different resources used in construction projects, mainly labour, material, equipment and product resources, plus subcontracted resources and aggregations such as a crew resource
 *
 * A resource represents "use of something" and does not necessarily correspond to a single item such as a person or vehicle, but represents a pool of items having limited availability such as general labor or an equipment fleet.
 *
 * A resource can represent either a generic resource pool (not having any task assignment) or a task-specific resource allocation (having an IfcTask assignment)
 *
 * Declaration use definitionA root-level resource (specifically IfcCrewResource or IfcSubContractResource) is declared within the project by IfcRelDeclares where RelatingContext refers to the single IfcProject and RelatedObjects refers to one or more IfcConstructionResource, and other root-level objects within the project
 *
 * Assignment use definitionA resource may be assigned to an actor by IfcRelAssignsToActor where RelatingActor refers to an IfcActor and RelatedObjects refers to one or more IfcConstructionResource or other objects.
 *
 * Such relationship indicates the actor responsible for allocating the resource such as partitioning into task-specific allocations, delegating to other actors, and/or scheduling over time.
 *
 * Note that this assignment does not indicate the person or organization performing the work; that is indicated by IfcRelAssignsToResource.
 *
 * The actor responsible for the resource may or may not be the same as any actor(s) performing work
 *
 * A resource may be assigned to a control by IfcRelAssignsToControl where RelatingProduct refers to an IfcControl and RelatedObjects refers to one or more IfcConstructionResource or other objects.
 *
 * Most commonly an IfcWorkCalendar is assigned indicating availability of the resource, where such calendar is nested within a base calendar or an IfcWorkPlan which in turn is assigned to the IfcProject
 *
 * A resource may be assigned to a group by IfcRelAssignsToGroup where RelatingGroup refers to an IfcGroup and RelatedObjects refers to one or more IfcConstructionResource or other objects.
 *
 * Most commonly an IfcAsset is assigned indicating the asset to be tracked, where such asset is nested within an IfcInventory which in turn is assigned to the IfcProject
 *
 * A resource may be assigned to a product by IfcRelAssignsToProduct where RelatingProduct refers to an IfcProduct and RelatedObjects refers to one or more IfcConstructionResource or other objects.
 *
 * Most commonly an IfcElement subtype is assigned indicating the product to be constructed, where such product is connected to a spatial structure which in turn is aggregated within the IfcProject
 *
 * A resource may be assigned to a process by IfcRelAssignsToProcess where RelatingProcess refers to an IfcProcess and RelatedObjects refers to one or more IfcConstructionResource or other objects.
 *
 * Most commonly an IfcTask is assigned indicating the task to be performed by the resource, where such task is nested within a summary task which in turn is assigned to the IfcProject
 *
 * A resource may have assignments of other objects using IfcRelAssignsToResource where RelatingResource refers to the IfcConstructionResource and RelatedObjects refers to one or more objects such as IfcActor or IfcProduct subtypes.
 *
 * This relationship indicates specific objects assigned to fulfill resource usage
 *
 * Figure 303 illustrates resource assignment
 *
 * Baseline use definitionA resource may have any number of baselines defined using the relationship IfcRelDefinesByObject where RelatingObject is the "current" resource and RelatedObjects consists of multiple "baseline" resources, each representing a copy of the resource as it existed at an earlier point in time as shown in Figure 185.
 *
 * Each baseline IfcConstructionResource is identified by its nested IfcRelAssignsToControl relationship to an IfcWorkSchedule having PredefinedType=BASELINE, IfcWorkSchedule
 *
 * CreationDate indicating the date of the baseline, and IfcWorkSchedule
 *
 * Name indicating the name of the baseline.
 */
abstract class IfcConstructionResource extends IfcResource {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ResourceIdentifier:IfcIdentifier, ResourceGroup:IfcLabel, ResourceConsumption:IfcResourceConsumptionEnum, BaseQuantity:IfcMeasureWithUnit) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType)
        this.ResourceIdentifier = ResourceIdentifier
        this.ResourceGroup = ResourceGroup
        this.ResourceConsumption = ResourceConsumption
        this.BaseQuantity = BaseQuantity
    }
    /** undefined
    */
    ResourceIdentifier?: IfcIdentifier
    /** undefined
    */
    ResourceGroup?: IfcLabel
    /** undefined
    */
    ResourceConsumption?: IfcResourceConsumptionEnum
    /** Identifies the base quantity consumed of the resource relative to assignments.
     * For crew, labour, subcontract, and equipment resources, this refers to IfcQuantityTime.
     * For material resources, this refers to IfcQuantityVolume.
     * For product resources, this refers to IfcQuantityCount.
     * IFC4 CHANGE New attribute.
    */
    BaseQuantity?: IfcMeasureWithUnit
}

export default IfcConstructionResource
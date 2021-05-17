// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcConstructionMaterialResource

import { IfcActorSelect, IfcRatioMeasure, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier, IfcResourceConsumptionEnum } from '../types'
import { IfcOwnerHistory, IfcMeasureWithUnit, IfcConstructionResource } from './'

/** IfcConstructionMaterialResource identifies a material resource type in a construction project
 *
 * Occurrences of IfcConstructionMaterialResource are consumed (wholly or partially), or occupied during a construction work task (IfcTask)
 *
 * Similar to IfcConstructionProductResource, sometimes things such as 5000kg of gravel are already instantiated as an instance of an IfcProduct subtype because it is a result of a work task (for example, ‘transporting gravel’).
 *
 * In this case, the instance of IfcConstructionMaterialResource can be associated with the product instance ‘5000kg of gravel’ to provide more information for resource uses.
 *
 * Nevertheless, IfcConstructionMaterialResource should only be used to represent resource usage, but not product substances.
 */
 class IfcConstructionMaterialResource extends IfcConstructionResource {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ResourceIdentifier:IfcIdentifier, ResourceGroup:IfcLabel, ResourceConsumption:IfcResourceConsumptionEnum, BaseQuantity:IfcMeasureWithUnit, Suppliers:Array<IfcActorSelect>, UsageRatio:IfcRatioMeasure) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ResourceIdentifier, ResourceGroup, ResourceConsumption, BaseQuantity)
        this.Suppliers = Suppliers
        this.UsageRatio = UsageRatio
    }
    /** undefined
    */
    Suppliers?: Array<IfcActorSelect>
    /** undefined
    */
    UsageRatio?: IfcRatioMeasure
}

export default IfcConstructionMaterialResource
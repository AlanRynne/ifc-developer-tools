// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcConstructionMaterialResource

import { IfcConstructionMaterialResourceTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcResourceTime, IfcAppliedValue, IfcPhysicalQuantity, IfcConstructionResource } from './'

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
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, Identification:IfcIdentifier, LongDescription:IfcText, Usage:IfcResourceTime, BaseCosts:Array<IfcAppliedValue>, BaseQuantity:IfcPhysicalQuantity, PredefinedType:IfcConstructionMaterialResourceTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, Identification, LongDescription, Usage, BaseCosts, BaseQuantity)
        this.PredefinedType = PredefinedType
    }
    /** Defines types of construction material resources.
     * IFC4 New attribute.
    */
    PredefinedType?: IfcConstructionMaterialResourceTypeEnum
}

export default IfcConstructionMaterialResource
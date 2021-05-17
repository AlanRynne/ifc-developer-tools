// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcConstructionProductResource

import { IfcConstructionProductResourceTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcResourceTime, IfcAppliedValue, IfcPhysicalQuantity, IfcConstructionResource } from './'

/** IfcConstructionProductResource defines the role of a product that is consumed (wholly or partially), or occupied in the performance of construction
 *
 * Occurrences of IfcConstructionProductResource are usage of products to assist the process of construction.
 *
 * More specifically, they are usage of products that result from some construction processes and that are then used as resources to facilitate further construction.
 *
 * For instance, formworks can be instantiated as products resulting from the process ‘constructing formwork’.
 *
 * However, they are used as resources in the process ‘pouring concrete’ in a later stage of the project.
 */
 class IfcConstructionProductResource extends IfcConstructionResource {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, Identification:IfcIdentifier, LongDescription:IfcText, Usage:IfcResourceTime, BaseCosts:Array<IfcAppliedValue>, BaseQuantity:IfcPhysicalQuantity, PredefinedType:IfcConstructionProductResourceTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, Identification, LongDescription, Usage, BaseCosts, BaseQuantity)
        this.PredefinedType = PredefinedType
    }
    /** Defines types of construction product resources.
     * IFC4 New attribute.
    */
    PredefinedType?: IfcConstructionProductResourceTypeEnum
}

export default IfcConstructionProductResource
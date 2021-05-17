// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcConstructionEquipmentResource

import { IfcConstructionEquipmentResourceTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcResourceTime, IfcAppliedValue, IfcPhysicalQuantity, IfcConstructionResource } from './'

/** IfcConstructionEquipmentResource is usage of construction equipment to assist in the performance of construction.
 *
 * Construction Equipment resources are wholly or partially consumed or occupied in the performance of construction.
 *
 * Occurrences of IfcConstructionEquipmentResource are products that are used as resources to assist the process of construction.
 *
 * More specifically, they are products that are standalone items brought to a project to fulfil a particular purpose.
 *
 * Examples might be a tower crane or other mobile crane, a screwing machine, or a lifting hoist.
 *
 * Instances of any subtype of IfcProduct may be assigned to the equipment resource using IfcRelAssignsToResource in order to characterize the equipment further, as described at the supertype IfcResource.
 *
 * Examples of relevant subtypes of IfcProduct are IfcTransportElement, IfcDiscreteAccessory, or IfcProxy (for particular cases where more precise usage details are not available)
 */
 class IfcConstructionEquipmentResource extends IfcConstructionResource {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, Identification:IfcIdentifier, LongDescription:IfcText, Usage:IfcResourceTime, BaseCosts:Array<IfcAppliedValue>, BaseQuantity:IfcPhysicalQuantity, PredefinedType:IfcConstructionEquipmentResourceTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, Identification, LongDescription, Usage, BaseCosts, BaseQuantity)
        this.PredefinedType = PredefinedType
    }
    /** Defines types of construction equipment resources.
     * IFC4 New attribute.
    */
    PredefinedType?: IfcConstructionEquipmentResourceTypeEnum
}

export default IfcConstructionEquipmentResource
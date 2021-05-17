// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSubContractResource

import { IfcSubContractResourceTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcResourceTime, IfcAppliedValue, IfcPhysicalQuantity, IfcConstructionResource } from './'

/** IfcSubContractResource is a construction resource needed in a construction process that represents a sub-contractor.
 *
 * An IfcSubContractResource can be used in cost estimating and work planning with or without specifying the subcontractor and contract agreement
 *
 * The purpose of an IfcSubContractResource is to indicate work of a particular type that is that is to be engaged through the use of a sub-contract.
 *
 * Its aim is to identify the description of the sub-contract work required.
 *
 * It can be used to identify the generic type of sub-contract resource that is required for a purpose without having to be specific about the actor (person or organization) providing the resource occurrence.
 *
 * It may be particularly useful when creating an overall plan for a process or processes.
 *
 * For instance, within maintenance or work planning there may be a known task that needs to be done which is planned to require an 'insulation specialist'.
 *
 * A subcontract resource may be described at various stages and levels of detail through its assignments:
 */
 class IfcSubContractResource extends IfcConstructionResource {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, Identification:IfcIdentifier, LongDescription:IfcText, Usage:IfcResourceTime, BaseCosts:Array<IfcAppliedValue>, BaseQuantity:IfcPhysicalQuantity, PredefinedType:IfcSubContractResourceTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, Identification, LongDescription, Usage, BaseCosts, BaseQuantity)
        this.PredefinedType = PredefinedType
    }
    /** Defines types of subcontract resources.
     * IFC4 New attribute.
    */
    PredefinedType?: IfcSubContractResourceTypeEnum
}

export default IfcSubContractResource
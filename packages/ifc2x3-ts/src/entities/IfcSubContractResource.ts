// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSubContractResource

import { IfcActorSelect, IfcText, IfcGloballyUniqueId, IfcLabel, IfcIdentifier, IfcResourceConsumptionEnum } from '../types'
import { IfcOwnerHistory, IfcMeasureWithUnit, IfcConstructionResource } from './'

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
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ResourceIdentifier:IfcIdentifier, ResourceGroup:IfcLabel, ResourceConsumption:IfcResourceConsumptionEnum, BaseQuantity:IfcMeasureWithUnit, SubContractor:IfcActorSelect, JobDescription:IfcText) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ResourceIdentifier, ResourceGroup, ResourceConsumption, BaseQuantity)
        this.SubContractor = SubContractor
        this.JobDescription = JobDescription
    }
    /** undefined
    */
    SubContractor?: IfcActorSelect
    /** undefined
    */
    JobDescription?: IfcText
}

export default IfcSubContractResource
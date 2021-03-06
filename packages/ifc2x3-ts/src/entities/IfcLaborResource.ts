// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcLaborResource

import { IfcText, IfcGloballyUniqueId, IfcLabel, IfcIdentifier, IfcResourceConsumptionEnum } from '../types'
import { IfcOwnerHistory, IfcMeasureWithUnit, IfcConstructionResource } from './'

/** An IfcLaborResource is used in construction with particular skills or crafts required to perform certain types of construction or management related work.
 *
 * The purpose of an IfcLaborResource is to identify a skillset that may be required or used.
 *
 * The skillset identified may be (for instance) charge-hand, foreman, labourer, plumbers mate etc. and provides a designation of a particular level of skill.
 *
 * It can be used to identify the generic type of labour resource that is required for a purpose without having to be specific about the actor (person or organization) providing the resource occurrence.
 *
 * It may be particularly useful when creating an overall plan for a process or processes.
 *
 * For instance, within maintenance or work planning there may be a known task that needs to be done which is planned to require a 'chargehand pipe fitter'.
 *
 * There may be several such labour resources available and so the need to identify which will be used is not necessary at the planning stage
 *
 * At a later stage, individual actors can be determined for the labour resources.
 *
 * This is achieved through specifying the actor through IfcActor.
 *
 * The actor is then identified as the labour resource occurrence through the IfcRelAssignsToResource
 *
 * RelatedResource attribute.
 *
 * The IfcLaborResource provides the IfcRelAssignsToResource
 *
 * RelatingResource attribute.
 */
 class IfcLaborResource extends IfcConstructionResource {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ResourceIdentifier:IfcIdentifier, ResourceGroup:IfcLabel, ResourceConsumption:IfcResourceConsumptionEnum, BaseQuantity:IfcMeasureWithUnit, SkillSet:IfcText) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ResourceIdentifier, ResourceGroup, ResourceConsumption, BaseQuantity)
        this.SkillSet = SkillSet
    }
    /** undefined
    */
    SkillSet?: IfcText
}

export default IfcLaborResource
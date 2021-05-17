// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCrewResource

import { IfcCrewResourceTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcResourceTime, IfcAppliedValue, IfcPhysicalQuantity, IfcConstructionResource } from './'

/** IfcCrewResource represents a collection of internal resources used in construction processes
 *
 * Identification of people and equipment of a crew is achieved through their specification at the level of the component.
 *
 * Therefore, knowing which persons are within a crew is achieved through identifying the persons assigned to each IfcLaborResource within the IfcCrewResource.
 *
 * Similarly, identifying that a screwing machine for pipe fitting forms part of the crew is achieved by relating an appropriate instance of IfcElementComponent to the IfcConstructionEquipmentResource forming an element of the IfcCrewResource.
 */
 class IfcCrewResource extends IfcConstructionResource {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, Identification:IfcIdentifier, LongDescription:IfcText, Usage:IfcResourceTime, BaseCosts:Array<IfcAppliedValue>, BaseQuantity:IfcPhysicalQuantity, PredefinedType:IfcCrewResourceTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, Identification, LongDescription, Usage, BaseCosts, BaseQuantity)
        this.PredefinedType = PredefinedType
    }
    /** Defines types of crew resources.
     * IFC4 New attribute.
    */
    PredefinedType?: IfcCrewResourceTypeEnum
}

export default IfcCrewResource
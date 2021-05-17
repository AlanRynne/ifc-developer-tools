// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcControl

import { IfcIdentifier, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcObject } from './'

/** IfcControl is the abstract generalization of all concepts that control or constrain the utilization of products, processes, or resources in general.
 *
 * It can be seen as a regulation, cost schedule, request or order, or other requirements applied to a product, process or resource whose requirements and provisions must be fulfilled.
 */
abstract class IfcControl extends IfcObject {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, Identification:IfcIdentifier) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType)
        this.Identification = Identification
    }
    /** An identifying designation given to a control It is the identifier at the occurrence level.
     * IFC4 CHANGE Attribute unified by promoting from various subtypes of IfcControl.
    */
    Identification?: IfcIdentifier
}

export default IfcControl
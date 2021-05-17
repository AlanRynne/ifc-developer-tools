// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcControl

import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcObject } from './'

/** IfcControl is the abstract generalization of all concepts that control or constrain the utilization of products, processes, or resources in general.
 *
 * It can be seen as a regulation, cost schedule, request or order, or other requirements applied to a product, process or resource whose requirements and provisions must be fulfilled.
 */
abstract class IfcControl extends IfcObject {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType)

    }

}

export default IfcControl
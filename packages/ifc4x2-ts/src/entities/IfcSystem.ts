// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSystem

import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcGroup } from './'

/** A system is an organized combination of related parts within an AEC product, composed for a common purpose or function or to provide a service.
 *
 * A system is essentially a functionally related aggregation of products.
 *
 * The grouping relationship to one or several instances of IfcProduct (the system members) is handled by IfcRelAssignsToGroup.
 */
 class IfcSystem extends IfcGroup {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType)

    }

}

export default IfcSystem
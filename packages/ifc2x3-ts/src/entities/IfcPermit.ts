// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPermit

import { IfcIdentifier, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcControl } from './'

/** A permit is a permission to perform work in places and on artifacts where regulatory, security or other access restrictions apply.
 */
 class IfcPermit extends IfcControl {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, PermitID:IfcIdentifier) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType)
        this.PermitID = PermitID
    }
    /** undefined
    */
    PermitID: IfcIdentifier
}

export default IfcPermit
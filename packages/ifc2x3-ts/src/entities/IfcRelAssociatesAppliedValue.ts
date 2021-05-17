// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelAssociatesAppliedValue

import { IfcAppliedValue, IfcOwnerHistory, IfcRoot, IfcRelAssociates } from './'
import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'

/**  */
 class IfcRelAssociatesAppliedValue extends IfcRelAssociates {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatedObjects:Array<IfcRoot>, RelatingAppliedValue:IfcAppliedValue) {
        super(GlobalId, OwnerHistory, Name, Description, RelatedObjects)
        this.RelatingAppliedValue = RelatingAppliedValue
    }

    RelatingAppliedValue: IfcAppliedValue
}

export default IfcRelAssociatesAppliedValue
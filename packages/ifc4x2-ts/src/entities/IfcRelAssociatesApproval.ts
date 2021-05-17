// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelAssociatesApproval

import { IfcApproval, IfcOwnerHistory, IfcRelAssociates } from './'
import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcDefinitionSelect } from '../types'

/** The entity IfcRelAssociatesApproval is used to apply approval information defined by IfcApproval, in IfcApprovalResource schema, to subtypes of IfcRoot.
 */
 class IfcRelAssociatesApproval extends IfcRelAssociates {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatedObjects:Array<IfcDefinitionSelect>, RelatingApproval:IfcApproval) {
        super(GlobalId, OwnerHistory, Name, Description, RelatedObjects)
        this.RelatingApproval = RelatingApproval
    }
    /** Reference to approval that is being applied using this relationship.
    */
    RelatingApproval: IfcApproval
}

export default IfcRelAssociatesApproval
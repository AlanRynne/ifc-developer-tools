// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcApprovalRelationship

import { IfcApproval, IfcResourceLevelRelationship } from './'
import { IfcLabel, IfcText } from '../types'

/** An IfcApprovalRelationship associates approvals (one relating approval and one or more related approvals), each having different status or level as the approval process or the approved objects evolve.
 */
 class IfcApprovalRelationship extends IfcResourceLevelRelationship {
    constructor(Name:IfcLabel, Description:IfcText, RelatingApproval:IfcApproval, RelatedApprovals:Array<IfcApproval>) {
        super(Name, Description)
        this.RelatingApproval = RelatingApproval
        this.RelatedApprovals = RelatedApprovals
    }
    /** The approval that other approval is related to.
    */
    RelatingApproval: IfcApproval
    /** The approvals that are related to another (relating) approval
     * IFC4 CHANGE The cardinality of this attribute has been changed to SET.
    */
    RelatedApprovals: Array<IfcApproval>
}

export default IfcApprovalRelationship
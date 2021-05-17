// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcApprovalRelationship

import { IfcApproval } from './'
import { IfcText, IfcLabel } from '../types'

/** An IfcApprovalRelationship associates approvals (one relating approval and one or more related approvals), each having different status or level as the approval process or the approved objects evolve.
 */
 class IfcApprovalRelationship  {
    constructor(RelatedApproval:IfcApproval, RelatingApproval:IfcApproval, Description:IfcText, Name:IfcLabel) {

        this.RelatedApproval = RelatedApproval
        this.RelatingApproval = RelatingApproval
        this.Description = Description
        this.Name = Name
    }
    /** undefined
    */
    RelatedApproval: IfcApproval
    /** The approval that other approval is related to.
    */
    RelatingApproval: IfcApproval
    /** undefined
    */
    Description?: IfcText
    /** undefined
    */
    Name: IfcLabel
}

export default IfcApprovalRelationship
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcApprovalPropertyRelationship

import { IfcProperty, IfcApproval } from './'

/**  */
 class IfcApprovalPropertyRelationship  {
    constructor(ApprovedProperties:Array<IfcProperty>, Approval:IfcApproval) {

        this.ApprovedProperties = ApprovedProperties
        this.Approval = Approval
    }

    ApprovedProperties: Array<IfcProperty>

    Approval: IfcApproval
}

export default IfcApprovalPropertyRelationship
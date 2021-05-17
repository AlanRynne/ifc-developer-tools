// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcApproval

import { IfcText, IfcDateTimeSelect, IfcLabel, IfcIdentifier } from '../types'

/** An IfcApproval represents information about approval processes such as for a plan, a design, a proposal, or a change order in a construction or facilities management project.
 *
 * IfcApproval is referenced by IfcRelAssociatesApproval in IfcControlExtension schema, and thereby can be related to all subtypes of IfcRoot.
 *
 * An approval may also be given to resource objects using IfcResourceApprovalRelationship
 */
 class IfcApproval  {
    constructor(Description:IfcText, ApprovalDateTime:IfcDateTimeSelect, ApprovalStatus:IfcLabel, ApprovalLevel:IfcLabel, ApprovalQualifier:IfcText, Name:IfcLabel, Identifier:IfcIdentifier) {

        this.Description = Description
        this.ApprovalDateTime = ApprovalDateTime
        this.ApprovalStatus = ApprovalStatus
        this.ApprovalLevel = ApprovalLevel
        this.ApprovalQualifier = ApprovalQualifier
        this.Name = Name
        this.Identifier = Identifier
    }
    /** A general textual description of a design, work task, plan, etc. that is being approved for.
    */
    Description?: IfcText
    /** undefined
    */
    ApprovalDateTime: IfcDateTimeSelect
    /** undefined
    */
    ApprovalStatus?: IfcLabel
    /** undefined
    */
    ApprovalLevel?: IfcLabel
    /** undefined
    */
    ApprovalQualifier?: IfcText
    /** A human readable name given to an approval.
    */
    Name: IfcLabel
    /** A computer interpretable identifier by which the approval is known.
    */
    Identifier: IfcIdentifier
}

export default IfcApproval
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcApproval

import { IfcIdentifier, IfcLabel, IfcText, IfcDateTime, IfcActorSelect } from '../types'

/** An IfcApproval represents information about approval processes such as for a plan, a design, a proposal, or a change order in a construction or facilities management project.
 *
 * IfcApproval is referenced by IfcRelAssociatesApproval in IfcControlExtension schema, and thereby can be related to all subtypes of IfcRoot.
 *
 * An approval may also be given to resource objects using IfcResourceApprovalRelationship
 */
 class IfcApproval  {
    constructor(Identifier:IfcIdentifier, Name:IfcLabel, Description:IfcText, TimeOfApproval:IfcDateTime, Status:IfcLabel, Level:IfcLabel, Qualifier:IfcText, RequestingApproval:IfcActorSelect, GivingApproval:IfcActorSelect) {

        this.Identifier = Identifier
        this.Name = Name
        this.Description = Description
        this.TimeOfApproval = TimeOfApproval
        this.Status = Status
        this.Level = Level
        this.Qualifier = Qualifier
        this.RequestingApproval = RequestingApproval
        this.GivingApproval = GivingApproval
    }
    /** A computer interpretable identifier by which the approval is known.
    */
    Identifier?: IfcIdentifier
    /** A human readable name given to an approval.
    */
    Name?: IfcLabel
    /** A general textual description of a design, work task, plan, etc. that is being approved for.
    */
    Description?: IfcText
    /** Date and time when the result of the approval process is produced.
     * IFC4 CHANGE Attribute data type changed to IfcDateTime using ISO 8601 representation, renamed from ApprovalDateTime and made OPTIONAL.
    */
    TimeOfApproval?: IfcDateTime
    /** The result or current status of the approval, e.g. Requested, Processed, Approved, Not Approved.
    */
    Status?: IfcLabel
    /** Level of the approval e.g. Draft v.s. Completed design.
    */
    Level?: IfcLabel
    /** Textual description of special constraints or conditions for the approval.
    */
    Qualifier?: IfcText
    /** The actor that is acting in the role specified at IfcOrganization or individually at IfcPerson and requesting an approval.
     * IFC4 CHANGE New attribute for approval request replacing IfcApprovalActorRelationship (being deleted).
    */
    RequestingApproval?: IfcActorSelect
    /** The actor that is acting in the role specified at IfcOrganization or individually at IfcPerson and giving an approval.
     * IFC4 CHANGE New attribute for approval provision replacing IfcApprovalActorRelationship (being deleted).
    */
    GivingApproval?: IfcActorSelect
}

export default IfcApproval
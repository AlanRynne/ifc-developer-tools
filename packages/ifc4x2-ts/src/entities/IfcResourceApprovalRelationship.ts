// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcResourceApprovalRelationship

import { IfcResourceObjectSelect, IfcLabel, IfcText } from '../types'
import { IfcApproval, IfcResourceLevelRelationship } from './'

/** An IfcResourceApprovalRelationship is used for associating an approval to resource objects.
 *
 * A single approval might be given to one or many items via IfcResourceObjectSelect.
 */
 class IfcResourceApprovalRelationship extends IfcResourceLevelRelationship {
    constructor(Name:IfcLabel, Description:IfcText, RelatedResourceObjects:Array<IfcResourceObjectSelect>, RelatingApproval:IfcApproval) {
        super(Name, Description)
        this.RelatedResourceObjects = RelatedResourceObjects
        this.RelatingApproval = RelatingApproval
    }
    /** Resource objects that are approved.
    */
    RelatedResourceObjects: Array<IfcResourceObjectSelect>
    /** The approval for the resource objects selected.
    */
    RelatingApproval: IfcApproval
}

export default IfcResourceApprovalRelationship
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelConnectsStructuralActivity

import { IfcStructuralActivityAssignmentSelect, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcStructuralActivity, IfcOwnerHistory, IfcRelConnects } from './'

/** The IfcRelConnectsStructuralActivity relationship connects a structural activity (either an action or reaction) to a structural member, structural connection, or element.
 */
 class IfcRelConnectsStructuralActivity extends IfcRelConnects {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatingElement:IfcStructuralActivityAssignmentSelect, RelatedStructuralActivity:IfcStructuralActivity) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.RelatingElement = RelatingElement
        this.RelatedStructuralActivity = RelatedStructuralActivity
    }
    /** Reference to a structural item or element to which the specified activity is applied.
    */
    RelatingElement: IfcStructuralActivityAssignmentSelect
    /** Reference to a structural activity which is acting upon the specified structural item or element.
    */
    RelatedStructuralActivity: IfcStructuralActivity
}

export default IfcRelConnectsStructuralActivity
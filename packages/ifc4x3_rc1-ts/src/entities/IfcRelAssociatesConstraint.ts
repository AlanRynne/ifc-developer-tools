// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelAssociatesConstraint

import { IfcLabel, IfcGloballyUniqueId, IfcText, IfcDefinitionSelect } from '../types'
import { IfcConstraint, IfcOwnerHistory, IfcRelAssociates } from './'

/** The entity IfcRelAssociatesConstraint is used to apply constraint information defined by IfcConstraint, in the IfcConstraintResource schema, to subtypes of IfcRoot.
 */
 class IfcRelAssociatesConstraint extends IfcRelAssociates {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatedObjects:Array<IfcDefinitionSelect>, Intent:IfcLabel, RelatingConstraint:IfcConstraint) {
        super(GlobalId, OwnerHistory, Name, Description, RelatedObjects)
        this.Intent = Intent
        this.RelatingConstraint = RelatingConstraint
    }
    /** The intent of the constraint usage with regard to its related IfcConstraint and IfcObjects, IfcPropertyDefinitions or IfcRelationships.
     * Typical values can be e.g. RATIONALE or EXPECTED PERFORMANCE.
    */
    Intent?: IfcLabel
    /** Reference to constraint that is being applied using this relationship.
    */
    RelatingConstraint: IfcConstraint
}

export default IfcRelAssociatesConstraint
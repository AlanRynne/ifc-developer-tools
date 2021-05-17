// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcResourceConstraintRelationship

import { IfcConstraint, IfcResourceLevelRelationship } from './'
import { IfcResourceObjectSelect, IfcLabel, IfcText } from '../types'

/** An IfcResourceConstraintRelationship is a relationship entity that enables a constraint to be related to one or more resource level objects.
 *
 * An IfcResourceConstraintRelationship allows for the specification of a constraint to be applied to many entity types.
 *
 * An important case is to apply constraints to properties.
 *
 * The constraints applied therefore enable a property to carry values identifying requirements as well as those identifying the fulfilment of those requirements.
 */
 class IfcResourceConstraintRelationship extends IfcResourceLevelRelationship {
    constructor(Name:IfcLabel, Description:IfcText, RelatingConstraint:IfcConstraint, RelatedResourceObjects:Array<IfcResourceObjectSelect>) {
        super(Name, Description)
        this.RelatingConstraint = RelatingConstraint
        this.RelatedResourceObjects = RelatedResourceObjects
    }
    /** The constraint that is to be related.
    */
    RelatingConstraint: IfcConstraint
    /** The properties to which a constraint is to be related.
    */
    RelatedResourceObjects: Array<IfcResourceObjectSelect>
}

export default IfcResourceConstraintRelationship
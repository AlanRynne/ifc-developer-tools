// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcConstraintRelationship

import { IfcLabel, IfcText } from '../types'
import { IfcConstraint } from './'

/**  */
 class IfcConstraintRelationship  {
    constructor(Name:IfcLabel, Description:IfcText, RelatingConstraint:IfcConstraint, RelatedConstraints:Array<IfcConstraint>) {

        this.Name = Name
        this.Description = Description
        this.RelatingConstraint = RelatingConstraint
        this.RelatedConstraints = RelatedConstraints
    }

    Name?: IfcLabel

    Description?: IfcText

    RelatingConstraint: IfcConstraint

    RelatedConstraints: Array<IfcConstraint>
}

export default IfcConstraintRelationship
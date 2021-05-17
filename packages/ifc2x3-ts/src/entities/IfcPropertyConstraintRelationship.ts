// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPropertyConstraintRelationship

import { IfcConstraint, IfcProperty } from './'
import { IfcLabel, IfcText } from '../types'

/**  */
 class IfcPropertyConstraintRelationship  {
    constructor(RelatingConstraint:IfcConstraint, RelatedProperties:Array<IfcProperty>, Name:IfcLabel, Description:IfcText) {

        this.RelatingConstraint = RelatingConstraint
        this.RelatedProperties = RelatedProperties
        this.Name = Name
        this.Description = Description
    }

    RelatingConstraint: IfcConstraint

    RelatedProperties: Array<IfcProperty>

    Name?: IfcLabel

    Description?: IfcText
}

export default IfcPropertyConstraintRelationship
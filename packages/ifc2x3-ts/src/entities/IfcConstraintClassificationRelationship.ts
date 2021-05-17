// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcConstraintClassificationRelationship

import { IfcConstraint } from './'
import { IfcClassificationNotationSelect } from '../types'

/**  */
 class IfcConstraintClassificationRelationship  {
    constructor(ClassifiedConstraint:IfcConstraint, RelatedClassifications:Array<IfcClassificationNotationSelect>) {

        this.ClassifiedConstraint = ClassifiedConstraint
        this.RelatedClassifications = RelatedClassifications
    }

    ClassifiedConstraint: IfcConstraint

    RelatedClassifications: Array<IfcClassificationNotationSelect>
}

export default IfcConstraintClassificationRelationship
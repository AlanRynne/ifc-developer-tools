// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcConstraintAggregationRelationship

import { IfcLabel, IfcText, IfcLogicalOperatorEnum } from '../types'
import { IfcConstraint } from './'

/**  */
 class IfcConstraintAggregationRelationship  {
    constructor(Name:IfcLabel, Description:IfcText, RelatingConstraint:IfcConstraint, RelatedConstraints:Array<IfcConstraint>, LogicalAggregator:IfcLogicalOperatorEnum) {

        this.Name = Name
        this.Description = Description
        this.RelatingConstraint = RelatingConstraint
        this.RelatedConstraints = RelatedConstraints
        this.LogicalAggregator = LogicalAggregator
    }

    Name?: IfcLabel

    Description?: IfcText

    RelatingConstraint: IfcConstraint

    RelatedConstraints: Array<IfcConstraint>

    LogicalAggregator: IfcLogicalOperatorEnum
}

export default IfcConstraintAggregationRelationship
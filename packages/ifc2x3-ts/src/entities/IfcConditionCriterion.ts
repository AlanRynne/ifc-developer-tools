// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcConditionCriterion

import { IfcConditionCriterionSelect, IfcDateTimeSelect, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcControl } from './'

/**  */
 class IfcConditionCriterion extends IfcControl {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, Criterion:IfcConditionCriterionSelect, CriterionDateTime:IfcDateTimeSelect) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType)
        this.Criterion = Criterion
        this.CriterionDateTime = CriterionDateTime
    }

    Criterion: IfcConditionCriterionSelect

    CriterionDateTime: IfcDateTimeSelect
}

export default IfcConditionCriterion
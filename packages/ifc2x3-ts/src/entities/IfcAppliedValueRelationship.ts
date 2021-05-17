// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcAppliedValueRelationship

import { IfcAppliedValue } from './'
import { IfcArithmeticOperatorEnum, IfcLabel, IfcText } from '../types'

/**  */
 class IfcAppliedValueRelationship  {
    constructor(ComponentOfTotal:IfcAppliedValue, Components:Array<IfcAppliedValue>, ArithmeticOperator:IfcArithmeticOperatorEnum, Name:IfcLabel, Description:IfcText) {

        this.ComponentOfTotal = ComponentOfTotal
        this.Components = Components
        this.ArithmeticOperator = ArithmeticOperator
        this.Name = Name
        this.Description = Description
    }

    ComponentOfTotal: IfcAppliedValue

    Components: Array<IfcAppliedValue>

    ArithmeticOperator: IfcArithmeticOperatorEnum

    Name?: IfcLabel

    Description?: IfcText
}

export default IfcAppliedValueRelationship
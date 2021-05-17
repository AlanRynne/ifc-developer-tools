// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCostValue

import { IfcLabel, IfcText, IfcAppliedValueSelect, IfcDate, IfcArithmeticOperatorEnum } from '../types'
import { IfcMeasureWithUnit, IfcAppliedValue } from './'

/** IfcCostValue is an amount of money or a value that affects an amount of money
 *
 * Each instance of IfcCostValue may also have a category.
 *
 * There are many possible types of cost value that may be identified.
 *
 * While there is a broad understanding of the meaning of names that may be assigned to different types of costs, there is no general standard for naming cost types nor are there any broadly defined classifications.
 *
 * The following defines some cost categories that might be applied to the Category attribute:
 */
 class IfcCostValue extends IfcAppliedValue {
    constructor(Name:IfcLabel, Description:IfcText, AppliedValue:IfcAppliedValueSelect, UnitBasis:IfcMeasureWithUnit, ApplicableDate:IfcDate, FixedUntilDate:IfcDate, Category:IfcLabel, Condition:IfcLabel, ArithmeticOperator:IfcArithmeticOperatorEnum, Components:Array<IfcAppliedValue>) {
        super(Name, Description, AppliedValue, UnitBasis, ApplicableDate, FixedUntilDate, Category, Condition, ArithmeticOperator, Components)

    }

}

export default IfcCostValue
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcBooleanClippingResult

import { IfcBooleanOperator, IfcBooleanOperand } from '../types'
import { IfcBooleanResult } from './'

/** A clipping result is defined as a special subtype of the general IfcBooleanResult.
 *
 * It constrains the operands and the operator of the Boolean result
 *
 * A clipping result is the Boolean difference between a swept solid and a half space solid, or between the result of the Boolean difference and a half space solid.
 *
 * Hence more than one difference operation can be applied to achieve the final Boolean result.
 */
 class IfcBooleanClippingResult extends IfcBooleanResult {
    constructor(Operator:IfcBooleanOperator, FirstOperand:IfcBooleanOperand, SecondOperand:IfcBooleanOperand) {
        super(Operator, FirstOperand, SecondOperand)

    }

}

export default IfcBooleanClippingResult
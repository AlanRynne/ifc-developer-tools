// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcBooleanResult

import { IfcBooleanOperator, IfcBooleanOperand } from '../types'
import { IfcGeometricRepresentationItem } from './'

/** The IfcBooleanResult is the result of applying a Boolean operation to two operands being solids.
 */
 class IfcBooleanResult extends IfcGeometricRepresentationItem {
    constructor(Operator:IfcBooleanOperator, FirstOperand:IfcBooleanOperand, SecondOperand:IfcBooleanOperand) {
        super()
        this.Operator = Operator
        this.FirstOperand = FirstOperand
        this.SecondOperand = SecondOperand
    }
    /** The Boolean operator used in the operation to create the result.
    */
    Operator: IfcBooleanOperator
    /** The first operand to be operated upon by the Boolean operation.
    */
    FirstOperand: IfcBooleanOperand
    /** The second operand specified for the operation.
    */
    SecondOperand: IfcBooleanOperand
}

export default IfcBooleanResult
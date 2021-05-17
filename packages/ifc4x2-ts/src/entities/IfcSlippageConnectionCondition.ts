// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSlippageConnectionCondition

import { IfcLengthMeasure, IfcLabel } from '../types'
import { IfcStructuralConnectionCondition } from './'

/** Describes slippage in support conditions or connection conditions.
 *
 * Slippage means that a relative displacement may occur in a support or connection before support or connection reactions are awoken
 *
 * Applicability:
 */
 class IfcSlippageConnectionCondition extends IfcStructuralConnectionCondition {
    constructor(Name:IfcLabel, SlippageX:IfcLengthMeasure, SlippageY:IfcLengthMeasure, SlippageZ:IfcLengthMeasure) {
        super(Name)
        this.SlippageX = SlippageX
        this.SlippageY = SlippageY
        this.SlippageZ = SlippageZ
    }
    /** Slippage in x-direction of the coordinate system defined by the instance which uses this resource object.
    */
    SlippageX?: IfcLengthMeasure
    /** Slippage in y-direction of the coordinate system defined by the instance which uses this resource object.
    */
    SlippageY?: IfcLengthMeasure
    /** Slippage in z-direction of the coordinate system defined by the instance which uses this resource object.
    */
    SlippageZ?: IfcLengthMeasure
}

export default IfcSlippageConnectionCondition
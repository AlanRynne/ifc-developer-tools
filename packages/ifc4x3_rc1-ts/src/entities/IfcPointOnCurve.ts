// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPointOnCurve

import { IfcCurve, IfcPoint } from './'
import { IfcParameterValue } from '../types'

/** The IfcPointOnCurve is a point defined by a parameter value of its defining curve
 *
 * Informal Propositions:
 */
 class IfcPointOnCurve extends IfcPoint {
    constructor(BasisCurve:IfcCurve, PointParameter:IfcParameterValue) {
        super()
        this.BasisCurve = BasisCurve
        this.PointParameter = PointParameter
    }
    /** The curve to which point parameter relates.
    */
    BasisCurve: IfcCurve
    /** The parameter value of the point location.
    */
    PointParameter: IfcParameterValue
}

export default IfcPointOnCurve
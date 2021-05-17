// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPointOnSurface

import { IfcSurface, IfcPoint } from './'
import { IfcParameterValue } from '../types'

/** The IfcPointOnSurface is a point defined by two parameter value of its defining surface
 *
 * Informal Propositions:
 */
 class IfcPointOnSurface extends IfcPoint {
    constructor(BasisSurface:IfcSurface, PointParameterU:IfcParameterValue, PointParameterV:IfcParameterValue) {
        super()
        this.BasisSurface = BasisSurface
        this.PointParameterU = PointParameterU
        this.PointParameterV = PointParameterV
    }
    /** The surface to which the parameter values relate.
    */
    BasisSurface: IfcSurface
    /** The first parameter value of the point location.
    */
    PointParameterU: IfcParameterValue
    /** The second parameter value of the point location.
    */
    PointParameterV: IfcParameterValue
}

export default IfcPointOnSurface
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCurveBoundedSurface

import { IfcSurface, IfcBoundaryCurve, IfcBoundedSurface } from './'
import { IfcBoolean } from '../types'

/** The IfcCurveBoundedSurface is a parametric surface with boundaries defined by p-curves, that is, a curve which lies on the basis of a surface and is defined in the parameter space of that surface.
 *
 * The p-curve is a special type of a composite curve segment and shall only be used to bound a surface
 *
 * The outer boundary shall be either defined by:Informal Propositions:
 */
 class IfcCurveBoundedSurface extends IfcBoundedSurface {
    constructor(BasisSurface:IfcSurface, Boundaries:Array<IfcBoundaryCurve>, ImplicitOuter:IfcBoolean) {
        super()
        this.BasisSurface = BasisSurface
        this.Boundaries = Boundaries
        this.ImplicitOuter = ImplicitOuter
    }
    /** The surface to be bounded.
    */
    BasisSurface: IfcSurface
    /** The outer boundary of the surface.
    */
    Boundaries: Array<IfcBoundaryCurve>
    /** 
    */
    ImplicitOuter: IfcBoolean
}

export default IfcCurveBoundedSurface
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRectangularTrimmedSurface

import { IfcSurface, IfcBoundedSurface } from './'
import { IfcParameterValue } from '../types'

/** The IfcRectangularTrimmedSurface is a surface created by bounding its BasisSurface along two pairs of parallel curves defined within the parametric space of the referenced surface
 *
 * Informal Propositions:
 */
 class IfcRectangularTrimmedSurface extends IfcBoundedSurface {
    constructor(BasisSurface:IfcSurface, U1:IfcParameterValue, V1:IfcParameterValue, U2:IfcParameterValue, V2:IfcParameterValue, Usense:boolean, Vsense:boolean) {
        super()
        this.BasisSurface = BasisSurface
        this.U1 = U1
        this.V1 = V1
        this.U2 = U2
        this.V2 = V2
        this.Usense = Usense
        this.Vsense = Vsense
    }
    /** Surface being trimmed.
    */
    BasisSurface: IfcSurface
    /** First u parametric value.
    */
    U1: IfcParameterValue
    /** First v parametric value.
    */
    V1: IfcParameterValue
    /** Second u parametric value.
    */
    U2: IfcParameterValue
    /** Second v parametric value.
    */
    V2: IfcParameterValue
    /** Flag to indicate whether the direction of the first parameter of the trimmed surface agrees with or opposes the sense of u in the basis surface.
    */
    Usense: boolean
    /** Flag to indicate whether the direction of the second parameter of the trimmed surface agrees with or opposes the sense of v in the basis surface.
    */
    Vsense: boolean
}

export default IfcRectangularTrimmedSurface
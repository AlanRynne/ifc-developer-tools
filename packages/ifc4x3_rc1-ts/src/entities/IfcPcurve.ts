// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPcurve

import { IfcSurface, IfcCurve } from './'

/** The IfcPcurve is a curve defined within the parameter space of its reference surface.
 */
 class IfcPcurve extends IfcCurve {
    constructor(BasisSurface:IfcSurface, ReferenceCurve:IfcCurve) {
        super()
        this.BasisSurface = BasisSurface
        this.ReferenceCurve = ReferenceCurve
    }
    /** 
    */
    BasisSurface: IfcSurface
    /** 
    */
    ReferenceCurve: IfcCurve
}

export default IfcPcurve
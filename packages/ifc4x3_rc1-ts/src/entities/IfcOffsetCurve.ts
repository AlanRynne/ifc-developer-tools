// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcOffsetCurve

import { IfcCurve } from './'

/** 
 */
abstract class IfcOffsetCurve extends IfcCurve {
    constructor(BasisCurve:IfcCurve) {
        super()
        this.BasisCurve = BasisCurve
    }
    /** The curve that is being offset.
    */
    BasisCurve: IfcCurve
}

export default IfcOffsetCurve
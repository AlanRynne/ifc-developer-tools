// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcDerivedUnitElement

import { IfcNamedUnit } from './'

/** 
 */
 class IfcDerivedUnitElement  {
    constructor(Unit:IfcNamedUnit, Exponent:number) {

        this.Unit = Unit
        this.Exponent = Exponent
    }
    /** The fixed quantity which is used as the mathematical factor.
    */
    Unit: IfcNamedUnit
    /** The power that is applied to the unit attribute.
    */
    Exponent: number
}

export default IfcDerivedUnitElement
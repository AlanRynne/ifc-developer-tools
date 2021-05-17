// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcNamedUnit

import { IfcDimensionalExponents } from './'
import { IfcUnitEnum } from '../types'

/** 
 */
abstract class IfcNamedUnit  {
    constructor(Dimensions:IfcDimensionalExponents, UnitType:IfcUnitEnum) {

        this.Dimensions = Dimensions
        this.UnitType = UnitType
    }
    /** The dimensional exponents of the SI base units by which the named unit is defined.
    */
    Dimensions: IfcDimensionalExponents
    /** The type of the unit.
    */
    UnitType: IfcUnitEnum
}

export default IfcNamedUnit
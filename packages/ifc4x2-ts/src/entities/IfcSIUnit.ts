// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSIUnit

import { IfcSIPrefix, IfcSIUnitName, IfcUnitEnum } from '../types'
import { IfcDimensionalExponents, IfcNamedUnit } from './'

/** The IfcSIUnit covers both standard base SI units such as meter and second, and derived SI units such as Pascal, square meter and cubic meter.
 */
 class IfcSIUnit extends IfcNamedUnit {
    constructor(Dimensions:IfcDimensionalExponents, UnitType:IfcUnitEnum, Prefix:IfcSIPrefix, Name:IfcSIUnitName) {
        super(Dimensions, UnitType)
        this.Prefix = Prefix
        this.Name = Name
    }
    /** The SI Prefix for defining decimal multiples and submultiples of the unit.
    */
    Prefix?: IfcSIPrefix
    /** The word, or group of words, by which the SI unit is referred to.
     * Even though the SI system's base unit for mass is kilogram, the IfcSIUnit for mass is gram if no Prefix is asserted.
    */
    Name: IfcSIUnitName
}

export default IfcSIUnit
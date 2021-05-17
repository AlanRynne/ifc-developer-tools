// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcConversionBasedUnitWithOffset

import { IfcReal, IfcUnitEnum, IfcLabel } from '../types'
import { IfcDimensionalExponents, IfcMeasureWithUnit, IfcConversionBasedUnit } from './'

/** IfcConversionBasedUnitWithOffset is a unit which is converted from another unit by applying a conversion factor and an offset
 *
 * Example: The temperature unit Fahrenheit is based on the temperature unit Kelvin as follows:wherein k is an absolute temperature expressed in Kelvin and f is the same temperature in Fahrenheit.
 *
 * The following entity instances provide Fahrenheit as a unit:
 */
 class IfcConversionBasedUnitWithOffset extends IfcConversionBasedUnit {
    constructor(Dimensions:IfcDimensionalExponents, UnitType:IfcUnitEnum, Name:IfcLabel, ConversionFactor:IfcMeasureWithUnit, ConversionOffset:IfcReal) {
        super(Dimensions, UnitType, Name, ConversionFactor)
        this.ConversionOffset = ConversionOffset
    }
    /** A positive or negative offset to add after the inherited ConversionFactor was applied.
    */
    ConversionOffset: IfcReal
}

export default IfcConversionBasedUnitWithOffset
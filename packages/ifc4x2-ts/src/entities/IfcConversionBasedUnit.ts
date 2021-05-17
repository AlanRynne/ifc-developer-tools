// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcConversionBasedUnit

import { IfcLabel, IfcUnitEnum } from '../types'
import { IfcMeasureWithUnit, IfcDimensionalExponents, IfcNamedUnit } from './'

/** An IfcConversionBasedUnit is used to define a unit that has a conversion rate to a base unit.
 *
 * To identify some commonly used conversion based units, the standard designations (case insensitive) for the Name attribute are indicated in Table 697.
 */
 class IfcConversionBasedUnit extends IfcNamedUnit {
    constructor(Dimensions:IfcDimensionalExponents, UnitType:IfcUnitEnum, Name:IfcLabel, ConversionFactor:IfcMeasureWithUnit) {
        super(Dimensions, UnitType)
        this.Name = Name
        this.ConversionFactor = ConversionFactor
    }
    /** The word, or group of words, by which the conversion based unit is referred to.
    */
    Name: IfcLabel
    /** The physical quantity from which the converted unit is derived.
    */
    ConversionFactor: IfcMeasureWithUnit
}

export default IfcConversionBasedUnit
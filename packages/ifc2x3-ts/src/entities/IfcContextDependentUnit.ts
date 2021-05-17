// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcContextDependentUnit

import { IfcLabel, IfcUnitEnum } from '../types'
import { IfcDimensionalExponents, IfcNamedUnit } from './'

/** 
 */
 class IfcContextDependentUnit extends IfcNamedUnit {
    constructor(Dimensions:IfcDimensionalExponents, UnitType:IfcUnitEnum, Name:IfcLabel) {
        super(Dimensions, UnitType)
        this.Name = Name
    }
    /** The word, or group of words, by which the context dependent unit is referred to.
    */
    Name: IfcLabel
}

export default IfcContextDependentUnit
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcDerivedUnit

import { IfcDerivedUnitElement } from './'
import { IfcDerivedUnitEnum, IfcLabel } from '../types'

/** 
 */
 class IfcDerivedUnit  {
    constructor(Elements:Array<IfcDerivedUnitElement>, UnitType:IfcDerivedUnitEnum, UserDefinedType:IfcLabel) {

        this.Elements = Elements
        this.UnitType = UnitType
        this.UserDefinedType = UserDefinedType
    }
    /** The group of units and their exponents that define the derived unit.
    */
    Elements: Array<IfcDerivedUnitElement>
    /** Name of the derived unit chosen from an enumeration of derived unit types for use in IFC models.
    */
    UnitType: IfcDerivedUnitEnum
    /** 
    */
    UserDefinedType?: IfcLabel
}

export default IfcDerivedUnit
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcMeasureWithUnit

import { IfcValue, IfcUnit } from '../types'

/** IfcMeasureWithUnit has two usages: 1.
 *
 * For representing measure value together with its unit on the entity type attribute level; thus overriding the IFC model global unit assignments.
 *
 * 2. For conversion based unit to give the conversion rate and its base.
 */
 class IfcMeasureWithUnit  {
    constructor(ValueComponent:IfcValue, UnitComponent:IfcUnit) {

        this.ValueComponent = ValueComponent
        this.UnitComponent = UnitComponent
    }
    /** The value of the physical quantity when expressed in the specified units.
    */
    ValueComponent: IfcValue
    /** The unit in which the physical quantity is expressed.
    */
    UnitComponent: IfcUnit
}

export default IfcMeasureWithUnit
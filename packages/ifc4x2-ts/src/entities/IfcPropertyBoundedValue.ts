// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPropertyBoundedValue

import { IfcValue, IfcUnit, IfcIdentifier, IfcText } from '../types'
import { IfcSimpleProperty } from './'

/** A property with a bounded value, IfcPropertyBoundedValue, defines a property object which has a maximum of two (numeric or descriptive) values assigned, the first value specifying the upper bound and the second value specifying the lower bound.
 *
 * It defines a property - value bound (min-max) combination for which the property Name, an optional Description, the optional UpperBoundValue with measure type, the optional LowerBoundValue with measure type, and the optional Unit is given.
 *
 * A set point value can be provided in addition to the upper and lower bound values for operational value setting.
 *
 * The unit is handled by the Unit attribute, see Table 699 for an example of a bounded property: The IfcPropertyBoundedValue allows for the specification of an interval for the value component of the property description.
 *
 * If either the LowerBoundValue or the UpperBoundValue is not given, then it indicates an open bound (either a minimum value or a maximum value).
 *
 * The interval is by definition inclusive, that is, the value given for the LowerBoundValue or the UpperBoundValue is included in the interval.
 *
 * Informal Propositions:
 */
 class IfcPropertyBoundedValue extends IfcSimpleProperty {
    constructor(Name:IfcIdentifier, Description:IfcText, UpperBoundValue:IfcValue, LowerBoundValue:IfcValue, Unit:IfcUnit, SetPointValue:IfcValue) {
        super(Name, Description)
        this.UpperBoundValue = UpperBoundValue
        this.LowerBoundValue = LowerBoundValue
        this.Unit = Unit
        this.SetPointValue = SetPointValue
    }
    /** Upper bound value for the interval defining the property value.
     * If the value is not given, it indicates an open bound (all values to be greater than or equal to LowerBoundValue).
    */
    UpperBoundValue?: IfcValue
    /** Lower bound value for the interval defining the property value.
     * If the value is not given, it indicates an open bound (all values to be lower than or equal to UpperBoundValue).
    */
    LowerBoundValue?: IfcValue
    /** Unit for the upper and lower bound values, if not given, the default value for the measure type is used as defined by the global unit assignment at IfcProject.UnitInContext.
     * The applicable unit is then selected by the underlying TYPE of the UpperBoundValue, LowerBoundValue, and SetPointValue)
    */
    Unit?: IfcUnit
    /** Set point value as typically used for operational value setting.
     * IFC4 CHANGE The attribute has been added at the end of the attribute list.
    */
    SetPointValue?: IfcValue
}

export default IfcPropertyBoundedValue
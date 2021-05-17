// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPropertyListValue

import { IfcValue, IfcUnit, IfcIdentifier, IfcText } from '../types'
import { IfcSimpleProperty } from './'

/** An IfcPropertyListValue defines a property that has several (numeric or descriptive) values assigned, these values are given by an ordered list.
 *
 * It defines a property - list value combination for which the property Name, an optional Description, the optional ListValues with measure type and optionally an Unit is given.
 *
 * An IfcPropertyListValue is a list of values.
 *
 * The order in which values appear is significant.
 *
 * All list members shall be of the same type.
 *
 * The unit is handled by the Unit attribute, see Table 703 for an example of a list property:
 */
 class IfcPropertyListValue extends IfcSimpleProperty {
    constructor(Name:IfcIdentifier, Description:IfcText, ListValues:Array<IfcValue>, Unit:IfcUnit) {
        super(Name, Description)
        this.ListValues = ListValues
        this.Unit = Unit
    }
    /** List of property values.
     * IFC4 CHANGE The attribute has been made optional with upward compatibility for file based exchange.
    */
    ListValues: Array<IfcValue>
    /** Unit for the list values, if not given, the default value for the measure type (given by the TYPE of nominal value) is used as defined by the global unit assignment at IfcProject.
    */
    Unit?: IfcUnit
}

export default IfcPropertyListValue
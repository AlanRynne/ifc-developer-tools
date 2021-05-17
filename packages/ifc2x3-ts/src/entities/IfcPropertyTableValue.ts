// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPropertyTableValue

import { IfcValue, IfcText, IfcUnit, IfcIdentifier } from '../types'
import { IfcSimpleProperty } from './'

/** IfcPropertyTableValue is a property with a value range defined by a property object which has two lists of (numeric or descriptive) values assigned.
 *
 * The values specify a table with two columns.
 *
 * The defining values provide the first column and establish the scope for the defined values (the second column).
 *
 * An optional Expression attribute may give the equation used for deriving the range value, which is for information purposes only.
 *
 * The IfcPropertyTableValue defines a defining/defined property value combination for which the property name, the table with defining and defined values with measure type (and optional the units for defining and defined values) are given.
 *
 * The units are handled by the DefiningUnit and DefinedUnit attributes, see Table 705 for an example of a table value property: The IfcPropertyTableValue allows for the specification of a table of defining/defined value pairs of the property description.
 *
 * The optional attribute CurveInterpolation allows to determine the interval between two given values.
 *
 * Informal Propositions:
 */
 class IfcPropertyTableValue extends IfcSimpleProperty {
    constructor(Name:IfcIdentifier, Description:IfcText, DefiningValues:Array<IfcValue>, DefinedValues:Array<IfcValue>, Expression:IfcText, DefiningUnit:IfcUnit, DefinedUnit:IfcUnit) {
        super(Name, Description)
        this.DefiningValues = DefiningValues
        this.DefinedValues = DefinedValues
        this.Expression = Expression
        this.DefiningUnit = DefiningUnit
        this.DefinedUnit = DefinedUnit
    }
    /** List of defining values, which determine the defined values.
     * This list shall have unique values only.
     * IFC4 CHANGE The attribute has been made optional with upward compatibility for file based exchange.
    */
    DefiningValues: Array<IfcValue>
    /** Defined values which are applicable for the scope as defined by the defining values.
     * IFC4 CHANGE The attribute has been made optional with upward compatibility for file based exchange.
    */
    DefinedValues: Array<IfcValue>
    /** Expression for the derivation of defined values from the defining values, the expression is given for information only, i.e. no automatic processing can be expected from the expression.
    */
    Expression?: IfcText
    /** Unit for the defining values, if not given, the default value for the measure type (given by the TYPE of the defining values) is used as defined by the global unit assignment at IfcProject.
    */
    DefiningUnit?: IfcUnit
    /** Unit for the defined values, if not given, the default value for the measure type (given by the TYPE of the defined values) is used as defined by the global unit assignment at IfcProject.
    */
    DefinedUnit?: IfcUnit
}

export default IfcPropertyTableValue
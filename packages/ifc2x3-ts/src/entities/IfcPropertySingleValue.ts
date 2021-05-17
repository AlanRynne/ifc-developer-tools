// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPropertySingleValue

import { IfcValue, IfcUnit, IfcIdentifier, IfcText } from '../types'
import { IfcSimpleProperty } from './'

/** The property with a single value IfcPropertySingleValue defines a property object which has a single (numeric or descriptive) value assigned.
 *
 * It defines a property - single value combination for which the property Name, an optional Description, and an optional NominalValue with measure type is provided.
 *
 * In addition, the default unit as specified within the project unit context can be overriden by assigning an Unit
 *
 * The unit is handled by the Unit attribute, see Table 704 for an example of various single value properties:
 */
 class IfcPropertySingleValue extends IfcSimpleProperty {
    constructor(Name:IfcIdentifier, Description:IfcText, NominalValue:IfcValue, Unit:IfcUnit) {
        super(Name, Description)
        this.NominalValue = NominalValue
        this.Unit = Unit
    }
    /** Value and measure type of this property.
     * By virtue of the defined data type, that is selected from the SELECT IfcValue, the appropriate unit can be found within the IfcUnitAssignment, defined for the project if no value for the unit attribute is given.
     * IFC2x3 CHANGE The attribute has been made optional with upward compatibility for file based exchange.
    */
    NominalValue?: IfcValue
    /** Unit for the nominal value, if not given, the default value for the measure type (given by the TYPE of nominal value) is used as defined by the global unit assignment at IfcProject.
    */
    Unit?: IfcUnit
}

export default IfcPropertySingleValue
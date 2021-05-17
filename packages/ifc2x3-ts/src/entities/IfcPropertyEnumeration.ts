// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPropertyEnumeration

import { IfcLabel, IfcValue, IfcUnit } from '../types'

/** IfcPropertyEnumeration is a collection of simple or measure values that define a prescribed set of alternatives from which 'enumeration values' are selected.
 *
 * This enables inclusion of enumeration values in property sets.
 *
 * IfcPropertyEnumeration provides a name for the enumeration as well as a list of unique (numeric or descriptive) values (that may have a measure type assigned).
 *
 * The entity defines the list of potential enumerators to be exchanged together (or separately) with properties of type IfcPropertyEnumeratedValue that selects their actual property values from this enumeration.
 *
 * The unit is handled by the Unit attribute, see Table 702 for an example of a unitless property enumeration:
 */
 class IfcPropertyEnumeration  {
    constructor(Name:IfcLabel, EnumerationValues:Array<IfcValue>, Unit:IfcUnit) {

        this.Name = Name
        this.EnumerationValues = EnumerationValues
        this.Unit = Unit
    }
    /** Name of this enumeration.
    */
    Name: IfcLabel
    /** List of values that form the enumeration.
    */
    EnumerationValues: Array<IfcValue>
    /** Unit for the enumerator values, if not given, the default value for the measure type (given by the TYPE of nominal value) is used as defined by the global unit assignment at IfcProject.
    */
    Unit?: IfcUnit
}

export default IfcPropertyEnumeration
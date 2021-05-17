// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPropertyEnumeratedValue

import { IfcValue, IfcIdentifier, IfcText } from '../types'
import { IfcPropertyEnumeration, IfcSimpleProperty } from './'

/** A property with an enumerated value, IfcPropertyEnumeratedValue, defines a property object which has a value assigned that is chosen from an enumeration.
 *
 * It defines a property - value combination for which the property Name, an optional Description, the optional EnumerationValues with measure type and optionally an Unit is given
 *
 * The unit is handled by the Unit attribute, see Table 701 for an example of a enumerated property:More precisely: The IfcPropertyEnumeratedValue defines a property, which value is selected from a defined list of enumerators.
 *
 * The enumerators are stored in a dynamic enumeration of values including the type information from IfcValue (see IfcPropertyEnumeration).
 *
 * This enables applications to use an enumeration value as a property within a property set (IfcPropertySet) including the allowed list of values.
 *
 * The IfcPropertyEnumeratedValue refers to an IfcPropertyEnumeration, see Table 702 for an example:It is not mandatory to use an instance of IfcPropertyEnumeration to hold the applicable values for IfcPropertyEnumeratedValue, however this is the preferred way.
 *
 * A single instance of IfcPropertyEnumeration can be referenced by multiple instances of IfcPropertyEnumeratedValue.
 */
 class IfcPropertyEnumeratedValue extends IfcSimpleProperty {
    constructor(Name:IfcIdentifier, Description:IfcText, EnumerationValues:Array<IfcValue>, EnumerationReference:IfcPropertyEnumeration) {
        super(Name, Description)
        this.EnumerationValues = EnumerationValues
        this.EnumerationReference = EnumerationReference
    }
    /** Enumeration values, which shall be listed in the referenced IfcPropertyEnumeration, if such a reference is provided.
     * IFC4 CHANGE The attribute has been made optional with upward compatibility for file based exchange.
    */
    EnumerationValues: Array<IfcValue>
    /** Enumeration from which a enumeration value has been selected.
     * The referenced enumeration also establishes the unit of the enumeration value.
    */
    EnumerationReference?: IfcPropertyEnumeration
}

export default IfcPropertyEnumeratedValue
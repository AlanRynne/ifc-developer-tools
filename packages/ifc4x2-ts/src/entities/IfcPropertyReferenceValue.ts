// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPropertyReferenceValue

import { IfcText, IfcObjectReferenceSelect, IfcIdentifier } from '../types'
import { IfcSimpleProperty } from './'

/** The IfcPropertyReferenceValue allows a property value to be of type of an resource level entity.
 *
 * The applicable entities that can be used as value references are given by the IfcObjectReferenceSelect.
 */
 class IfcPropertyReferenceValue extends IfcSimpleProperty {
    constructor(Name:IfcIdentifier, Description:IfcText, UsageName:IfcText, PropertyReference:IfcObjectReferenceSelect) {
        super(Name, Description)
        this.UsageName = UsageName
        this.PropertyReference = PropertyReference
    }
    /** Description of the use of the referenced value within the property.
     * It is a descriptive text that may hold an expression or other additional information.
    */
    UsageName?: IfcText
    /** Reference to another property entity through one of the select types in the IfcObjectReferenceSelect.
     * IFC4 CHANGE The attribute has been made optional with upward compatibility for file based exchange.
    */
    PropertyReference?: IfcObjectReferenceSelect
}

export default IfcPropertyReferenceValue
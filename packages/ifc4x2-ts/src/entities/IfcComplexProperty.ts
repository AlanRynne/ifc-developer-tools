// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcComplexProperty

import { IfcIdentifier, IfcText } from '../types'
import { IfcProperty } from './'

/** IfcComplexProperty is used to define complex properties to be handled completely within a property set.
 *
 * The included set of properties may be a mixed or consistent collection of IfcProperty subtypes.
 *
 * This enables the definition of a set of properties to be included as a single 'property' entry in an IfcPropertySet.
 *
 * The definition of such an IfcComplexProperty can be reused in many different IfcPropertySet's.
 */
 class IfcComplexProperty extends IfcProperty {
    constructor(Name:IfcIdentifier, Description:IfcText, UsageName:IfcIdentifier, HasProperties:Array<IfcProperty>) {
        super(Name, Description)
        this.UsageName = UsageName
        this.HasProperties = HasProperties
    }
    /** Usage description of the IfcComplexProperty within the property set which references the IfcComplexProperty.
     * Consider a complex property for glazing properties.
     * The Name attribute of the IfcComplexProperty could be Pset_GlazingProperties, and the UsageName attribute could be OuterGlazingPane.
    */
    UsageName: IfcIdentifier
    /** Set of properties that can be used within this complex property (may include other complex properties).
    */
    HasProperties: Array<IfcProperty>
}

export default IfcComplexProperty
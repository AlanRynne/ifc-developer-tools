// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcProperty

import { IfcIdentifier, IfcText } from '../types'

/** IfcProperty is an abstract generalization for all types of properties that can be associated with IFC objects through the property set mechanism.
 */
abstract class IfcProperty  {
    constructor(Name:IfcIdentifier, Description:IfcText) {

        this.Name = Name
        this.Description = Description
    }
    /** Name for this property.
     * This label is the significant name string that defines the semantic meaning for the property.
    */
    Name: IfcIdentifier
    /** Informative text to explain the property.
    */
    Description?: IfcText
}

export default IfcProperty
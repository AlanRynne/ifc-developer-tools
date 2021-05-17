// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcColourSpecification

import { IfcLabel } from '../types'

/** 
 */
abstract class IfcColourSpecification  {
    constructor(Name:IfcLabel) {

        this.Name = Name
    }
    /** Optional name given to a particular colour specification in addition to the colour components (like the RGB values).
     * EXAMPLE Names of a industry colour classification, such as RAL.
     * IFC2x3 CHANGE Attribute added.
    */
    Name?: IfcLabel
}

export default IfcColourSpecification
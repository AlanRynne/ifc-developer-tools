// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPhysicalQuantity

import { IfcLabel, IfcText } from '../types'

/** The physical quantity, IfcPhysicalQuantity, is an abstract entity that holds a complex or simple quantity measure together with a semantic definition of the usage for the single or several measure value
 *
 * The Name attribute defines the actual usage or kind of measure.
 *
 * The interpretation of the name label has to be established within the actual exchange context.
 *
 * In addition an informative text may be associated to each quantity by the Description attribute.
 */
abstract class IfcPhysicalQuantity  {
    constructor(Name:IfcLabel, Description:IfcText) {

        this.Name = Name
        this.Description = Description
    }
    /** Name of the element quantity or measure.
     * The name attribute has to be made recognizable by further agreements.
    */
    Name: IfcLabel
    /** Further explanation that might be given to the quantity.
    */
    Description?: IfcText
}

export default IfcPhysicalQuantity
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPreDefinedItem

import { IfcLabel } from '../types'
import { IfcPresentationItem } from './'

/** A pre defined item is a qualified name given to a style or font which is determined within the data exchange specification by convention on using the Name attribute value (in contrary to externally defined items, which are agreed by an external source).
 */
abstract class IfcPreDefinedItem extends IfcPresentationItem {
    constructor(Name:IfcLabel) {
        super()
        this.Name = Name
    }
    /** The string by which the pre defined item is identified.
     * Allowable values for the string are declared at the level of subtypes.
    */
    Name: IfcLabel
}

export default IfcPreDefinedItem
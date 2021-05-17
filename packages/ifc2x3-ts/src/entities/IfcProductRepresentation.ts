// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcProductRepresentation

import { IfcLabel, IfcText } from '../types'
import { IfcRepresentation } from './'

/** IfcProductRepresentation defines a representation of a product, including its (geometric or topological) representation.
 *
 * A product can have zero, one or many geometric representations, and a single geometric representation can be shared among various products using mapped representations.
 */
 class IfcProductRepresentation  {
    constructor(Name:IfcLabel, Description:IfcText, Representations:Array<IfcRepresentation>) {

        this.Name = Name
        this.Description = Description
        this.Representations = Representations
    }
    /** The word or group of words by which the product representation is known.
    */
    Name?: IfcLabel
    /** The word or group of words that characterize the product representation.
     * It can be used to add additional meaning to the name of the product representation.
    */
    Description?: IfcText
    /** Contained list of representations (including shape representations).
     * Each member defines a valid representation of a particular type within a particular representation context.
    */
    Representations: Array<IfcRepresentation>
}

export default IfcProductRepresentation
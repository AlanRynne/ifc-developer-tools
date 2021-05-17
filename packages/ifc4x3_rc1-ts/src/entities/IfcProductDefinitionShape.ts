// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcProductDefinitionShape

import { IfcLabel, IfcText } from '../types'
import { IfcRepresentation, IfcProductRepresentation } from './'

/** The IfcProductDefinitionShape defines all shape relevant information about an IfcProduct.
 *
 * It allows for multiple geometric shape representations of the same product.
 *
 * The shape relevant information includes:
 */
 class IfcProductDefinitionShape extends IfcProductRepresentation {
    constructor(Name:IfcLabel, Description:IfcText, Representations:Array<IfcRepresentation>) {
        super(Name, Description, Representations)

    }

}

export default IfcProductDefinitionShape
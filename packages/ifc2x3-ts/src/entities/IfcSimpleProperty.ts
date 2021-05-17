// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSimpleProperty

import { IfcIdentifier, IfcText } from '../types'
import { IfcProperty } from './'

/** IfcSimpleProperty is a generalization of a single property object.
 *
 * The various subtypes of IfcSimpleProperty establish different ways in which a property value can be set.
 */
abstract class IfcSimpleProperty extends IfcProperty {
    constructor(Name:IfcIdentifier, Description:IfcText) {
        super(Name, Description)

    }

}

export default IfcSimpleProperty
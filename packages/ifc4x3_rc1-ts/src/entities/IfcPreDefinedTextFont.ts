// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPreDefinedTextFont

import { IfcLabel } from '../types'
import { IfcPreDefinedItem } from './'

/** The pre defined text font determines those qualified names which can be used for fonts that are in scope of the current data exchange specification (in contrary to externally defined text fonts).
 *
 * There are two choices:
 */
abstract class IfcPreDefinedTextFont extends IfcPreDefinedItem {
    constructor(Name:IfcLabel) {
        super(Name)

    }

}

export default IfcPreDefinedTextFont
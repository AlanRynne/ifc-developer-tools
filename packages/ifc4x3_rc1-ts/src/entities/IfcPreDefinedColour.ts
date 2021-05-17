// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPreDefinedColour

import { IfcLabel } from '../types'
import { IfcPreDefinedItem } from './'

/** The pre defined colour determines those qualified names which can be used to identify a colour that is in scope of the current data exchange specification (in contrary to colour specification which defines the colour directly by its colour components).
 */
abstract class IfcPreDefinedColour extends IfcPreDefinedItem {
    constructor(Name:IfcLabel) {
        super(Name)

    }

}

export default IfcPreDefinedColour
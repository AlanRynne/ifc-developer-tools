// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcDraughtingPreDefinedColour

import { IfcLabel } from '../types'
import { IfcPreDefinedColour } from './'

/** The draughting pre defined colour is a pre defined colour for the purpose to identify a colour by name.
 *
 * Allowable names are:The following table states the RGB values associated with the names given by the IfcDraughtingPreDefinedColour
 *
 * Informal Propositions:
 */
 class IfcDraughtingPreDefinedColour extends IfcPreDefinedColour {
    constructor(Name:IfcLabel) {
        super(Name)

    }

}

export default IfcDraughtingPreDefinedColour
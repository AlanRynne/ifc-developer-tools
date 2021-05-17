// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTextureVertex

import { IfcParameterValue } from '../types'

/** An IfcTextureVertex is a list of 2 (S, T) texture coordinates.
 */
 class IfcTextureVertex  {
    constructor(Coordinates:Array<IfcParameterValue>) {

        this.Coordinates = Coordinates
    }
    /** The first Coordinate[1] is the S, the second Coordinate[2] is the T parameter value.
    */
    Coordinates: Array<IfcParameterValue>
}

export default IfcTextureVertex
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcFaceOuterBound

import { IfcLoop, IfcFaceBound } from './'
import { IfcBoolean } from '../types'

/** 
 */
 class IfcFaceOuterBound extends IfcFaceBound {
    constructor(Bound:IfcLoop, Orientation:IfcBoolean) {
        super(Bound, Orientation)

    }

}

export default IfcFaceOuterBound
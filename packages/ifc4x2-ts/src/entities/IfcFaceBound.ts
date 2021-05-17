// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcFaceBound

import { IfcLoop, IfcTopologicalRepresentationItem } from './'
import { IfcBoolean } from '../types'

/** 
 */
 class IfcFaceBound extends IfcTopologicalRepresentationItem {
    constructor(Bound:IfcLoop, Orientation:IfcBoolean) {
        super()
        this.Bound = Bound
        this.Orientation = Orientation
    }
    /** The loop which will be used as a face boundary.
    */
    Bound: IfcLoop
    /** This indicated whether (TRUE) or not (FALSE) the loop has the same sense when used to bound the face as when first defined.
     * If sense is FALSE the senses of all its component oriented edges are implicitly reversed when used in the face.
    */
    Orientation: IfcBoolean
}

export default IfcFaceBound
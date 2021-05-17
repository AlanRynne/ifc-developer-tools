// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcVertexLoop

import { IfcVertex, IfcLoop } from './'

/** Informal Propositions:
 */
 class IfcVertexLoop extends IfcLoop {
    constructor(LoopVertex:IfcVertex) {
        super()
        this.LoopVertex = LoopVertex
    }
    /** The vertex which defines the entire loop.
    */
    LoopVertex: IfcVertex
}

export default IfcVertexLoop
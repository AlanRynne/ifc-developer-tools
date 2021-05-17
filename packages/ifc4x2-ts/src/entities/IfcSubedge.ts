// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSubedge

import { IfcEdge, IfcVertex } from './'

/** Informal Propositions:
 */
 class IfcSubedge extends IfcEdge {
    constructor(EdgeStart:IfcVertex, EdgeEnd:IfcVertex, ParentEdge:IfcEdge) {
        super(EdgeStart, EdgeEnd)
        this.ParentEdge = ParentEdge
    }
    /** The Edge, or Subedge, which contains the Subedge.
    */
    ParentEdge: IfcEdge
}

export default IfcSubedge
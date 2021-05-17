// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcEdgeLoop

import { IfcOrientedEdge, IfcLoop } from './'

/** Informal Propositions:
 */
 class IfcEdgeLoop extends IfcLoop {
    constructor(EdgeList:Array<IfcOrientedEdge>) {
        super()
        this.EdgeList = EdgeList
    }
    /** A list of oriented edge entities which are concatenated together to form this path.
    */
    EdgeList: Array<IfcOrientedEdge>
}

export default IfcEdgeLoop
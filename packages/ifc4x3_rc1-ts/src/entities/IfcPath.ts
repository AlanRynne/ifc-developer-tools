// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPath

import { IfcOrientedEdge, IfcTopologicalRepresentationItem } from './'

/** Informal Propositions:
 */
 class IfcPath extends IfcTopologicalRepresentationItem {
    constructor(EdgeList:Array<IfcOrientedEdge>) {
        super()
        this.EdgeList = EdgeList
    }
    /** The list of oriented edges which are concatenated together to form this path.
    */
    EdgeList: Array<IfcOrientedEdge>
}

export default IfcPath
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcVertexPoint

import { IfcPoint, IfcVertex } from './'

/** Informal Propositions:
 */
 class IfcVertexPoint extends IfcVertex {
    constructor(VertexGeometry:IfcPoint) {
        super()
        this.VertexGeometry = VertexGeometry
    }
    /** The geometric point, which defines the position in geometric space of the vertex.
    */
    VertexGeometry: IfcPoint
}

export default IfcVertexPoint
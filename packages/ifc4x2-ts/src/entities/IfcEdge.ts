// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcEdge

import { IfcVertex, IfcTopologicalRepresentationItem } from './'

/** An IfcEdge defines two vertices being connected topologically.
 *
 * The geometric representation of the connection between the two vertices defaults to a straight line if no curve geometry is assigned using the subtype IfcEdgeCurve.
 *
 * The IfcEdge can therefore be used to exchange straight edges without an associated geometry provided by IfcLine or IfcPolyline thought IfcEdgeCurve.EdgeGeometry.
 *
 * Informal Propositions:
 */
 class IfcEdge extends IfcTopologicalRepresentationItem {
    constructor(EdgeStart:IfcVertex, EdgeEnd:IfcVertex) {
        super()
        this.EdgeStart = EdgeStart
        this.EdgeEnd = EdgeEnd
    }
    /** Start point (vertex) of the edge.
    */
    EdgeStart: IfcVertex
    /** End point (vertex) of the edge.
     * The same vertex can be used for both EdgeStart and EdgeEnd.
    */
    EdgeEnd: IfcVertex
}

export default IfcEdge
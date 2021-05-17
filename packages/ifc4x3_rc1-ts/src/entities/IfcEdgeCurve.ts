// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcEdgeCurve

import { IfcCurve, IfcVertex, IfcEdge } from './'
import { IfcBoolean } from '../types'

/** An IfcEdgeCurve defines two vertices being connected topologically including the geometric representation of the connection.
 *
 * Informal Propositions:
 */
 class IfcEdgeCurve extends IfcEdge {
    constructor(EdgeStart:IfcVertex, EdgeEnd:IfcVertex, EdgeGeometry:IfcCurve, SameSense:IfcBoolean) {
        super(EdgeStart, EdgeEnd)
        this.EdgeGeometry = EdgeGeometry
        this.SameSense = SameSense
    }
    /** The curve which defines the shape and spatial location of the edge.
     * This curve may be unbounded and is implicitly trimmed by the vertices of the edge; this defines the edge domain.
     * Multiple edges can reference the same curve.
    */
    EdgeGeometry: IfcCurve
    /** This logical flag indicates whether (TRUE), or not (FALSE) the senses of the edge and the curve defining the edge geometry are the same.
     * The sense of an edge is from the edge start vertex to the edge end vertex; the sense of a curve is in the direction of increasing parameter.
    */
    SameSense: IfcBoolean
}

export default IfcEdgeCurve
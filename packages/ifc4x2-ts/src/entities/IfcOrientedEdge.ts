// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcOrientedEdge

import { IfcEdge, IfcVertex } from './'
import { IfcBoolean } from '../types'

/** The IfcOrientedEdge represents an IfcEdge with an Orientation flag applied.
 *
 * It allows to reuse the same IfcEdge when traversed exactly twice, once forwards and once backwards
 *
 * The reused edge with a geometric representation as IfcEdgeCurve defines the edge in 3D coordinate space.
 *
 * In some cases, particularly when using elementary or swept surfaces, there is the risk of imprecise mapping of the 3D (x, y, z) IfcEdgeCurve onto the adjacent surfaces to determine the boundaries of these surfaces.
 *
 * The optional CurveOnSurface defines the 2D (u, v) edge within the parametric space of the surface.
 *
 * It could be used to determine the correctness of the mapping of the 3D IfcEdgeCurve onto this surface.
 */
 class IfcOrientedEdge extends IfcEdge {
    constructor(EdgeStart:IfcVertex, EdgeEnd:IfcVertex, EdgeElement:IfcEdge, Orientation:IfcBoolean) {
        super(EdgeStart, EdgeEnd)
        this.EdgeElement = EdgeElement
        this.Orientation = Orientation
    }
    /** Edge entity used to construct this oriented edge.
    */
    EdgeElement: IfcEdge
    /** BOOLEAN, If TRUE the topological orientation as used coincides with the orientation from start vertex to end vertex of the edge element.
     * If FALSE otherwise.
    */
    Orientation: IfcBoolean
}

export default IfcOrientedEdge
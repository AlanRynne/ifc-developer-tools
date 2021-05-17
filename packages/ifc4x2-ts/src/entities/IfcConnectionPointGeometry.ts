// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcConnectionPointGeometry

import { IfcPointOrVertexPoint } from '../types'
import { IfcConnectionGeometry } from './'

/** IfcConnectionPointGeometry is used to describe the geometric constraints that facilitate the physical connection of two objects at a point (here IfcCartesianPoint) or at an vertex with point coordinates associated.
 *
 * It is envisioned as a control that applies to the element connection relationships.
 *
 * The IfcPoint (or the IfcVertexPoint with an associated IfcPoint) at the PointOnRelatingElement attribute defines the point where the basic geometry items of the connected elements connect.
 *
 * The point coordinates are provided within the local coordinate system of the RelatingElement, as specified at the IfcRelConnectsSubtype that utilizes the IfcConnectionPointGeometry.
 *
 * Optionally, the same point coordinates can also be provided within the local coordinate system of the RelatedElement by using the PointOnRelatedElement attribute.
 *
 * If both point coordinates are not identical within a common parent coordinate system (ultimately within the world coordinate system), the subtype IfcConnectionPointEccentricity shall be used.
 */
 class IfcConnectionPointGeometry extends IfcConnectionGeometry {
    constructor(PointOnRelatingElement:IfcPointOrVertexPoint, PointOnRelatedElement:IfcPointOrVertexPoint) {
        super()
        this.PointOnRelatingElement = PointOnRelatingElement
        this.PointOnRelatedElement = PointOnRelatedElement
    }
    /** Point at which the connected object is aligned at the relating element, given in the LCS of the relating element.
    */
    PointOnRelatingElement: IfcPointOrVertexPoint
    /** Point at which connected objects are aligned at the related element, given in the LCS of the related element.
     * If the information is omitted, then the origin of the related element is used.
    */
    PointOnRelatedElement?: IfcPointOrVertexPoint
}

export default IfcConnectionPointGeometry
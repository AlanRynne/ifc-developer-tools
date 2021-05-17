// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcConnectionCurveGeometry

import { IfcCurveOrEdgeCurve } from '../types'
import { IfcConnectionGeometry } from './'

/** IfcConnectionCurveGeometry is used to describe the geometric constraints that facilitate the physical connection of two objects at a curve or at an edge with curve geometry associated.
 *
 * It is envisioned as a control that applies to the element connection relationships.
 *
 * The IfcCurve (or the IfcEdgeCurve with an associated IfcCurve) at the CurveOnRelatingElement attribute defines the curve where the basic geometry items of the connected elements connects.
 *
 * The curve geometry and coordinates are provided within the local coordinate system of the RelatingElement, as specified at the IfcRelConnects subtype that utilizes the IfcConnectionCurveGeometry.
 *
 * Optionally, the same curve geometry and coordinates can also be provided within the local coordinate system of the RelatedElement by using the CurveOnRelatedElement attribute.
 *
 * The available geometry for the connection constraint may be further restricted to only allow straight segments by applying IfcPolyline only.
 *
 * Such an usage constraint is provided at the object definition of the IfcElement subtype, utilizing the element connection by referring to the subtype of IfcRelConnects with the associated IfcConnectionCurveGeometry.
 */
 class IfcConnectionCurveGeometry extends IfcConnectionGeometry {
    constructor(CurveOnRelatingElement:IfcCurveOrEdgeCurve, CurveOnRelatedElement:IfcCurveOrEdgeCurve) {
        super()
        this.CurveOnRelatingElement = CurveOnRelatingElement
        this.CurveOnRelatedElement = CurveOnRelatedElement
    }
    /** The bounded curve at which the connected objects are aligned at the relating element, given in the LCS of the relating element.
    */
    CurveOnRelatingElement: IfcCurveOrEdgeCurve
    /** The bounded curve at which the connected objects are aligned at the related element, given in the LCS of the related element.
     * If the information is omitted, then the origin of the related element is used.
    */
    CurveOnRelatedElement?: IfcCurveOrEdgeCurve
}

export default IfcConnectionCurveGeometry
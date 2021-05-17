// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPolygonalBoundedHalfSpace

import { IfcAxis2Placement3D, IfcBoundedCurve, IfcSurface, IfcHalfSpaceSolid } from './'
import { IfcBoolean } from '../types'

/** The polygonal bounded half space is a special subtype of a half space solid, where the material of the half space used in Boolean expressions is bounded by a polygonal boundary.
 *
 * The base surface of the half space is positioned by its normal relative to the object coordinate system (as defined at the supertype IfcHalfSpaceSolid), and its polygonal (with or without arc segments) boundary is defined in the XY plane of the position coordinate system established by the Position attribute, the subtraction body is extruded perpendicular to the XY plane of the position coordinate system, that is, into the direction of the positive Z axis defined by the Position attribute
 *
 * The boundary is defined by a 2 dimensional polyline (or 2 dimensional composite curve, consisting of straight segments and circular arc segments) within the XY plane of the position coordinate system.
 *
 * The side of the surface which is in the half space is determined by the surface normal and the agreement flag.
 *
 * If the agreement flag is TRUE, then the subset is the one the normal points away from.
 *
 * If the agreement flag is FALSE, then the subset is the one the normal points into
 *
 * Figure 339 illustrates a polygonal bounded half space.
 *
 * The polygonal bounded half space is used to limit the volume of the half space in Boolean difference expressions.
 *
 * Only the part that is defined by a theoretical intersection between the half space solid and an extruded area solid, defined by extruding the polygonal boundary, is used for Boolean expressions.
 *
 * The PolygonalBoundary defines the 2D polyline which bounds the effectiveness of the half space in Boolean expressions.
 *
 * The BaseSurface is defined by a plane, and the normal of the plane together with the AgreementFlag defines the side of the material of the half space
 *
 * Informal Propositions:
 */
 class IfcPolygonalBoundedHalfSpace extends IfcHalfSpaceSolid {
    constructor(BaseSurface:IfcSurface, AgreementFlag:IfcBoolean, Position:IfcAxis2Placement3D, PolygonalBoundary:IfcBoundedCurve) {
        super(BaseSurface, AgreementFlag)
        this.Position = Position
        this.PolygonalBoundary = PolygonalBoundary
    }
    /** Definition of the position coordinate system for the bounding polyline and the base surface.
    */
    Position: IfcAxis2Placement3D
    /** Two-dimensional polyline bounded curve, defined in the xy plane of the position coordinate system.
     * IFC2x3 CHANGE The attribute type has been changed from IfcPolyline to its supertype IfcBoundedCurve with upward compatibility for file based exchange.
    */
    PolygonalBoundary: IfcBoundedCurve
}

export default IfcPolygonalBoundedHalfSpace
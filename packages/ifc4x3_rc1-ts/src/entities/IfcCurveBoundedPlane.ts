// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCurveBoundedPlane

import { IfcPlane, IfcCurve, IfcBoundedSurface } from './'

/** The IfcCurveBoundedPlane is a parametric planar surface with curved boundaries defined by one or more boundary curves.
 *
 * The bounded plane is defined to be the portion of the basis surface in the direction of N x T from any point on the boundary, where N is the surface normal and T the boundary curve tangent vector at this point.
 *
 * The region so defined shall be arcwise connected
 *
 * The BasisSurface is an IfcPlane that establishes the position coordinate system by SELF\IfcElementarySurface.Position.
 *
 * The OuterBoundary and the InnerBoundaries (if provided) shall lie on the surface of IfcPlane.
 *
 * The outer and inner boundary curves shall be defined using the u, and v values provided by parameterization of the BasisSurface as their x, and y coordinate values.
 */
 class IfcCurveBoundedPlane extends IfcBoundedSurface {
    constructor(BasisSurface:IfcPlane, OuterBoundary:IfcCurve, InnerBoundaries:Array<IfcCurve>) {
        super()
        this.BasisSurface = BasisSurface
        this.OuterBoundary = OuterBoundary
        this.InnerBoundaries = InnerBoundaries
    }
    /** The surface to be bound.
    */
    BasisSurface: IfcPlane
    /** The outer boundary of the surface.
    */
    OuterBoundary: IfcCurve
    /** An optional set of inner boundaries.
     * They shall not intersect each other or the outer boundary.
    */
    InnerBoundaries: Array<IfcCurve>
}

export default IfcCurveBoundedPlane
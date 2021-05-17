// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcToroidalSurface

import { IfcPositiveLengthMeasure } from '../types'
import { IfcAxis2Placement3D, IfcElementarySurface } from './'

/** The IfcToroidalSurface is a bounded elementary surface.
 *
 * It is constructed by completely revolving a circle around an axis line.
 *
 * The inherited Position attribute defines the IfcAxisPlacement3D and provides:σ(u,v) = C + (R + rcos v)((cosu)x + (sin u))y) + r(sinv))z where the parametrisation range is 0 ≤ u, v ≤ 360 degrees.
 *
 * u and v are angular parameters and when numerical values are specified they shall use the current units for plane angle measure
 *
 * In the placement coordinate system defined above, the surface is represented by the equation S = 0, where The positive direction of the normal to the surface at any point on the surface is given byThe unit normal is given by The sense of this normal is away from the nearest point on the circle of radius R with centre C. A manifold surface will be produced if the major radius is greater than the minor radius.
 *
 * If this condition is not fulfilled, the resulting surface will be self-intersecting.
 */
 class IfcToroidalSurface extends IfcElementarySurface {
    constructor(Position:IfcAxis2Placement3D, MajorRadius:IfcPositiveLengthMeasure, MinorRadius:IfcPositiveLengthMeasure) {
        super(Position)
        this.MajorRadius = MajorRadius
        this.MinorRadius = MinorRadius
    }
    /** The major radius of the torus.
    */
    MajorRadius: IfcPositiveLengthMeasure
    /** The minor radius of the torus.
    */
    MinorRadius: IfcPositiveLengthMeasure
}

export default IfcToroidalSurface
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPlane

import { IfcAxis2Placement3D, IfcElementarySurface } from './'

/** The planar surface is an unbounded surface in the direction of x and y. Bounded planar surfaces are defined by using a subtype of IfcBoundedSurface with BasisSurface being a plane
 *
 * The inherited attributes are interpreted as
 */
 class IfcPlane extends IfcElementarySurface {
    constructor(Position:IfcAxis2Placement3D) {
        super(Position)

    }

}

export default IfcPlane
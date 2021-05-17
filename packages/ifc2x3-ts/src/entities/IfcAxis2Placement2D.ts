// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcAxis2Placement2D

import { IfcDirection, IfcCartesianPoint, IfcPlacement } from './'

/** The IfcAxis2Placement2D provides location and orientation to place items in a two-dimensional space.
 *
 * The attribute RefDirection defines the x axis, the y axis is derived.
 *
 * If the attribute RefDirection is not given, the placement defaults to P[1] (x-axis) as [1.,0.] and P[2] (y-axis) as [0.,1.].
 */
 class IfcAxis2Placement2D extends IfcPlacement {
    constructor(Location:IfcCartesianPoint, RefDirection:IfcDirection) {
        super(Location)
        this.RefDirection = RefDirection
    }
    /** The direction used to determine the direction of the local X axis.
     * If a value is omited that it defaults to [1.0, 0.0.].
    */
    RefDirection?: IfcDirection
}

export default IfcAxis2Placement2D
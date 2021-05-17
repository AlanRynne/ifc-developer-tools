// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcAxis2Placement3D

import { IfcDirection, IfcCartesianPoint, IfcPlacement } from './'

/** The IfcAxis2Placement3D provides location and orientations to place items in a three-dimensional space.
 *
 * The attribute Axis defines the Z direction, RefDirection the X direction.
 *
 * The Y direction is derived.
 *
 * If the attribute values for Axis and RefDirection are not given, the placement defaults to P[1] (x-axis) as [1.,0.,0.], P[2] (y-axis) as [0.,1.,0.] and P[3] (z-axis) as [0.,0.,1.].
 */
 class IfcAxis2Placement3D extends IfcPlacement {
    constructor(Location:IfcCartesianPoint, Axis:IfcDirection, RefDirection:IfcDirection) {
        super(Location)
        this.Axis = Axis
        this.RefDirection = RefDirection
    }
    /** The exact direction of the local Z Axis.
    */
    Axis?: IfcDirection
    /** The direction used to determine the direction of the local X Axis.
     * If necessary an adjustment is made to maintain orthogonality to the Axis direction.
     * If Axis and/or RefDirection is omitted, these directions are taken from the geometric coordinate system.
    */
    RefDirection?: IfcDirection
}

export default IfcAxis2Placement3D
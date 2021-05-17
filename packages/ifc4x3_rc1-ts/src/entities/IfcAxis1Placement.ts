// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcAxis1Placement

import { IfcDirection, IfcCartesianPoint, IfcPlacement } from './'

/** The IfcAxis1Placement provides location and direction of a single axis.
 */
 class IfcAxis1Placement extends IfcPlacement {
    constructor(Location:IfcCartesianPoint, Axis:IfcDirection) {
        super(Location)
        this.Axis = Axis
    }
    /** The direction of the local Z axis.
    */
    Axis?: IfcDirection
}

export default IfcAxis1Placement
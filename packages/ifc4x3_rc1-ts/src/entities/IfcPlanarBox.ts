// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPlanarBox

import { IfcAxis2Placement, IfcLengthMeasure } from '../types'
import { IfcPlanarExtent } from './'

/** A planar box specifies an arbitrary rectangular box and its location in a two dimensional Cartesian coordinate system.
 *
 * If the planar box is used within a three-dimensional coordinate system, it defines the rectangular box within the XY plane.
 */
 class IfcPlanarBox extends IfcPlanarExtent {
    constructor(SizeInX:IfcLengthMeasure, SizeInY:IfcLengthMeasure, Placement:IfcAxis2Placement) {
        super(SizeInX, SizeInY)
        this.Placement = Placement
    }
    /** The IfcAxis2Placement positions a local coordinate system for the definition of the rectangle.
     * The origin of this local coordinate system serves as the lower left corner of the rectangular box.
     * In case of a 3D placement by IfcAxisPlacement3D the IfcPlanarBox is defined within the xy plane of the definition coordinate system.
    */
    Placement: IfcAxis2Placement
}

export default IfcPlanarBox
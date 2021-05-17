// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSphericalSurface

import { IfcPositiveLengthMeasure } from '../types'
import { IfcAxis2Placement3D, IfcElementarySurface } from './'

/** The IfcSphericalSurface is a bounded elementary surface.
 *
 * The inherited Position attribute defines the IfcAxisPlacement3D and provides:
 */
 class IfcSphericalSurface extends IfcElementarySurface {
    constructor(Position:IfcAxis2Placement3D, Radius:IfcPositiveLengthMeasure) {
        super(Position)
        this.Radius = Radius
    }
    /** The radius of the sphere.
    */
    Radius: IfcPositiveLengthMeasure
}

export default IfcSphericalSurface
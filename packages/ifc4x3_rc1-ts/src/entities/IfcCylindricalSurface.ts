// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCylindricalSurface

import { IfcPositiveLengthMeasure } from '../types'
import { IfcAxis2Placement3D, IfcElementarySurface } from './'

/** The cylindrical surface is a surface unbounded in the direction of z. Bounded cylindrical surfaces are defined by using a subtype of IfcBoundedSurface with BasisSurface being a cylindrical surface
 *
 * The inherited attributes are interpreted as
 */
 class IfcCylindricalSurface extends IfcElementarySurface {
    constructor(Position:IfcAxis2Placement3D, Radius:IfcPositiveLengthMeasure) {
        super(Position)
        this.Radius = Radius
    }
    /** The radius of the cylindrical surface.
    */
    Radius: IfcPositiveLengthMeasure
}

export default IfcCylindricalSurface
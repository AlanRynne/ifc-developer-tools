// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStructuralLoadPlanarForce

import { IfcPlanarForceMeasure, IfcLabel } from '../types'
import { IfcStructuralLoadStatic } from './'

/** An instance of the entity IfcStructuralLoadPlanarForce shall be used to define actions on faces.
 */
 class IfcStructuralLoadPlanarForce extends IfcStructuralLoadStatic {
    constructor(Name:IfcLabel, PlanarForceX:IfcPlanarForceMeasure, PlanarForceY:IfcPlanarForceMeasure, PlanarForceZ:IfcPlanarForceMeasure) {
        super(Name)
        this.PlanarForceX = PlanarForceX
        this.PlanarForceY = PlanarForceY
        this.PlanarForceZ = PlanarForceZ
    }
    /** Planar force value in x-direction.
    */
    PlanarForceX?: IfcPlanarForceMeasure
    /** Planar force value in y-direction.
    */
    PlanarForceY?: IfcPlanarForceMeasure
    /** Planar force value in z-direction.
    */
    PlanarForceZ?: IfcPlanarForceMeasure
}

export default IfcStructuralLoadPlanarForce
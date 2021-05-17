// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStructuralLoadSingleForceWarping

import { IfcWarpingMomentMeasure, IfcLabel, IfcForceMeasure, IfcTorqueMeasure } from '../types'
import { IfcStructuralLoadSingleForce } from './'

/** Instances of the entity IfcStructuralLoadSingleForceWarping, as a subtype of IfcStructuralLoadSingleForce, shall be used to define an action operation on a single point.
 *
 * In addition to forces and moments defined by its supertype a warping moment can be defined.
 */
 class IfcStructuralLoadSingleForceWarping extends IfcStructuralLoadSingleForce {
    constructor(Name:IfcLabel, ForceX:IfcForceMeasure, ForceY:IfcForceMeasure, ForceZ:IfcForceMeasure, MomentX:IfcTorqueMeasure, MomentY:IfcTorqueMeasure, MomentZ:IfcTorqueMeasure, WarpingMoment:IfcWarpingMomentMeasure) {
        super(Name, ForceX, ForceY, ForceZ, MomentX, MomentY, MomentZ)
        this.WarpingMoment = WarpingMoment
    }
    /** The warping moment at the point load.
    */
    WarpingMoment?: IfcWarpingMomentMeasure
}

export default IfcStructuralLoadSingleForceWarping
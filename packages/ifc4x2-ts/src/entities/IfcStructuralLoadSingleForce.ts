// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStructuralLoadSingleForce

import { IfcForceMeasure, IfcTorqueMeasure, IfcLabel } from '../types'
import { IfcStructuralLoadStatic } from './'

/** Instances of the entity IfcStructuralLoadSingleForce shall be used to define the forces and moments of an action operating on a single point.
 */
 class IfcStructuralLoadSingleForce extends IfcStructuralLoadStatic {
    constructor(Name:IfcLabel, ForceX:IfcForceMeasure, ForceY:IfcForceMeasure, ForceZ:IfcForceMeasure, MomentX:IfcTorqueMeasure, MomentY:IfcTorqueMeasure, MomentZ:IfcTorqueMeasure) {
        super(Name)
        this.ForceX = ForceX
        this.ForceY = ForceY
        this.ForceZ = ForceZ
        this.MomentX = MomentX
        this.MomentY = MomentY
        this.MomentZ = MomentZ
    }
    /** Force value in x-direction.
    */
    ForceX?: IfcForceMeasure
    /** Force value in y-direction.
    */
    ForceY?: IfcForceMeasure
    /** Force value in z-direction.
    */
    ForceZ?: IfcForceMeasure
    /** Moment about the x-axis.
    */
    MomentX?: IfcTorqueMeasure
    /** Moment about the y-axis.
    */
    MomentY?: IfcTorqueMeasure
    /** Moment about the z-axis.
    */
    MomentZ?: IfcTorqueMeasure
}

export default IfcStructuralLoadSingleForce
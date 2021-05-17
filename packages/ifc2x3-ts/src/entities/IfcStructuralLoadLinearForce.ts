// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStructuralLoadLinearForce

import { IfcLinearForceMeasure, IfcLinearMomentMeasure, IfcLabel } from '../types'
import { IfcStructuralLoadStatic } from './'

/** An instance of the entity IfcStructuralLoadLinearForce shall be used to define actions on curves.
 */
 class IfcStructuralLoadLinearForce extends IfcStructuralLoadStatic {
    constructor(Name:IfcLabel, LinearForceX:IfcLinearForceMeasure, LinearForceY:IfcLinearForceMeasure, LinearForceZ:IfcLinearForceMeasure, LinearMomentX:IfcLinearMomentMeasure, LinearMomentY:IfcLinearMomentMeasure, LinearMomentZ:IfcLinearMomentMeasure) {
        super(Name)
        this.LinearForceX = LinearForceX
        this.LinearForceY = LinearForceY
        this.LinearForceZ = LinearForceZ
        this.LinearMomentX = LinearMomentX
        this.LinearMomentY = LinearMomentY
        this.LinearMomentZ = LinearMomentZ
    }
    /** Linear force value in x-direction.
    */
    LinearForceX?: IfcLinearForceMeasure
    /** Linear force value in y-direction.
    */
    LinearForceY?: IfcLinearForceMeasure
    /** Linear force value in z-direction.
    */
    LinearForceZ?: IfcLinearForceMeasure
    /** Linear moment about the x-axis.
    */
    LinearMomentX?: IfcLinearMomentMeasure
    /** Linear moment about the y-axis.
    */
    LinearMomentY?: IfcLinearMomentMeasure
    /** Linear moment about the z-axis.
    */
    LinearMomentZ?: IfcLinearMomentMeasure
}

export default IfcStructuralLoadLinearForce
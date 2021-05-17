// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSurfaceReinforcementArea

import { IfcLengthMeasure, IfcRatioMeasure, IfcLabel } from '../types'
import { IfcStructuralLoadOrResult } from './'

/** Describes required or provided reinforcement area of surface members.
 */
 class IfcSurfaceReinforcementArea extends IfcStructuralLoadOrResult {
    constructor(Name:IfcLabel, SurfaceReinforcement1:Array<IfcLengthMeasure>, SurfaceReinforcement2:Array<IfcLengthMeasure>, ShearReinforcement:IfcRatioMeasure) {
        super(Name)
        this.SurfaceReinforcement1 = SurfaceReinforcement1
        this.SurfaceReinforcement2 = SurfaceReinforcement2
        this.ShearReinforcement = ShearReinforcement
    }
    /** Reinforcement at the face of the member which is located at the side of the positive local z direction of the surface member.
     * Specified as area per length, e.g. square metre per metre (hence length measure, e.g. metre).
     * The reinforcement area may be specified for two or three directions of reinforcement bars.
    */
    SurfaceReinforcement1?: Array<IfcLengthMeasure>
    /** Reinforcement at the face of the member which is located at the side of the negative local z direction of the surface member.
     * Specified as area per length, e.g. square metre per metre (hence length measure, e.g. metre).
     * The reinforcement area may be specified for two or three directions of reinforcement bars.
    */
    SurfaceReinforcement2?: Array<IfcLengthMeasure>
    /** Shear reinforcement.
     * Specified as area per area, e.g. square metre per square metre (hence ratio measure, i.e. unitless).
    */
    ShearReinforcement?: IfcRatioMeasure
}

export default IfcSurfaceReinforcementArea
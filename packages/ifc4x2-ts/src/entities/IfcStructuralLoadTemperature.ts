// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStructuralLoadTemperature

import { IfcThermodynamicTemperatureMeasure, IfcLabel } from '../types'
import { IfcStructuralLoadStatic } from './'

/** An instance of the entity IfcStructuralLoadTemperature shall be used to define actions which are caused by a temperature change.
 *
 * As shown in Figure 440, the change of temperature is given with a constant value which is applied to the complete section and values for temperature differences between outer fibres of the section.
 */
 class IfcStructuralLoadTemperature extends IfcStructuralLoadStatic {
    constructor(Name:IfcLabel, DeltaTConstant:IfcThermodynamicTemperatureMeasure, DeltaTY:IfcThermodynamicTemperatureMeasure, DeltaTZ:IfcThermodynamicTemperatureMeasure) {
        super(Name)
        this.DeltaTConstant = DeltaTConstant
        this.DeltaTY = DeltaTY
        this.DeltaTZ = DeltaTZ
    }
    /** Temperature change which affects the complete section of the structural member, or the uniform portion of a non-uniform temperature change.
     * A positive value describes an increase in temperature.
     * I.e. a positive constant temperature change causes elongation of a member, or compression in the member if there are respective restraints.
    */
    DeltaTConstant?: IfcThermodynamicTemperatureMeasure
    /** Non-uniform temperature change, specified as the difference of the temperature change at the outer fibre of the positive y direction minus the temperature change at the outer fibre of the negative y direction of the analysis member.
     * A positive non-uniform temperature change in y induces a negative curvature of the member about z, or a positive bending moment about z if there are respective restraints.
     * y and z are local member axes.
    */
    DeltaTY?: IfcThermodynamicTemperatureMeasure
    /** Non-uniform temperature change, specified as the difference of the temperature change at the outer fibre of the positive z direction minus the temperature change at the outer fibre of the negative z direction of the analysis member.
     * A positive non-uniform temperature change in z induces a positive curvature of the member about y, or a negative bending moment about y if there are respective restraints.
     * y and z are local member axes.
    */
    DeltaTZ?: IfcThermodynamicTemperatureMeasure
}

export default IfcStructuralLoadTemperature
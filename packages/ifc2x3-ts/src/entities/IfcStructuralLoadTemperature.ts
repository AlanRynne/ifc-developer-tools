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
    constructor(Name:IfcLabel, DeltaT_Constant:IfcThermodynamicTemperatureMeasure, DeltaT_Y:IfcThermodynamicTemperatureMeasure, DeltaT_Z:IfcThermodynamicTemperatureMeasure) {
        super(Name)
        this.DeltaT_Constant = DeltaT_Constant
        this.DeltaT_Y = DeltaT_Y
        this.DeltaT_Z = DeltaT_Z
    }
    /** undefined
    */
    DeltaT_Constant?: IfcThermodynamicTemperatureMeasure
    /** undefined
    */
    DeltaT_Y?: IfcThermodynamicTemperatureMeasure
    /** undefined
    */
    DeltaT_Z?: IfcThermodynamicTemperatureMeasure
}

export default IfcStructuralLoadTemperature
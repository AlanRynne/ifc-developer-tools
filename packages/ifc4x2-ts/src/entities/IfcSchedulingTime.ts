// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSchedulingTime

import { IfcLabel, IfcDataOriginEnum } from '../types'

/** IfcSchedulingTime is the abstract supertype of entities that capture time-related information of processes.
 */
abstract class IfcSchedulingTime  {
    constructor(Name:IfcLabel, DataOrigin:IfcDataOriginEnum, UserDefinedDataOrigin:IfcLabel) {

        this.Name = Name
        this.DataOrigin = DataOrigin
        this.UserDefinedDataOrigin = UserDefinedDataOrigin
    }
    /** Optional name for the time definition.
    */
    Name?: IfcLabel
    /** Specifies the origin of the scheduling time entity.
     * It currently differentiates between predicted, simulated, measured, and user defined values.
    */
    DataOrigin?: IfcDataOriginEnum
    /** Value of the data origin if DataOrigin attribute is USERDEFINED.
    */
    UserDefinedDataOrigin?: IfcLabel
}

export default IfcSchedulingTime
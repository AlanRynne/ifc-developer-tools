// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcProcedure

import { IfcIdentifier, IfcProcedureTypeEnum, IfcLabel, IfcGloballyUniqueId, IfcText } from '../types'
import { IfcOwnerHistory, IfcProcess } from './'

/** An IfcProcedure is a logical set of actions to be taken in response to an event or to cause an event to occur.
 *
 * Use definitions IfcProcedure is used to capture information about stepped processes such as calibration, start/stop procedures for equipment items, designated actions to take in the event of an emergency etc. A procedure is not a task, but may describe a set of tasks and their order of occurrence in response to or to cause an event.
 *
 * As shown in Figure 11, IfcProcedure does not restrict anything but describes specific steps of how something should happen.
 *
 * While a procedure does control/restrict in the sense of indicating "this is how the task should be performed" by nature of describing inner detail, this is not different than parts of a product indicating "this is how the parts should be assembled".
 *
 * Consequently, it doesn't restrict the outer item as a whole but provides inner detail of the item.
 */
 class IfcProcedure extends IfcProcess {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ProcedureID:IfcIdentifier, ProcedureType:IfcProcedureTypeEnum, UserDefinedProcedureType:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType)
        this.ProcedureID = ProcedureID
        this.ProcedureType = ProcedureType
        this.UserDefinedProcedureType = UserDefinedProcedureType
    }
    /** undefined
    */
    ProcedureID: IfcIdentifier
    /** undefined
    */
    ProcedureType: IfcProcedureTypeEnum
    /** undefined
    */
    UserDefinedProcedureType?: IfcLabel
}

export default IfcProcedure
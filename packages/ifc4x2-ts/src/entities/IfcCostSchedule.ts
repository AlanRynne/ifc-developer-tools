// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCostSchedule

import { IfcCostScheduleTypeEnum, IfcLabel, IfcDateTime, IfcGloballyUniqueId, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcControl } from './'

/** An IfcCostSchedule brings together instances of IfcCostItem either for the purpose of identifying purely cost information as in an estimate for constructions costs or for including cost information within another presentation form such as a work order.
 */
 class IfcCostSchedule extends IfcControl {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, Identification:IfcIdentifier, PredefinedType:IfcCostScheduleTypeEnum, Status:IfcLabel, SubmittedOn:IfcDateTime, UpdateDate:IfcDateTime) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, Identification)
        this.PredefinedType = PredefinedType
        this.Status = Status
        this.SubmittedOn = SubmittedOn
        this.UpdateDate = UpdateDate
    }
    /** Predefined generic type for a cost schedule that is specified in an enumeration.
     * There may be a property set given specifically for the predefined types.
     * IFC4 CHANGE The attribute has been made optional.
    */
    PredefinedType?: IfcCostScheduleTypeEnum
    /** The current status of a cost schedule.
     * Examples of status values that might be used for a cost schedule status include: PLANNED APPROVED AGREED ISSUED STARTED
    */
    Status?: IfcLabel
    /** The date and time on which the cost schedule was submitted.
     * IFC4 CHANGE Type changed from IfcDateTimeSelect.
    */
    SubmittedOn?: IfcDateTime
    /** The date and time that this cost schedule is updated; this allows tracking the schedule history.
     * IFC4 CHANGE Type changed from IfcDateTimeSelect.
    */
    UpdateDate?: IfcDateTime
}

export default IfcCostSchedule
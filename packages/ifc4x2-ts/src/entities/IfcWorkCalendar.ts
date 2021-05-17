// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcWorkCalendar

import { IfcWorkTime, IfcOwnerHistory, IfcControl } from './'
import { IfcWorkCalendarTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'

/** An IfcWorkCalendar defines working and non-working time periods for tasks and resources.
 *
 * It enables to define both specific time periods, such as from 7:00 till 12:00 on 25th August 2009, as well as repetitive time periods based on frequently used recurrence patterns, such as each Monday from 7:00 till 12:00 between 1st March 2009 and 31st December 2009
 *
 * A work calendar is a subtype of IfcControl and thus inherits the feature for controlling other objects through IfcRelAssignsToControl, which is used to define a work calendar for tasks (IfcTask) and resources (IfcResource).
 *
 * It also inherits a name and description attribute, whereas a name shall be given and a description may be given as an indication of its content and usage
 *
 * The definition of time periods can be derived from a base calendar and/or modified/defined by a set of working times and non-working exception times.
 *
 * All time periods defined by IfcWorkCalendar
 *
 * ExceptionTimes override the time periods inherited from the base calendar (base calendar is defined as the next applicable calendar for the task or resource).
 *
 * Thus, exception times replace the working times from the base calendar
 *
 * Figure 146 shows the definition of a work calendar, which is defined by a set of work times and exception times.
 *
 * The work times are defined as recurring patterns with optional boundaries (applying from and/or to a specific date).
 *
 * The shown example defines a simple work calendar with working times Monday to Thursday 8:00 to 12:00 and 13:00 to 17:00, Friday 8:00 to 14:00 and as exception every 1st Monday in a month the work starts one hour later - i.e. the working time on every 1st Monday in a month is overriden to be 9:00 to 12:00 and 13:00 to 17:00.
 *
 * Both the working time and the exception time is valid for the period of 01.09.2010 till 30.08.2011.
 */
 class IfcWorkCalendar extends IfcControl {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, Identification:IfcIdentifier, WorkingTimes:Array<IfcWorkTime>, ExceptionTimes:Array<IfcWorkTime>, PredefinedType:IfcWorkCalendarTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, Identification)
        this.WorkingTimes = WorkingTimes
        this.ExceptionTimes = ExceptionTimes
        this.PredefinedType = PredefinedType
    }
    /** Set of times periods that are regarded as an initial set-up of working times.
     * Exception times can then further restrict these working times.
    */
    WorkingTimes?: Array<IfcWorkTime>
    /** Set of times periods that define exceptions (non-working times) for the given working times including the base calendar, if provided.
    */
    ExceptionTimes?: Array<IfcWorkTime>
    /** Identifies the predefined types of a work calendar from which the type required may be set.
     * IFC4 CHANGE Attribute added
    */
    PredefinedType?: IfcWorkCalendarTypeEnum
}

export default IfcWorkCalendar
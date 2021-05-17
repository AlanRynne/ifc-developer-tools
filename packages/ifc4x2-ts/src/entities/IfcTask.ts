// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTask

import { IfcLabel, IfcBoolean, IfcInteger, IfcTaskTypeEnum, IfcGloballyUniqueId, IfcText, IfcIdentifier } from '../types'
import { IfcTaskTime, IfcOwnerHistory, IfcProcess } from './'

/** An IfcTask is an identifiable unit of work to be carried out in a construction project
 *
 * A task is typically used to describe an activity for the construction or installation of products, but is not limited to these types.
 *
 * For example it might be used to describe design processes, move operations and other design, construction and operation related activities as well.
 *
 * Quantities of resources consumed by the task are dealt with by defining the IfcElementQuantity for the resource and not at the instance of IfcTask
 *
 * Attribute use definition Each occurrence of IfcTask is given a name that is indicative of its content (IfcRoot.Name).
 *
 * A textual description of the task may be provided and this may be further elaborated by a narrative long description (IfcProcess.LongDescription).
 *
 * A work method may be declared for the method of work used in carrying out a task.
 *
 * A task is identified as being either a milestone task or not.
 *
 * A milestone task is defined by the marker IsMilestone.
 *
 * and has no duration.
 *
 * A status and priority for each task may also be set.
 *
 * Time and duration use definition Compared to previous IFC releases, basic task time information (scheduled start time, scheduled finish time, duration) is now directly attached to IfcTask through the TaskTime attribute.
 *
 * Regular tasks are defined through IfcTaskTime.
 *
 * Recurring tasks are defined through IfcTaskTimeRecurring.
 *
 * In case a regular task is derived from a recurring task both tasks should be linked together through a IfcRelNests relationship, where IfcRelNests
 *
 * IsNestedBy points to the recurring task and IfcRelNests
 *
 * Nests points to all regular tasks that have been derived from the recurring task.
 *
 * Representation of other activities The use definitions for IfcTask have been generalised to represent other activities as well, including activities that had been defined by own entities in previous IFC releases.
 *
 * This includes IfcTask represents an order that might be carried out by a Helpdesk acting the role of interface for the organization between the facility user and the functional requirement of fulfilling their needs.
 *
 * The actual task represented by the IfcTask entity is turning a request into an order and initiating the action that will enable the order to be completed.
 *
 * The IfcProjectOrder or one of its subtypes including maintenance work order, is related to the IfcTask using IfcRelAssignsToControl.
 *
 * IfcTask can also be used to describe an activity that moves people, groups within an organization or complete organizations together with their associated furniture and equipment from one place to another.
 *
 * It thus replaces the previous IFC entity IfcMove.
 *
 * The functionality is represented in IfcTask as follows:
 */
 class IfcTask extends IfcProcess {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, Identification:IfcIdentifier, LongDescription:IfcText, Status:IfcLabel, WorkMethod:IfcLabel, IsMilestone:IfcBoolean, Priority:IfcInteger, TaskTime:IfcTaskTime, PredefinedType:IfcTaskTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, Identification, LongDescription)
        this.Status = Status
        this.WorkMethod = WorkMethod
        this.IsMilestone = IsMilestone
        this.Priority = Priority
        this.TaskTime = TaskTime
        this.PredefinedType = PredefinedType
    }
    /** Current status of the task.
     * Particular values for status are not specified, these should be determined and agreed by local usage.
     * Examples of possible status values include 'Not Yet Started', 'Started', 'Completed'.
    */
    Status?: IfcLabel
    /** The method of work used in carrying out a task.
     * This attribute should not be used if the work method is specified for the IfcTaskType
    */
    WorkMethod?: IfcLabel
    /** Identifies whether a task is a milestone task (=TRUE) or not (= FALSE).
     * In small project planning applications, a milestone task may be understood to be a task having no duration.
     * As such, it represents a singular point in time.
    */
    IsMilestone: IfcBoolean
    /** A value that indicates the relative priority of the task (in comparison to the priorities of other tasks).
    */
    Priority?: IfcInteger
    /** Time related information for the task.
     * IFC4 CHANGE Attribute added
    */
    TaskTime?: IfcTaskTime
    /** Identifies the predefined types of a task from which the type required may be set.
     * IFC4 CHANGE Attribute added
    */
    PredefinedType?: IfcTaskTypeEnum
}

export default IfcTask
// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTaskType

import { IfcTaskTypeEnum, IfcLabel, IfcGloballyUniqueId, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcTypeProcess } from './'

/** An IfcTaskType defines a particular type of task that may be specified for use within a work control.
 *
 * An IfcTaskType provides for all forms of types of task that may be specified.
 *
 * It is a reference definition for a unit of work that may be broken down into (a sequence of) subtasks.
 *
 * Please note that a reference definition can not be part of a workflow definition, i.e. IfcTaskType instances define the most abstract level of a reference process without dependencies to other reference processes.
 *
 * Usage of IfcTaskType defines the parameters for one or more occurrences of IfcTask.
 *
 * Parameters may be specified through property sets that may be enumerated in the IfcTaskTypeEnum data type or through explict attributes of IfcTaskType.
 *
 * Task occurrences (IfcTask entities) are linked to the task type through the IfcRelDefinesByType relationship.
 *
 * Figure 145 shows the definition of a task type that is part of a task template library.
 *
 * Please note that in this example the task type is further subdivided into tasks that define task times (for example, duration) and/or a task sequence.
 */
 class IfcTaskType extends IfcTypeProcess {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, Identification:IfcIdentifier, LongDescription:IfcText, ProcessType:IfcLabel, PredefinedType:IfcTaskTypeEnum, WorkMethod:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, Identification, LongDescription, ProcessType)
        this.PredefinedType = PredefinedType
        this.WorkMethod = WorkMethod
    }
    /** Identifies the predefined types of a task type from which the type required may be set.
    */
    PredefinedType: IfcTaskTypeEnum
    /** The method of work used in carrying out a task.
    */
    WorkMethod?: IfcLabel
}

export default IfcTaskType
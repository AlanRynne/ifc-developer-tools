// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelSequence

import { IfcProcess, IfcOwnerHistory, IfcRelConnects } from './'
import { IfcTimeMeasure, IfcSequenceEnum, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'

/** IfcRelSequence is a sequential relationship between processes where one process must occur before the other in time and where the timing of the relationship may be described as a type of sequence.
 *
 * The relating process (IfcRelSequence
 *
 * RelatingProcess) is considered to be the predecessor in the relationship (has precedence) whilst the related process (IfcRelSequence
 *
 * RelatedProcess) is the successor.
 *
 * IfcRelSequence is defined as one-to-one relationship; therefore it assigns one predecessor to one successor.
 *
 * Use definitions IfcRelSequence is used to describe the logical sequence relationship that exists between two processes.
 *
 * This logical relationship identifies that there is a predecessor or relating process and a successor or related process.
 *
 * In IFC, there may be one predecessor and one successor in the relationship.
 *
 * Many occurrences of IfcRelSequence may exist to describe the sequence relationships of a predecessor task with many successor tasks or of many predecessor tasks with one successor task, thus enabling a m:n sequence relationship between tasks.
 *
 * Please note that sequence relationships can be used to define dependencies between process occurrences but also between process types (for further information see IfcRelDefinesByObject and IfcTaskType).
 *
 * In case of defining dependencies between process occurrences sequence relationships should stay within the limits of a directed, non-cyclic graph.
 *
 * A sequence type may be set for a sequence.
 *
 * For tasks assigned to a work schedule, it is expected that the sequence type will be asserted.
 *
 * For a process map, where the sequence relationship between processes is simply a logical flow, it need not be asserted.
 *
 * A time lag may be assigned to a sequence, and the sequence type defines the way in which the time lag applies to the sequence either as a ratio or percentage of time duration (e.g. start successor task when predecessor is 50% complete) or as a time measure (e.g. start successor task 1 week after commencement of the predecessor task).
 *
 * Care should be used when assigning a time lag to a sequence depending on the setting of the sequence type since there is no checking that the time lag value is in keeping with the sequence type set.
 */
 class IfcRelSequence extends IfcRelConnects {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatingProcess:IfcProcess, RelatedProcess:IfcProcess, TimeLag:IfcTimeMeasure, SequenceType:IfcSequenceEnum) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.RelatingProcess = RelatingProcess
        this.RelatedProcess = RelatedProcess
        this.TimeLag = TimeLag
        this.SequenceType = SequenceType
    }
    /** Reference to the process, that is the predecessor.
    */
    RelatingProcess: IfcProcess
    /** Reference to the process, that is the successor.
    */
    RelatedProcess: IfcProcess
    /** Time duration of the sequence, it is the time lag between the predecessor and the successor as specified by the SequenceType.
    */
    TimeLag: IfcTimeMeasure
    /** The way in which the time lag applies to the sequence.
    */
    SequenceType: IfcSequenceEnum
}

export default IfcRelSequence
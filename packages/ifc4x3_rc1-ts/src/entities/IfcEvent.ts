// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcEvent

import { IfcEventTypeEnum, IfcEventTriggerTypeEnum, IfcLabel, IfcGloballyUniqueId, IfcText, IfcIdentifier } from '../types'
import { IfcEventTime, IfcOwnerHistory, IfcProcess } from './'

/** An IfcEvent is something that happens that triggers an action or response.
 *
 * Use definitions IfcEvent is used to capture information about particular things that happen or that may happen.
 *
 * Particularly used in work plans (or process maps) they identify e.g. a point at which a message containing information may be issued or at which a rule or constraint is invoked.
 */
 class IfcEvent extends IfcProcess {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, Identification:IfcIdentifier, LongDescription:IfcText, PredefinedType:IfcEventTypeEnum, EventTriggerType:IfcEventTriggerTypeEnum, UserDefinedEventTriggerType:IfcLabel, EventOccurenceTime:IfcEventTime) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, Identification, LongDescription)
        this.PredefinedType = PredefinedType
        this.EventTriggerType = EventTriggerType
        this.UserDefinedEventTriggerType = UserDefinedEventTriggerType
        this.EventOccurenceTime = EventOccurenceTime
    }
    /** Identifies the predefined types of an event from which the type required may be set.
    */
    PredefinedType?: IfcEventTypeEnum
    /** Identifies the predefined types of event trigger from which the type required may be set.
    */
    EventTriggerType?: IfcEventTriggerTypeEnum
    /** A user defined event trigger type, the value of which is asserted when the value of an event trigger type is declared as USERDEFINED.
    */
    UserDefinedEventTriggerType?: IfcLabel
    /** The date and/or time at which an event occurs.
    */
    EventOccurenceTime?: IfcEventTime
}

export default IfcEvent
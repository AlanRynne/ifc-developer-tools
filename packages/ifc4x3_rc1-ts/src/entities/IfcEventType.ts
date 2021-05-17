// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcEventType

import { IfcEventTypeEnum, IfcEventTriggerTypeEnum, IfcLabel, IfcGloballyUniqueId, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcTypeProcess } from './'

/** An IfcEventType defines a particular type of event that may be specified
 *
 * An IfcEventType provides for all forms of types of event that may be specified
 *
 * Usage of IfcEventType defines the parameters for one or more occurrences of IfcEvent.
 *
 * Parameters may be specified through property sets that may be enumerated in the IfcEventTypeEnum data type or through explicit attributes of IfcEvent.
 *
 * Event occurrences (IfcEvent entities) are linked to the event type through the IfcRelDefinesByType relationship.
 */
 class IfcEventType extends IfcTypeProcess {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, Identification:IfcIdentifier, LongDescription:IfcText, ProcessType:IfcLabel, PredefinedType:IfcEventTypeEnum, EventTriggerType:IfcEventTriggerTypeEnum, UserDefinedEventTriggerType:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, Identification, LongDescription, ProcessType)
        this.PredefinedType = PredefinedType
        this.EventTriggerType = EventTriggerType
        this.UserDefinedEventTriggerType = UserDefinedEventTriggerType
    }
    /** Identifies the predefined types of an event from which the type required may be set.
    */
    PredefinedType: IfcEventTypeEnum
    /** Identifies the predefined types of event trigger from which the type required may be set.
    */
    EventTriggerType: IfcEventTriggerTypeEnum
    /** A user defined event trigger type, the value of which is asserted when the value of an event trigger type is declared as USERDEFINED.
    */
    UserDefinedEventTriggerType?: IfcLabel
}

export default IfcEventType
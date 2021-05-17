// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcProcess

import { IfcIdentifier, IfcText, IfcGloballyUniqueId, IfcLabel } from '../types'
import { IfcOwnerHistory, IfcObject } from './'

/** IfcProcess is defined as one individual activity or event, that is ordered in time, that has sequence relationships with other processes, which transforms input in output, and may connect to other other processes through input output relationships.
 *
 * An IfcProcess can be an activity (or task), or an event.
 *
 * It takes usually place in building construction with the intent of designing, costing, acquiring, constructing, or maintaining products or other and similar tasks or procedures.
 *
 * Figure 132 illustrates process relationships
 *
 * Process information relates to other objects by establishing the following relationships:
 */
abstract class IfcProcess extends IfcObject {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, Identification:IfcIdentifier, LongDescription:IfcText) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType)
        this.Identification = Identification
        this.LongDescription = LongDescription
    }
    /** An identifying designation given to a process or activity.
     * It is the identifier at the occurrence level.
     * IFC4 CHANGE Attribute promoted from subtypes.
    */
    Identification?: IfcIdentifier
    /** An extended description or narrative that may be provided.
     * IFC4 CHANGE New attribute.
    */
    LongDescription?: IfcText
}

export default IfcProcess